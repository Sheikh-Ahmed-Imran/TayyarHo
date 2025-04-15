'use client'

import { Header } from "./components/Header";
import { AIAnalysis } from "./components/AIAnalysis";
import { VideoFeed } from "./components/VideoFeed";
import { QuestionCard } from "./components/QuestionCard";
import { Timer } from "./components/Timer";
import { Transcription } from "./components/Transcription";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { GEMINI_PROMPT } from "../../model/promptConstants";
import { chatSession } from "../../model/modelRun";

export default function InterviewScreen (){
  const [latestTranscription, setLatestTranscription] = useState("");
  const [progress,setProgress]=useState(0)
    const { id } = useParams();
    const [interview, setInterview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [questions, setQuestions] = useState([]);
  
    // Fetch interview details
    async function fetchInterview() {
      try {
        const response = await fetch(`/api/interview/${id}`);
        if (!response.ok) throw new Error("Failed to fetch interview");
  
        const data = await response.json();
        
        setInterview(data);
  
  
        return data; // Return interview data if no questions exist
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  
    // Generate questions using AI and save to database
    async function modelRequest(interviewData) {
      if (!interviewData) return;
    
      const prompt = GEMINI_PROMPT(interviewData.title, interviewData.experience, interviewData.level);
    
      try {
        const result = await chatSession.sendMessage(prompt);
        const text = await result.response.text();
        
    
        // Try to extract only the JSON portion from the raw response
        const match = text.match(/(\{[\s\S]*\})/); // Match the JSON block in the response
    
        if (!match) throw new Error("Invalid JSON format from AI");
    
        const cleanedJSON = match[1].trim(); // Extract and clean the matched JSON block
        
    
        const jsonResponse = JSON.parse(cleanedJSON);
        
    
        setQuestions(jsonResponse.questions);
    
        // POST the questions to store them in the database
        const response = await fetch(`/api/question/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: interviewData.title,
            interviewId: interviewData._id,
            questions: jsonResponse.questions,
          }),
        });
    
        const data = await response.json();
        
    
        if (data.questionId) {
          fetchLatestQuestions(data.questionId); // Fetch new questions using questionId
        }
    
      } catch (error) {
        setError(error.message);
        setError("Failed to generate questions");
      }
    }
    
  
    // Fetch latest questions using questionId
    async function fetchLatestQuestions(questionId) {
      try {
        const response = await fetch(`/api/question/${questionId}`);
        if (!response.ok) throw new Error("Failed to fetch updated questions");
  
        const updatedQuestions = await response.json();
        setQuestions(updatedQuestions.questions); // Ensure fresh questions appear
      } catch (error) {
        setError(error.message);
      }
    }
  
    // Fetch interview and generate questions if needed
    async function fetchAndGenerateQuestions() {
      const interviewData = await fetchInterview();
      if (interviewData) {
        await modelRequest(interviewData);
      }
    }
  
    // Fetch interview data when the component loads
    useEffect(() => {
      if (id) {
        fetchAndGenerateQuestions();
      }
    }, [id]);
  
    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;
    if (!interview) return <p className="text-center text-gray-500">Interview not found</p>;
  
  return (
    <div className="flex flex-col items-center w-[140vw] h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
      <Header  progress={progress}/>
      <main className="flex w-full justify-center items-start gap-6 px-20 py-24 max-md:flex-col max-md:px-10 max-sm:px-5">
        <aside className="flex flex-col w-[302px] gap-4">
          <AIAnalysis />
        </aside>

        <section className="flex flex-col flex-[grow] gap-4 max-w-[628px]">
          <VideoFeed />
          <QuestionCard interview={interview} questions={questions} latestTranscription={latestTranscription} setLatestTranscription={setLatestTranscription} setProgress={setProgress} progress={progress}/>
        </section>

        <aside className="flex flex-col w-[302px] gap-4">
          <Timer />
          <Transcription latestTranscription={latestTranscription} setLatestTranscription={setLatestTranscription}/>
        </aside>
      </main>
    </div>
  );
};

