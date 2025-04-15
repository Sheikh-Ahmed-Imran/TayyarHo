import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const addTime = () => {
    setSeconds((prev) => prev + 30);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center gap-2 bg-[rgba(255,255,255,0.15)] backdrop-blur-sm shadow-[0px_8px_10px_0px_rgba(0,0,0,0.10),0px_20px_25px_0px_rgba(0,0,0,0.10)] p-4 rounded-2xl border border-[rgba(255,255,255,0.1)]">
      <div className="text-[#00F7FF] text-center text-4xl font-semibold">
        {formatTime(seconds)}
      </div>
      <div
        onClick={addTime}
        className="text-[rgba(255,255,255,0.80)] text-center text-sm cursor-pointer hover:text-white transition-colors"
      >
        +30s
      </div>
    </div>
  );
};
