"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSidebar } from "../../app/context/SidebarContext";
import { Menu, ChevronLeft, Home, FileText, BarChart, Settings, LogOut, Plus } from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();

  // Show Sidebar only on "/dashboard" pages
  if (!pathname.startsWith("/dashboard" )) {
    return null;
  }


  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="relative flex">
      {/* Toggle Button */}
      <button
        className={`fixed top-4 z-50 bg-white p-2 rounded-lg shadow-md transition-all duration-300 ${
          isSidebarOpen ? "left-[200px]" : "left-4"
        }`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`h-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white p-6 transition-all duration-300 ${
          isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full"
        }`}
      >
        {isSidebarOpen && (
          <div>
            <div className="text-2xl font-bold mb-10">TayyarHo</div>
            <nav className="flex flex-col gap-4">
              <div className="flex items-center cursor-pointer gap-3 text-base px-4 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
                <Home size={20} />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center cursor-pointer gap-3 text-base px-4 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
                <FileText size={20} />
                <span>My Interviews</span>
              </div>
              <Link href='/interview/suggested/all'className="flex items-center cursor-pointer gap-3 text-base px-4 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
                <BarChart size={20} />
                <span>Performance Reports</span>
              </Link>
              <Link href="/dashboard/settings" className="flex items-center cursor-pointer gap-3 text-base px-4 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
  <Settings size={20} />
  <span>Settings</span>
</Link>
              <div className="flex items-center cursor-pointer gap-3 text-base px-4 py-3.5 rounded-lg hover:bg-white/10 transition-colors">
                <LogOut size={20} />
                <span>Logout</span>
              </div>
            </nav>
            <button
              className="border text-white flex items-center justify-center gap-2 text-base cursor-pointer bg-[rgba(255,255,255,0.1)] mt-8 p-[15px] rounded-lg border-solid border-[rgba(255,255,255,0.2)] hover:bg-white/20 transition-colors"
              onClick={() => console.log("New Interview")}
            >
              <Plus size={20} />
              <span>New Interview</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
