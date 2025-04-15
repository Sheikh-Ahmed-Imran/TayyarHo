export function InterviewCard({
    title,
    date,
    options,
    buttonText,
    onAction,
  }) 
  {

    return (
      <div className="bg-white border p-[25px] rounded-xl">
        <div className="bg-[linear-gradient(90deg,#2563EB_0%,#7C3AED_100%)] text-white text-xl mb-2 p-4">
          {title}
        </div>
        <div className="text-violet-500 text-sm mb-4">Generated on {date}</div>
        {options=='taken'?(
        <button
          onClick={onAction}
          className="w-full h-10 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
        >
          See Evaluation
        </button>):(
             <button
             onClick={onAction}
             className="w-full h-10 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition-colors"
           >
             Start Interview
           </button>)
       } 
      </div>
    );
  }
  