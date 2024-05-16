import React from 'react'
import TradeTable from './TradeTable'

const TradeHistory = () => {
  return (
    <div className='mt-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-bold text-lg'>Performance Statistics</h1>
        <div className='flex gap-6'>
        <div>
        <label className='font-semibold'>Show</label>
           <select name="" id="" className='text-[#004D99] ml-2 px-3 py-1 border'>
               <option value="">10</option>
               <option value="">20</option>
               <option value="">30</option>
           </select>
          
          </div>
            <select name="" id="" className='text-[#004D99] px-3 py-1 border'>
                <option value="">Export</option>
                <option value="">Excel File</option>
                <option value="">CSV File</option>
            </select>
          

        </div>
        </div>

        <div className='mt-4'>
            <TradeTable/>
        </div>
      
    </div>
  )
}

export default TradeHistory
