'use client'
import React,{useState} from 'react'
import Webcam from 'react-webcam'
export default function Cam() {
    const [camEnabled,setEnabled]=useState(false)
  return (
    <div className='m-5 p-8  flex flex-col justify-around items-center'>
      <div className=''>
      {camEnabled?<Webcam 
      onUserMedia={()=>{
        setEnabled(true)
      }}
      onUserMediaError={()=>{
        setEnabled(false)
      }}
      style={{
        height:400,
        width:400,
      }}
      
      />:
      <>
           <div className='items-center justify-center flex h-100 w-full flex-col '>
          <Webcam className='p-2 bg-secondary border rounded-lg  w-full'/>
          <div className='shadow-md shadow-gray-600'>
      <button className='text-orange-600 w-full p-2'   onClick={()=>setEnabled(true)} disabled={camEnabled}>
        <p className=' py-3 text-center '>Enable Webcam for Interview and Start Interview</p></button>
      </div>
          </div>
         
          </>
}
  
      </div>
      
    </div>
  )
}
