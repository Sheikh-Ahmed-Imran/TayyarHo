
import React from "react";

export const SpeechAnalysis = () => {
  return (
    <div className="flex-1 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] bg-white p-6 rounded-xl">
      <div className="text-blue-500 text-2xl font-bold mb-6">
        Speech Analysis
      </div>
      <div className="flex justify-center items-center bg-gray-100 mb-6 p-[30px] rounded-lg">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="14:358" layer-name="Frame" width="46" height="36" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="waveform-icon"> <g clip-path="url(#clip0_14_358)"> <path d="M9.5 4.5C9.5 3.25547 10.5055 2.25 11.75 2.25H23C24.2445 2.25 25.25 3.25547 25.25 4.5V29.25H32V18C32 16.7555 33.0055 15.75 34.25 15.75H43.25C44.4945 15.75 45.5 16.7555 45.5 18C45.5 19.2445 44.4945 20.25 43.25 20.25H36.5V31.5C36.5 32.7445 35.4945 33.75 34.25 33.75H23C21.7555 33.75 20.75 32.7445 20.75 31.5V6.75H14V18C14 19.2445 12.9945 20.25 11.75 20.25H2.75C1.50547 20.25 0.5 19.2445 0.5 18C0.5 16.7555 1.50547 15.75 2.75 15.75H9.5V4.5Z" fill="black"></path> </g> <defs> <clipPath id="clip0_14_358"> <path d="M0.5 0H45.5V36H0.5V0Z" fill="white"></path> </clipPath> </defs> </svg>',
          }}
        />
      </div>
      <div className="text-gray-600 text-base">
        <span>
          Your last interview showed confident speech patterns with clear
        </span>
        <br />
        <span>articulation...</span>
      </div>
    </div>
  );
};