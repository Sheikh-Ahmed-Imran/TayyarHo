'use client'
import React from 'react'
import Cards from '../../../components/ui/Cards'
import Model from '../../../components/ui/Modal'
import { useState } from 'react';
import DashboardModal from './DashboardModal'

export default function DashboardCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {
    console.log('oppened')
    onOpen();
  };
  return (
    <>
    <div className='mt-20 flex justify-between w-full '>
      <div className='p-5'>
        <h1 className='font-bold text-2xl'>Good morning Shaheer</h1>
        <p className='text-gray-600 text-sm'>Here is your report</p>
      </div>
      <div className='p-5  '>
      <button className='bg-orange-600 p-3 text-white border-99'  onClick={() => setIsModalOpen(true)}>CLick New</button>
      </div>
    </div>
    <div className='flex justify-around w-full  p-7 md:flex-row sm:flex-col lg:flex-row xs-flex-row'>
      <Cards logo='Parso Berozgar' color='text-orange-600'/>
      <Cards logo='Kal Berozgar' color='text-green-600'/>
      <Cards logo='Aaj Berozgar' color='text-purple-600'/>
    </div>
    <Model  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} children={<DashboardModal />} />
    </>
  )
}
