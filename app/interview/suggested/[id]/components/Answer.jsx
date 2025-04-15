import React from 'react'
export default function Answer({ ans, text }) {
  if (!ans) return null;
  return (
    <div className='bg-white shadow-xl border-orange-600 p-7 m-2'>
      <h1 className='text-xl font-bold text-blue-600'>{text}</h1>
      <p className='text-sm text-gray-600'>{ans}</p>
    </div>
  );
}

 