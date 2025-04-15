import React from 'react'

export default function Cards({logo,color}) {
  return (
    <div className='flex flex-col justify-around w-full m-4 h-full shadow-xl'>
      <div className='flex gap-5 p-5'>
        <div>{logo}</div>
        <div>JobPosts</div>
      </div>
      <div className='flex justify-between p-4'>
        <p className={`font-bold ${color} text-sm`}>Active Jobs</p>
        <p className='text-2xl'>2</p>
      </div>
      <hr />
      <div className='text-gray-500'>
        <div className='flex justify-between p-4'>
          <p>Berozgar</p>
          <p>0 Cash</p>
        </div>
        <div className='flex justify-between p-4'>
          <p>Total Kismat</p>
          <p>Kharab</p>
        </div>
      </div>

    
    </div>
  )
}
