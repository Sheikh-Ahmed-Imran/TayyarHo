'use client'
import { jsPDF } from "jspdf";
import { answerPrompt } from "../../../model/promptConstants";
import { useState,useEffect } from "react";
import html2canvas from "html2canvas";
import {Navbar} from "../../../../components/custom/Navbar";
import InterviewHeader from "./components/InterviewHeader";
import QuestionCard from "./components/QuestionCard";
import ConfidenceAnalysis from "./components/ConfidenceAnalysis";
import FeedbackSection from "./components/FeedbackSection";
import { chatSession } from "../../../model/modelRun";

import ImprovementPlan from "./components/ImprovementPlan";
import ActionButtons from "./components/ActionButton";
import { useParams } from "next/navigation";
const Index = () => {

  const handleDownloadPDF = async () => {
    const doc = new jsPDF("p", "mm", "a4"); // A4 size
    const content = document.body; // Capture full page
  
    window.scrollTo(0, 0); // Ensure page is at the top before capture
    const canvas = await html2canvas(content, { scrollX: 0, scrollY: 0, scale: 2 }); // High-quality capture
    const imgData = canvas.toDataURL("image/png");
  
    const imgWidth = 210; // A4 width
    const pageHeight = 297; // A4 height
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let position = 0; // Start at the top
    let remainingHeight = imgHeight;
  
    while (remainingHeight > 0) {
      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      remainingHeight -= pageHeight;
      position -= pageHeight; // Move down the image to continue from the cut-off point
  
      if (remainingHeight > 0) {
        doc.addPage(); // Add a new page
      }
    }
  
    doc.save("full_page_screenshot.pdf");
  };
    const [questions, setQuestions] = useState([]);
  const [aiquestions, setAiQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(); // Track selected question
  const { id } = useParams();
  async function modelRequest(interviewData) {
    if (!interviewData) return;

    
    const formattedQuestions = interviewData.questions.map((q, index) => ({
      id: index + 1,
      question: q.question,
      answer: q.answer,
    }));

    const prompt = answerPrompt(formattedQuestions);
    

    

    try {
      const result = await chatSession.sendMessage(prompt);
      const text = await result.response.text();


      const match = text.match(/```json([\s\S]*)```/);
      if (!match) throw new Error("Invalid JSON format from AI");

      const cleanedJSON = match[1].trim();
      const jsonResponse = JSON.parse(cleanedJSON);
     
      setAiQuestions(jsonResponse["AI Response"]);
      
      // Map AI responses with question IDs
      const questionIds = interviewData.questions.map(q => q._id);
      const aiSuggestions = jsonResponse["AI Response"].map((item, index) => ({
        questionsId: questionIds[index],
        interviewId: interviewData.interviewId,
        rating: item.rating,
        aianswer: item.suggestedAnswer,
        suggestions: item.suggestion,
        emotions: item.emotions,
        emotionAdvice: item.emotionAdvice,
      }));

     

      // ✅ **Single POST request for both evaluations and emotional analysis**
      const response = await fetch(`/api/AISuggestions/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aiSuggestions),
      });

      const data = await response.json();
      
 
    } catch (error) {
      console.error("Error generating interview analysis:", error);
    }
  }

  const fetchQuestions = async () => {
    try {
      const res = await fetch(`/api/question/${id}`);
      const data = await res.json();
      
      setSelectedQuestion(data.questions[0])
      setQuestions(data.questions || []);
      return data;
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  async function fetchAndGenerateQuestions() {
    const questionData = await fetchQuestions();
    if (!questionData) return;

    try {
      const aiRes = await fetch(`/api/AISuggestions/${questionData.interviewId}`);
      const aiData = await aiRes.json();
      
      if (aiData && aiData.length > 0) {
        
        setAiQuestions(aiData);
        return;
      }

      //console.log("⚡ No AI suggestions found, calling AI model...");
      await modelRequest(questionData);
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchAndGenerateQuestions();
    }
  }, [id]);

  // Ensure the first question's data is shown once AI questions are loaded
// Runs whenever aiquestions is updated
  const [interviewData] = useState({
    date: "April 3, 2025 • 20:30 PM EST",
    title: "Mern Stack Developer",
    experienceLevel: "Fresher with no experience",
    feedback:
      '"Great job on technical knowledge! Improve structuring of answers."',
    score: 85,
    questions: [
      {
        id: 1,
        title: "Q1: Explain React's Virtual DOM",
        answer: "Virtual DOM is a lightweight copy of the actual DOM...",
        score: 92,
      },
    ],
    strengths: [
      "Excellent technical knowledge demonstration",
      "Clear communication style",
    ],
    areasToImprove: [
      "Need better STAR method implementation",
      "Add more real-world examples",
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#111827] to-[#1E3A8A]" id="pdf-content">
      <Navbar />
      <main className="max-w-screen-xl mx-auto my-0 px-20 py-12 max-md:p-4">
        <InterviewHeader
          date={interviewData.date}
          title={interviewData.title}
          experienceLevel={interviewData.experienceLevel}
          feedback={interviewData.feedback}
          score={interviewData.score}
          selectedQuestion={selectedQuestion}
          aiquestions={aiquestions} 
        />

        <div className="flex gap-8 mb-12 max-md:flex-col max-sm:p-4">
          <QuestionCard questions={questions} 
        loading={loading} 
        setSelectedQuestion={setSelectedQuestion}
        selectedQuestion={selectedQuestion}
       />
    
          <ConfidenceAnalysis aiquestions={aiquestions} selectedQuestion={selectedQuestion} />
        </div>

        <FeedbackSection
           selectedQuestion={selectedQuestion}
           aiquestions={aiquestions}
        />

        <ImprovementPlan />
        <ActionButtons pdf={handleDownloadPDF}/>
      </main>
    </div>
  );
};

export default Index;