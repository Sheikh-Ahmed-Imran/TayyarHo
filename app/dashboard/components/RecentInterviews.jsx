
'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

export const RecentInterviews = () => {
  const formatDateTime = (dateString) => {
    const options = { 
      year: "numeric", 
      month: "long", 
      day: "numeric", 
      hour: "2-digit", 
      minute: "2-digit", 
      hour12: true 
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get("/api/interview");
        const sortedInterviews = response.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by latest date
        
        setInterviews(sortedInterviews.slice(0, 2)); // Take the last two interviews
      } catch (error) {
        console.error("Error fetching interviews:", error);
      }
    };

    fetchInterviews();
  }, []);

  return (
    <section className="p-6">
      <div className="shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] bg-white p-6 rounded-xl">
        <div className="text-blue-500 text-2xl font-bold mb-6">
          Recent Interviews
        </div>
        {interviews.length > 0 ? (
          <div className="overflow-x-auto">
<table className="w-full border-collapse min-w-[600px] sm:min-w-0">
            <thead>
              <tr>
                <th className="text-left border-b-cyan-400 font-bold p-3 border-b border-solid">Date</th>
                <th className="text-left border-b-cyan-400 font-bold p-3 border-b border-solid">Job Title</th>
                <th className="text-left border-b-cyan-400 font-bold p-3 border-b border-solid">Level</th>
                <th className="text-left border-b-cyan-400 font-bold p-3 border-b border-solid">Status</th>
                <th className="text-left border-b-cyan-400 font-bold p-3 border-b border-solid">Action</th>
              </tr>
            </thead>
            <tbody>
              {interviews.map((interview, index) => (
                <tr key={index}>
                  <td className="p-3">{formatDateTime(interview.createdAt)}</td>
                  <td className="p-3">{interview.title}</td>
                  <td className="p-3">{interview.level}</td>
                  <td className="p-3">{interview.taken?'Taken':'Not Taken'}</td>
                  <td className="text-cyan-400 no-underline p-3 cursor-pointer hover:text-cyan-500">View Feedback</td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
        ) : (
          <div className="text-gray-500">No interviews found</div>
        )}
      </div>
    </section>
  );
};
