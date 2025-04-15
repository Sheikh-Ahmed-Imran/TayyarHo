'use client'
import { useState,useEffect } from "react";

const QuestionCard = ({ questions, loading, setSelectedQuestion,selectedQuestion, aiquestions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedQuestion(questions[currentIndex + 1]); // Update selected question
    }
  };


  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedQuestion(questions[currentIndex - 1]); // Update selected question
    }
  };


  return (
    <div className="flex-1 p-6 rounded-2xl bg-[rgba(30,58,138,0.3)] border border-[rgba(255,255,255,0.2)]">
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : questions.length > 0 ? (
        <div>
          <div className="cursor-pointer p-3 rounded-lg hover:bg-blue-600 transition-all">
            <div className="text-white text-base font-bold mb-4">
              {questions[currentIndex].question}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-white">No questions found.</p>
      )}

      <div className="bg-[rgba(255,255,255,0.05)] mb-4 p-4 rounded-xl">
        <div className="text-gray-300 text-sm mb-2">Your Answer:</div>
        <div className="text-white text-base">{questions[currentIndex]?questions[currentIndex].answer:'Loading..'}</div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-colors disabled:opacity-50"
        >
          ⬅️ Previous
        </button>

        <div className="w-12 h-12 flex items-center justify-center border-[#60A5FA] text-white text-base font-bold rounded-[50%] border-4 border-solid">
          {Math.round(((currentIndex + 1) / questions.length) * 100)}%
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-colors disabled:opacity-50"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
