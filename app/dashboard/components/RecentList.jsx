import React from 'react'
import ListCard from '../../../components/ui/ListCard'
export default function RecentList() {
  return (
    <div className=' p-7 w-full '>
      <p className='mt-1 text-xs'>Recent Activity</p>
      <div className='flex justify-between text-gray-600 mt-3 text-xs mb-1 p-2 text-center'>
        <p>Activity Info</p>
        <p>Activity Type</p>
        <p>Created On</p>
      </div>
      <hr />
      <ListCard />
      <hr />
      <ListCard />
      <hr />
      <ListCard />
    </div>
  )
}
