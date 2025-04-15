
import React from "react";

export const Transcription = ({latestTranscription, setLatestTranscription}) => {
  return (
    <div className="flex flex-col gap-4 bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)] p-4 rounded-2xl border border-[rgba(255,255,255,0.1)]">
      <h2 className="text-white text-base font-medium">Live Transcription</h2>
      <div className="flex flex-col gap-3">
      
        <p className="text-[#00F7FF] text-base">{latestTranscription || "No answer recorded yet."}</p>
       
      </div>
    </div>
  );
};
