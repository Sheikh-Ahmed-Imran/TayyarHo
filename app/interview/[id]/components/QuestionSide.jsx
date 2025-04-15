"use client";
import React, { useState, useEffect } from "react";
import { Lightbulb, Volume2, Mic } from "lucide-react";
import axios from "axios";

export default function QuestionSide({ questions, interview }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill("")); // Store answers
  const [isRecording, setIsRecording] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
  }, [answers]);

  if (!questions || !questions.length) {
    return <p className="text-gray-500 text-center mt-5">No questions available</p>;
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
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
      alert("Text-to-speech is not supported in this browser.");
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
  
      setAnswers((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentIndex] = transcript;
        return newAnswers;
      });

      setShowDialog(true);
      setTimeout(() => setShowDialog(false), 1000); // Show dialog for 1 second
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      alert("Speech recognition error: " + event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const submitAnswers = async () => {
  
    if (!interview._id) {
      alert("Error: Interview ID is missing!");
      return;
    }
  
    try {
      const response = await axios.put(`/api/question/${interview._id}`, {
        answers,
      });
  
      alert("All answers have been saved!");
      
    } catch (error) {
      console.error("❌ Error updating answers:", error);
      alert("Failed to save answers. Try again.");
    }
  };

  return (
    <div className="p-8 bg-slate-50 shadow-lg flex flex-col justify-center w-full">
    {/* Show Dialog for Answer Recorded */}
    {showDialog && (
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
        ✅ {answers && answers.filter((ans) => ans.trim() !== "").length} / {questions.length} Answers Recorded
      </div>
    )}
  
    {/* Navigation Buttons */}
    <div className="w-full flex justify-between space-x-4">
      <button
        className={`bg-gray-400 text-white px-6 py-2 font-bold shadow-md rounded-xl text-md w-32 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        PREV
      </button>
  
      <button
        className={`bg-orange-600 text-white px-6 font-bold shadow-md rounded-xl text-md w-32 ${
          currentIndex === questions.length - 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNext}
        disabled={currentIndex === questions.length - 1}
      >
        NEXT
      </button>
    </div>
  
    {/* Question Section */}
    <div className="mt-3">
      <p className="text-sm text-orange-500 m-2">Question {currentIndex + 1}</p>
      <h1 className="font-bold text-2xl p-2">{questions[currentIndex].question}</h1>
  
      {/* Text-to-Speech Button */}
      <Volume2
        onClick={() => textToSpeech(questions[currentIndex]?.question)}
        className="cursor-pointer inline-block ml-2"
      />
    </div>
  
    {/* Voice Recording Button */}
    <div className="mt-5">
      <button
        className={`px-6 py-2 font-bold text-white rounded-lg shadow-md w-32 ${
          isRecording ? "bg-red-600 animate-pulse" : "bg-blue-600"
        }`}
        onClick={startVoiceRecognition}
        disabled={isRecording}
      >
        {isRecording ? "Listening..." : "Record Answer"}
      </button>
      <Mic className="inline-block ml-2 cursor-pointer text-blue-600" />
    </div>
  
    {/* Display Answer */}
    {answers[currentIndex] && (
      <div className="mt-3 p-3 bg-gray-200 rounded-lg">
        <p className="text-gray-700 font-bold">Your Answer:</p>
        <p>{answers[currentIndex]}</p>
      </div>
    )}
  
    {/* Submit Answers Button */}
    <button
      className="bg-green-500 text-white mt-6 px-6 py-3 rounded-lg w-32"
      onClick={submitAnswers}
    >
      Submit All Answers
    </button>
  </div>
  
  
  );
}
