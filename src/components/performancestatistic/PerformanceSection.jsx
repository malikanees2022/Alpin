import React from 'react'
import StatisticsBox from './StatisticsBox'
import SummaryBox from './SummaryBox'

const PerformanceSection = () => {
  return (
    <div className='mt-8 flex md:flex-row flex-col gap-6'>
    <div className='md:w-[50%] w-full'>
      <h1 className='font-bold text-lg'>Performance Statistics</h1>
      <StatisticsBox/>
    </div>
    <div className='md:w-[50%] w-full'>
    <h1 className='font-bold text-lg'>Daily Summary</h1>
   <SummaryBox/>

    </div>
  </div>
  )
}

export default PerformanceSection
