
import React from "react";
import { Sidebar } from "../../components/custom/Sidebar";
import { Footer } from "../../components/custom/Footer";
import { Header } from "./components/Header";
import { RecentInterviews } from "./components/RecentInterviews";
import { PerformanceInsights } from "./components/PerformanceInsights"
import { SpeechAnalysis } from "./components/SpeechAnalysis";
import { ActionCards } from "./components/ActionCards";

const Dashboard = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex min-h-screen bg-gray-50">
       
        <div className="flex-1 bg-gray-50 max-md:px-4">
         <Header />
          <RecentInterviews />
          <section className="flex gap-6 p-6 max-md:flex-col">
            <PerformanceInsights />
            <SpeechAnalysis />
          </section>
          <ActionCards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard
