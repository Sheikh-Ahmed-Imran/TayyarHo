"use client";
import React, { useState, useEffect } from "react";
import { Volume2, Mic } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export const QuestionCard = ({ questions, interview,latestTranscription, setLatestTranscription,setProgress }) => {
  const router=useRouter()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(""));
  const [isRecording, setIsRecording] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Track answers state changes
  }, [answers]);

  if (!questions || !questions.length) {
    return <p className="text-gray-500 text-center mt-5">No questions available</p>;
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(currentIndex+1)
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    } else {
      toast.error("Text-to-speech is not supported in this browser.");
    }
  };

  const startVoiceRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    setIsRecording(true);
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setLatestTranscription(transcript);


      setAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentIndex] = transcript;
        return newAnswers;
      });

      setShowDialog(true);
      setTimeout(() => setShowDialog(false), 1000);
      setIsRecording(false);
    };

    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);
    recognition.start();
  };

  const submitAnswers = async () => {
    if (!interview._id) {
      alert("Error: Interview ID is missing!");
      return;
    }
    toast.success("All answers have been saved!", { duration: 3000 });
    setTimeout(() => {
      router.push("/dashboard/all");
    }, 2000);


    try {
      await axios.put(`/api/question/${interview._id}`, { answers });
      alert("All answers have been saved!");
    } catch (error) {
      toast.error("Failed to save answers. Please try again.");
      alert("Failed to save answers. Try again.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {showDialog && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          ✅ {answers.filter((ans) => ans.trim() !== "").length} / {questions.length} Answers Recorded
        </div>
      )}

      <div className="flex flex-col gap-4 border bg-white shadow-lg p-6 rounded-2xl border-2">
        <h2 className="text-black text-2xl">{questions[currentIndex].question}</h2>
        <button className="flex items-center gap-2 text-[#00F7FF]" onClick={() => textToSpeech(questions[currentIndex].question)}>
          <Volume2 />
          <span className="text-center text-base">Play Question</span>
        </button>
      </div>

      <div className="flex justify-center gap-4 max-sm:flex-col">
      <button className={`bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)] p-4  border border-[rgba(255,255,255,0.1)]  text-white " : ""}`} onClick={handlePrev} disabled={currentIndex === 0}>
          PREV
        </button>
        <button className="bg-[#00F7FF] text-base px-6 py-3 rounded-lg" onClick={() => textToSpeech(questions[currentIndex].question)}>
          Repeat Question
        </button>
        <button className={`px-6 py-3 rounded-lg text-white ${isRecording ? "bg-red-600 animate-pulse" : "bg-blue-600"}`} onClick={startVoiceRecognition}>
          {isRecording ? "Listening..." : "Record Answer"}
          <Mic className="inline-block ml-2" />
        </button>
       
        
        <button className={`bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)] p-4 border border-[rgba(255,255,255,0.1)]  text-white ${currentIndex === questions.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={handleNext} disabled={currentIndex === questions.length - 1}>
          NEXT
        </button>
      </div>

   

      <button className="bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)] p-4 rounded-2xl border border-[rgba(255,255,255,0.1)] mt-3 text-white" onClick={submitAnswers}>
        Submit All Answers
      </button>
    </div>
  );
};
