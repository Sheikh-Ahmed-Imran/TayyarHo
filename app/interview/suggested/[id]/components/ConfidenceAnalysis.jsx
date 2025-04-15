"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ConfidenceAnalysis = ({ aiquestions, selectedQuestion }) => {


  // Find the AI response that matches the selected question
  const aiResponse = aiquestions.find(ai => ai.questionsId?.[0] === selectedQuestion?._id);


  // Extract emotions from the selected AI response, or default to an empty object
  const emotions = aiResponse?.emotions || {};


  // Convert emotions object into an array of key-value pairs
  const data = Object.keys(emotions).map((key) => ({
    name: key,
    value: emotions[key] * 20, // Scale values to fit the graph (5 → 100%)
  }));

  return (
    <div className="flex-1 border bg-[rgba(30,58,138,0.3)] p-[25px] rounded-2xl border-solid border-[rgba(255,255,255,0.2)]">
      <div className="text-white text-2xl font-bold mb-6">Confidence Analysis</div>

      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
            <YAxis tick={{ fill: "#ffffff" }} domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="value" fill="#60A5FA" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-white text-center">No data available</p>
      )}
    </div>
  );
};

export default ConfidenceAnalysis;
