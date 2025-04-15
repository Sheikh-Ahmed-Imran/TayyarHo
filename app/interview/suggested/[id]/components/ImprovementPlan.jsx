const ImprovementCard = ({ icon, title, description }) => (
    <div className="flex-1 bg-[rgba(30,58,138,0.4)] p-6 rounded-xl">
      <div className="mb-4">{icon}</div>
      <div className="text-white text-base font-bold mb-2">{title}</div>
      <div className="text-gray-300 text-base">{description}</div>
    </div>
  );
  
  const ImprovementPlan = () => {
    const cards = [
      {
        icon: (
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="currentColor"
            className="text-[#60A5FA]"
          >
            <path d="M5.625 0C2.51953 0 0 2.51953 0 5.625V24.375C0 27.4805 2.51953 30 5.625 30H22.5H24.375C25.4121 30 26.25 29.1621 26.25 28.125C26.25 27.0879 25.4121 26.25 24.375 26.25V22.5C25.4121 22.5 26.25 21.6621 26.25 20.625V1.875C26.25 0.837891 25.4121 0 24.375 0H22.5H5.625ZM5.625 22.5H20.625V26.25H5.625C4.58789 26.25 3.75 25.4121 3.75 24.375C3.75 23.3379 4.58789 22.5 5.625 22.5ZM7.5 8.4375C7.5 7.92188 7.92188 7.5 8.4375 7.5H19.6875C20.2031 7.5 20.625 7.92188 20.625 8.4375C20.625 8.95312 20.2031 9.375 19.6875 9.375H8.4375C7.92188 9.375 7.5 8.95312 7.5 8.4375ZM8.4375 11.25H19.6875C20.2031 11.25 20.625 11.6719 20.625 12.1875C20.625 12.7031 20.2031 13.125 19.6875 13.125H8.4375C7.92188 13.125 7.5 12.7031 7.5 12.1875C7.5 11.6719 7.92188 11.25 8.4375 11.25Z" />
          </svg>
        ),
        title: "Study Resources",
        description: "Access curated learning materials from industry experts",
      },
      {
        icon: (
          <svg
            width="26"
            height="30"
            viewBox="0 0 23 30"
            fill="currentColor"
            className="text-[#60A5FA]"
          >
            <path d="M11.5781 0C8.47266 0 5.95312 2.51953 5.95312 5.625V15C5.95312 18.1055 8.47266 20.625 11.5781 20.625C14.6836 20.625 17.2031 18.1055 17.2031 15V5.625C17.2031 2.51953 14.6836 0 11.5781 0ZM4.07812 12.6562C4.07812 11.877 3.45117 11.25 2.67188 11.25C1.89258 11.25 1.26562 11.877 1.26562 12.6562V15C1.26562 20.2207 5.14453 24.5332 10.1719 25.2188V27.1875H7.35938C6.58008 27.1875 5.95312 27.8145 5.95312 28.5938C5.95312 29.373 6.58008 30 7.35938 30H11.5781H15.7969C16.5762 30 17.2031 29.373 17.2031 28.5938C17.2031 27.8145 16.5762 27.1875 15.7969 27.1875H12.9844V25.2188C18.0117 24.5332 21.8906 20.2207 21.8906 15V12.6562C21.8906 11.877 21.2637 11.25 20.4844 11.25C19.7051 11.25 19.0781 11.877 19.0781 12.6562V15C19.0781 19.1426 15.7207 22.5 11.5781 22.5C7.43555 22.5 4.07812 19.1426 4.07812 15V12.6562Z" />
          </svg>
        ),
        title: "Practice Sessions",
        description: "Schedule mock interviews with AI interviewer",
      },
      {
        icon: (
          <svg
            width="26"
            height="30"
            viewBox="0 0 35 30"
            fill="currentColor"
            className="text-[#60A5FA]"
          >
            <path d="M0.65625 7.5C0.65625 5.43164 2.33789 3.75 4.40625 3.75H19.4062C21.4746 3.75 23.1562 5.43164 23.1562 7.5V22.5C23.1562 24.5684 21.4746 26.25 19.4062 26.25H4.40625C2.33789 26.25 0.65625 24.5684 0.65625 22.5V7.5ZM33.416 5.84766C34.0254 6.17578 34.4062 6.80859 34.4062 7.5V22.5C34.4062 23.1914 34.0254 23.8242 33.416 24.1523C32.8066 24.4805 32.0684 24.4453 31.4883 24.0586L25.8633 20.3086L25.0312 19.752V18.75V11.25V10.248L25.8633 9.69141L31.4883 5.94141C32.0625 5.56055 32.8008 5.51953 33.416 5.84766Z" />
          </svg>
        ),
        title: "Video Tutorials",
        description: "Watch expert tips on handling technical questions",
      },
    ];
  
    return (
      <div className="border bg-[rgba(30,58,138,0.3)] mb-12 p-[33px] rounded-2xl border-solid border-[#60A5FA] max-md:flex-col max-sm:p-4 mt-8">
        <div className="text-white text-2xl font-bold mb-6">
          AI-Generated Improvement Plan
        </div>
        <div className="flex gap-8 mb-8 max-md:flex-col max-md:gap-4">
          {cards.map((card, index) => (
            <ImprovementCard key={index} {...card} />
          ))}
        </div>
        <button className="text-white text-base font-bold w-fit cursor-pointer mx-auto my-0 px-8 py-3.5 rounded-full border-[none] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 transition-opacity">
          Start New Practice Interview
        </button>
      </div>
    );
  };
  
  export default ImprovementPlan;
  