import React from 'react'
import DashboardBox from './DashboardBox'
import DetailsBox from './DetailsBox'

const DashBoardDetails = () => {
  return (
    <div className='mt-8 flex flex-col md:flex-row gap-6'>
      <div className='md:w-[60%] w-full'>
        <h1 className='font-bold text-lg'>Dashboard</h1>
        <DashboardBox/>
      </div>
      <div className='md:w-[40%] w-full '>
      <h1 className='font-bold text-lg'>Details</h1>
      <DetailsBox/>

      </div>
    </div>
  )
}

export default DashBoardDetails
