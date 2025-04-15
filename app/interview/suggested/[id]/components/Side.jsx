import React from 'react';
import Question from './Question';

export default function Side({ questions, loading, setSelectedQuestion }) {
  return (
    <div className='h-screen flex flex-col justify-around overflow-y-auto 
                bg-gradient-to-br from-blue-500 to-blue-800 
                bg-blue-700/10 backdrop-blur-xl'>
      <div className='p-3 m-6'>
        <p className='font-bold text-white text-xl'>See All Questions</p>
        <p className='py-1 text-white text-sm'>Total Questions: {questions.length}</p>
      </div>
      <hr />
      <div className='p-4 flex flex-col justify-between h-full'>
        {loading ? (
          <p className='text-white'>Loading...</p>
        ) : questions.length > 0 ? (
          questions.map((q, i) => (
            <div 
              key={i} 
              className="cursor-pointer p-3 rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => setSelectedQuestion(q)} // Select question on click
            >
              <Question question={q.question} />
            </div>
          ))
        ) : (
          <p className='text-white'>No questions found.</p>
        )}
      </div>
    </div>
  );
}
