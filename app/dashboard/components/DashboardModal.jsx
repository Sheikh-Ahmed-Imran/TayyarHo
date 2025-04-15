"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../../../components/ui/Input";

export default function DashboardModal() {
  const router=useRouter()
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const postData = { title, experience, description };

    try {
      const response = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("Interview saved successfully!");
        setTitle("");
        setExperience("");
        setDescription("");
        router.push('/dashboard/12')

      } else {
        alert("Error saving interview");
      }
    } catch (error) {
      console.error("Failed to send request:", error);
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-8 gap-4 w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h2 className="text-xl sm:text-2xl font-bold text-center">Enter All Details</h2>

      <Input
        value={title}
        label="Title"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        value={description}
        label="Description"
        placeholder="Enter Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        value={experience}
        label="Experience"
        placeholder="Enter Experience"
        onChange={(e) => setExperience(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
