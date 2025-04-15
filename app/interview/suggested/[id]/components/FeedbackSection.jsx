'use client'
import React,{useState} from "react";

const FeedbackSection = ({  aiquestions,selectedQuestion}) => {

  const aiResponse = aiquestions?.find(ai => ai.questionsId?.[0] === selectedQuestion?._id) || null;
  
const [activeTab, setActiveTab] = useState("response");

return (
  <div className="border bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] p-6 rounded-2xl border-solid border-[rgba(255,255,255,0.2)] shadow-lg max-w-3xl mx-auto">
    
    {/* Tab Buttons */}
    <div className="flex justify-center gap-6 border-b border-[rgba(255,255,255,0.2)] pb-3">
      <button
        className={`px-6 py-2 text-lg font-semibold rounded-t-lg transition-all duration-300 ${
          activeTab === "response" ? "text-white border-b-4 border-white" : "text-gray-300 hover:text-white"
        }`}
        onClick={() => setActiveTab("response")}
      >
         Response
      </button>
      <button
        className={`px-6 py-2 text-lg font-semibold rounded-t-lg transition-all duration-300 ${
          activeTab === "feedback" ? "text-white border-b-4 border-white" : "text-gray-300 hover:text-white"
        }`}
        onClick={() => setActiveTab("feedback")}
      >
         Feedback
      </button>
    </div>

    {/* Tab Content */}
    <div className="p-6 text-white text-lg transition-opacity duration-500">
      {activeTab === "response" ? (
        <p className="leading-relaxed">✔️ {aiResponse?.aianswer || "No response available."}</p>
      ) : (
        <p className="leading-relaxed">❌ {aiResponse?.emotionAdvice || "No feedback available."}</p>
      )}
    </div>
  </div>
);
};



export default FeedbackSection;
