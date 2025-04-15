import React from "react";

export const AIAnalysis = () => {
  return (
    <div className="flex flex-col gap-4 bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)] p-4 rounded-2xl border border-[rgba(255,255,255,0.1)]">
      <h2 className="text-white text-base font-medium">Emotion Analysis</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Pulsating background effect */}
          <div className="absolute w-full h-full bg-[#00F7FF] opacity-20 rounded-full animate-ping" />
          
          {/* Spinning border animation */}
          <div className="absolute w-28 h-28 border-[#00F7FF] rounded-full border-4 left-2 top-2 animate-spin-slow" />
          
          {/* Animated Dots to indicate analyzing */}
          <div className="text-white text-2xl relative z-10 animate-pulse">● ● ●</div>
        </div>
        <div className="text-white text-center text-base">Analyzing Interview</div>
      </div>
      <div className="flex flex-col gap-2 bg-[rgba(255,255,255,0.08)] p-3 rounded-xl">
        <div className="text-white text-base">Keep Tone: 😌 Calm</div>
        <div className="text-white text-base">Don't Panic</div>
      </div>
    </div>
  );
};
