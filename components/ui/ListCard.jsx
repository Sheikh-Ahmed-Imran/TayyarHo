import React from 'react'

export default function ListCard() {
  return (
    <div className='p-2 flex justify-between'>
        <div className='p-2'>
        <h2 className='font-bold'>React Developer</h2>
        <p className='text-xs text-gray-600'>Experience 0-2 years</p>
        <p className='text-xs text-gray-600'>Mode of work:Hybrid</p>

        </div>
    <div className='flex justify-between flex-col mr-16 p-2'>
     <p className='text-sm text-center text-gray-600 mt-2'>Job Post</p>
     </div>
     <p className='text-sm text-center text-gray-600 p-2'>11 jan 2025</p>
    </div>
  )
}
