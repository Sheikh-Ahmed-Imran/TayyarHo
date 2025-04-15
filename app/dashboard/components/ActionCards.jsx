"use client";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

const StartInterviewModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    experience: "",
    level: "Easy", // Default value
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
          router.push("/dashboard/all");
        }, 2000); // Hide success message after 2 seconds
      } else {
        console.error("Failed to create interview");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <Dialog.Title className="text-xl font-bold mb-4">Start a New Interview</Dialog.Title>
            
            {success && (
              <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-4 text-center">
                🎉 Interview Created Successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="title" placeholder="Job Title" className="w-full p-2 border rounded" onChange={handleChange} required />
              <textarea name="description" placeholder="Job Description" className="w-full p-2 border rounded" onChange={handleChange} required />
              <input type="text" name="experience" placeholder="Experience (e.g. 5 years)" className="w-full p-2 border rounded" onChange={handleChange} required />
              
              {/* Level Dropdown */}
              <select name="level" value={formData.level} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className={`w-full p-2 rounded-lg text-white ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:opacity-90"
                }`}
              >
                {loading ? "Creating..." : "Start Interview"}
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export const ActionCards = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="flex gap-6 p-6 max-md:flex-col">
      <div className="shadow-lg flex-1 bg-white p-6 rounded-xl">
        <i className="ti ti-microphone text-2xl mb-4" />
        <h3 className="text-xl font-bold mb-2">Start Interview</h3>
        <p className="text-gray-600 text-base mb-4">Begin a new AI interview session</p>
        <button onClick={() => setModalOpen(true)} className="bg-cyan-400 text-white px-4 py-2.5 rounded-lg hover:opacity-90">
          Start Now
        </button>
      </div>
      <StartInterviewModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
