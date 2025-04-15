'use client'
import { useEffect } from "react";
const InterviewHeader = ({ date, title, experienceLevel, feedback, score,aiquestions,selectedQuestion }) => {
      // Find AI response matching the selected question's ID

  // Find AI response matching the selected question's ID
  
  const aiResponse = aiquestions.find(ai => ai.questionsId[0] === selectedQuestion._id);

    return (
      <div className="border flex flex-col md:flex-row gap-4 md:gap-8 bg-[rgba(30,58,138,0.3)] mb-8 md:mb-12 p-4 md:p-[33px] rounded-2xl border-solid border-[rgba(255,255,255,0.2)]">
        <div className="flex-1">
          <div className="text-gray-400 text-base mb-2">{date}</div>
          <div className="text-white text-3xl font-bold mb-2">{title}</div>
          <div className="text-gray-300 text-base mb-4">
            Experience Level: {experienceLevel}
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-xl">
            <div className="flex items-center gap-2 text-[#60A5FA] text-base mb-2">
              <span>AI Quick Feedback:</span>
            </div>
            <div className="text-white text-base">{aiResponse ? aiResponse.suggestions : 'Loading...'}</div>
          </div>
        </div>
        <div className="w-48 h-48 relative mx-auto md:mx-0">
          <div className="w-48 h-48 flex flex-col items-center justify-center rounded-[50%] border-8 border-solid border-[#60A5FA]">
            <div className="text-white text-4xl font-bold"> {aiResponse ? aiResponse.rating : 'N/A'}</div>
            <div className="text-gray-300 text-base mt-2">Overall Score</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InterviewHeader;
  