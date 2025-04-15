'use client'
import React, { useEffect, useState } from "react";
import { StarRating } from "./StarRating";
import { useRouter } from "next/navigation";



export const EvaluationTable = () => {
  const [evaluations, setEvaluations] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const router=useRouter()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/AISuggestions");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        console.log(data)
        setEvaluations(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
  
    return date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',  // "Jan", "Feb", etc.
      year: 'numeric',
      hour: 'numeric',
      hour12: true,    // 12-hour format
    }).toUpperCase();  // Converts "AM/PM" to "am/pm"
  };
  
  const truncateText = (text, wordLimit = 5) => {
    if (!text) return "";
    const words = text.split(" "); // Split text into words
    return words.length > wordLimit ? words.slice(0, 5).join(" ") + "..." : text;
  };
  
  return (
    <div className="shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)] bg-white rounded-xl max-md:overflow-x-auto">
      <div className="hidden md:flex text-white font-bold text-base bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
        {["Job Role", "Experience", "Interview Date", "Rating", "Questions", "Action"].map((header, index) => (
          <div key={index} className="flex-1 px-6 py-[20px] text-center">{header}</div>
        ))}
      </div>
      <div className="md:hidden text-white font-bold text-base bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-4 py-3">
        Evaluations List
      </div>

      {loading ? (
        <div className="text-center py-6">Loading...</div>
      ) : error ? (
        <div className="text-center py-6 text-red-500">{error}</div>
      ) : evaluations.length === 0 ? (
        <div className="text-center py-6">No data available</div>
      ) : (
        evaluations.map((evaluation, index) => (
          <div key={index} className="flex flex-col md:flex-row border-b border-b-blue-100 items-center p-4 md:px-6 md:py-[20px]">
            <div className="w-full md:flex-1 text-center mb-2 md:mb-0">
              <div className="font-semibold md:hidden text-blue-800">Job Role:</div>
              {evaluation.interviewTitle}
            </div>
            <div className="w-full md:flex-1 text-center mb-2 md:mb-0">
              <div className="font-semibold md:hidden text-blue-800">Experience:</div>
              {evaluation.interviewExperience}
            </div>
            <div className="w-full md:flex-1 text-center mb-2 md:mb-0">
              <div className="font-semibold md:hidden text-blue-800">Date:</div>
              {formatDateTime(evaluation.interviewDate)}
            </div>
            <div className="w-full md:flex-1 text-center mb-2 md:mb-0">
              <div className="font-semibold md:hidden text-blue-800">Rating:</div>
              <div className="flex justify-center">
                <StarRating rating={evaluation.rating} />
              </div>
            </div>
            <div className="w-full md:flex-1 text-center mb-4 md:mb-0">
              <div className="font-semibold md:hidden text-blue-800">Questions:</div>
              5
            </div>
            <div className="w-full md:flex-1 text-center">
              <button className="text-white text-base cursor-pointer w-full md:w-[120px] px-6 py-2 md:py-[9px] rounded-lg border-none bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9]" onClick={()=>{
                router.push(`/interview/suggested/${evaluation.parentQuestionId}`)
              }}>
                View Details
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
