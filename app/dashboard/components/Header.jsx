
import React from "react";

const StatCard = ({ title, value }) => (
  <div className="shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] min-w-[100px] bg-white p-4 rounded-xl">
    <div className="text-gray-500 text-base mb-2">{title}</div>
    <div className="text-blue-500 text-2xl font-bold">{value}</div>
  </div>
);

export const Header = () => {
  return (
    <header className="shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex justify-between items-center bg-white p-6 max-sm:flex-col max-sm:gap-6">
      <div className="flex items-center gap-4 max-sm:flex-col max-sm:text-center">
      
        <div>
          <div className="text-blue-500 text-2xl font-bold mb-1">
            Welcome Back, Ahmed Imran!
          </div>
          <div className="text-gray-500 text-base">
            Last interview: 2 days ago
          </div>
        </div>
      </div>
      <div className="flex gap-4 max-md:flex-col max-sm:w-full">
        <StatCard title="Total Interviews" value={24} />
        <StatCard title="Success Rate" value="87%" />
        <StatCard title="AI Rating" value={4.8} />
      </div>
    </header>
  );
};