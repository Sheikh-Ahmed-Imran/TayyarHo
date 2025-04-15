"use client";
import React, { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <header className="shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] h-[75px] bg-white/95 px-20 py-0 max-md:px-10 max-md:py-0 max-sm:h-auto max-sm:px-5 max-sm:py-0">
      <div className="max-w-screen-xl h-[75px] flex justify-between items-center mx-auto my-0 px-6 py-4 max-sm:flex-col max-sm:items-stretch max-sm:gap-4 max-sm:h-auto max-sm:p-4">
        
        {/* Back Button */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-blue-800">
          <ArrowLeft size={24} />
        </button>

        <h1 className="text-3xl font-bold text-blue-800">Evaluations Overview</h1>
        
        <div className="flex gap-4 items-center max-sm:flex-col">
          <div className="relative w-64 max-sm:w-full">
            <input
              type="text"
              placeholder="Search evaluations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[42px] border border-blue-200 text-base text-black pl-4 pr-[76px] py-0 rounded-lg border-solid"
              aria-label="Search evaluations"
            />
            <div className="absolute -translate-y-2/4 right-3 top-2/4">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <button
            className="flex items-center gap-[9px] h-[43px] border border-blue-200 text-base cursor-pointer bg-white/80 pl-3 pr-2 py-0 rounded-lg border-solid max-sm:w-full"
            aria-label="Filter by Rating"
          >
            <span>Filter by Rating</span>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.0606 9.7335C7.254 9.54743 7.51336 9.44575 7.78169 9.45081C8.05001 9.45588 8.30535 9.56726 8.4916 9.7605L13.5001 15.0768L18.5086 9.7605C18.5996 9.66013 18.7099 9.57906 18.8328 9.52209C18.9558 9.46512 19.0889 9.43341 19.2243 9.42883C19.3598 9.42425 19.4947 9.44691 19.6212 9.49545C19.7478 9.54399 19.8632 9.61744 19.9608 9.71143C20.0585 9.80542 20.1362 9.91805 20.1895 10.0426C20.2428 10.1672 20.2705 10.3012 20.271 10.4367C20.2716 10.5723 20.2449 10.7065 20.1926 10.8315C20.1403 10.9565 20.0635 11.0697 19.9666 11.1645L14.2291 17.2395C14.1346 17.3375 14.0214 17.4154 13.8962 17.4687C13.7709 17.5219 13.6362 17.5493 13.5001 17.5493C13.364 17.5493 13.2293 17.5219 13.104 17.4687C12.9788 17.4154 12.8655 17.3375 12.7711 17.2395L7.0336 11.1645C6.84753 10.9711 6.74585 10.7117 6.75091 10.4434C6.75598 10.1751 6.86736 9.91974 7.0606 9.7335Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
