import React from "react";

export const SuggestionFooter = () => {
  return (
    <footer className="shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] h-14 fixed w-full bg-white/95 px-20 py-0 bottom-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="max-w-screen-xl h-14 flex justify-between items-center mx-auto my-0 px-6 py-4 max-sm:flex-col max-sm:gap-2.5 max-sm:text-center max-sm:h-auto">
        <nav className="flex gap-5 items-center max-sm:flex-wrap max-sm:justify-center">
          <a href="#" className="text-blue-600 no-underline text-base">
            Home
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-blue-600 no-underline text-base">
            Dashboard
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-blue-600 no-underline text-base">
            Generate Interview
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-blue-600 no-underline text-base">
            Logout
          </a>
        </nav>
        <div className="text-gray-600 text-base">
          © 2025 TayyarHo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
