import React from 'react';

export default function Question({ question, answer }) {
  return (
    <div className='bg-white p-3 m-4 shadow-md rounded-lg'>
      <div className='flex flex-col p-3'>
        <h2 className='font-bold text-xl text-blue-600'>Question:</h2>
        <p className='text-gray-800 text-md font-medium'>{question}</p>
      
      </div>
    </div>
  );
}
