import React from "react";

export const Header = ({ progress }) => {
  // Convert progress (1-5) to percentage width (0% to 100%)
  const progressWidth = `${(progress / 5) * 100}%`;

  return (
    <header className="flex w-full h-[63px] justify-center items-center bg-[rgba(255,255,255,0.15)] backdrop-blur-sm px-20 max-md:px-10 max-sm:px-5">
      <div className="flex w-full h-full items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
        <div className="text-[#7E62F6] text-[22px] h-[63px] flex items-center bg-white px-[26px] w-full md:w-auto text-center justify-center">
          TayyarHo
        </div>
        <div className="flex items-center gap-[17.641px] flex-col md:flex-row w-full md:w-auto">
          {/* Progress Bar Background */}
          <div className="flex items-center relative w-48 h-2 bg-[rgba(255,255,255,0.25)] rounded-full">
            {/* Dynamic Progress Indicator */}
            <div
              className="absolute h-2 bg-[#00F7FF] rounded-full transition-all duration-300"
              style={{ width: progressWidth }}
            />
          </div>
          <button
            className="text-white text-center text-base bg-[#FF4D4D] px-4 py-[9px] rounded-lg w-full md:w-auto"
            aria-label="Exit Interview"
          >
            Exit Interview
          </button>
        </div>
      </div>
    </header>
  );
};
