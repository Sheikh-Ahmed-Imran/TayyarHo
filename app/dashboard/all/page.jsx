"use client";
import { useState, useEffect } from "react";
import { Navbar } from "../../../components/custom/Navbar";
import { Footer } from "../../../components/custom/Footer";
import { SearchInput } from "../../../components/ui/SearchInput";
import { SortSelect } from "../../../components/ui/SortSelect";
import { InterviewCard } from "./components/StartInterviewCard";
import { useRouter } from "next/navigation";
import { Sidebar } from "../../../components/custom/Sidebar";

const sortOptions = [

  { value: "taken", label: "Taken" },


  { value: "not_taken", label: "Not Taken" },
];


const DashboardActivity = () => {
  
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
  const router=useRouter()
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("not_taken");
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Interviews from API
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch("/api/interview"); // Adjust the API route if needed
        const data = await response.json();
        setInterviews(data);
      } catch (error) {
        console.error("Error fetching interviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  const filteredInterviews = interviews.filter((interview) => {
    const matchesSearch = interview?.title?.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (sortOrder === "taken") {
      return matchesSearch && interview.taken === true
    } else{
      return matchesSearch && interview.taken === false;
    }
    
// Default (all)
  });
 
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(90deg,#EFF6FF_0%,#F5F3FF_100%)]">
  

      <main className="flex-1 px-20 py-6 max-md:px-10 max-sm:px-5 mt-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12 max-sm:flex-col max-sm:items-start max-sm:gap-6">
            <div className="max-w-[796px]">
              <h1 className="text-4xl mb-2">Your AI-Powered Interview Journey</h1>
              <p className="text-[rgba(124,58,237,0.80)] text-lg">
                Track all your mock interviews, start new ones, or analyze past evaluations with AI-powered insights.
              </p>
            </div>
            <button
              onClick={() => {}}
              className="flex items-center gap-2 bg-[linear-gradient(90deg,#2563EB_0%,#7C3AED_100%)] text-white shadow-lg px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.60938 2.5C8.60938 1.94687 8.1625 1.5 7.60938 1.5C7.05625 1.5 6.60938 1.94687 6.60938 2.5V7H2.10938C1.55625 7 1.10938 7.44688 1.10938 8C1.10938 8.55312 1.55625 9 2.10938 9H6.60938V13.5C6.60938 14.0531 7.05625 14.5 7.60938 14.5C8.1625 14.5 8.60938 14.0531 8.60938 13.5V9H13.1094C13.6625 9 14.1094 8.55312 14.1094 8C14.1094 7.44688 13.6625 7 13.1094 7H8.60938V2.5Z"
                  fill="white"
                />
              </svg>
              <span>New Interview</span>
            </button>
          </div>

          {/* Search & Sort */}
          <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <SearchInput
              placeholder="Search interviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
<SortSelect
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
  options={sortOptions}
/>


          </div>

          {/* Loading State */}
          {loading ? (
            <p className="text-center text-lg text-gray-600">Loading interviews...</p>
          ) : (
            <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
              {filteredInterviews.length > 0 ? (
                filteredInterviews.map((interview) => (
                  <InterviewCard
                    key={interview._id}
                    title={interview.title}
                    date={formatDateTime(interview.createdAt)}
                    options={sortOrder}
                    buttonText="Start Interview"
                    onAction={()=>{sortOrder=='taken'?router.push(`/interview/suggested/${interview.questions[0]}`):router.push(`/interview/${interview._id}`)}}
                  />
                ))
              ) : (
                <p className="text-center col-span-3 text-gray-500">No interviews found.</p>
              )}
            </div>
          )}
        </div>
      </main>


    </div>
  );
};

export default DashboardActivity;
