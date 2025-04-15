import React, { useState } from "react";
import Webcam from "react-webcam";

export const VideoFeed = () => {
  const [camEnabled, setEnabled] = useState(false);

  return (
    <div className="relative w-full border bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)] rounded-2xl border-[#00F7FF]">
      <div className="bg-black overflow-hidden m-[17px] rounded-lg relative">
        {camEnabled ? (
          <Webcam
            onUserMedia={() => setEnabled(true)}
            onUserMediaError={() => setEnabled(false)}
            className="w-full h-auto"
          />
        ) : (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dccf092f47da7dd9fb9bed725ec5dfe3346187e"
            alt="Video feed"
            className="w-full h-auto"
          />
        )}

        <div className="absolute flex items-center gap-2 px-2 py-1 right-[17px] top-[17px] bg-[rgba(0,0,0,0.5)] rounded-md">
          <div className={`w-3 h-3 ${camEnabled ? "bg-emerald-500" : "bg-red-500"} opacity-[0.8185] rounded-full`} />
          <div className="text-white text-sm">{camEnabled ? "Live" : "Analyzing"}</div>
        </div>
      </div>

      {/* Toggle Webcam Button */}
      <button
        className="w-full p-3 text-center bg-blue-800 text-white rounded-b-2xl"
        onClick={() => setEnabled(!camEnabled)}
      >
        {camEnabled ? "Disable Webcam" : "Enable Webcam for Interview"}
      </button>
    </div>
  );
};
