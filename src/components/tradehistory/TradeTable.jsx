import React from 'react'
import { PiLessThanBold } from "react-icons/pi";
import { PiGreaterThanBold } from "react-icons/pi";

const TradeTable = () => {
  return (
    <div>
      <table className='w-full bg-white text-[10px] sm:text-[12px] md:text-sm'>
      <th className='flex justify-between w-full px-4 py-2 border-b border-[#E7E4E8] font-semibold border-t bg-[#E6F5FF]'>
            <td>Ticket</td>
            <td>Open</td>
            <td>Close</td>
            <td>Action</td>
            <td>Open Price</td>
            <td>Close Price</td>
            <td>Sl</td>
            <td>Some</td>

        </th>
        <tr className='flex items-center justify-between w-full px-4 py-3 border-b border-[#E7E4E8]  text-[#7B7B7B] '>
        <td>1234</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>   
        </tr>
        <tr className='flex items-center justify-between w-full px-4 py-3 border-b border-[#E7E4E8]  text-[#7B7B7B] '>
        <td>1234</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>   
        </tr>
        <tr className='flex items-center justify-between w-full px-4 py-3 border-b border-[#E7E4E8]  text-[#7B7B7B] '>
        <td>1234</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>   
        </tr>
        <tr className='flex items-center justify-between w-full px-4 py-3 border-b border-[#E7E4E8]  text-[#7B7B7B] '>
        <td>1234</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>   
        </tr>
        <tr className='flex items-center justify-between w-full px-4 py-3 border-b border-[#E7E4E8]  text-[#7B7B7B] '>
        <td>1234</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>12 Mar xxx</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>
            <td>1,0674</td>   
        </tr>
      </table>
      <div className='mt-12 flex-col md:flex-row flex justify-center items-center gap-4'>
             <div className='text-[#004D99] px-6 font-semibold py-2 bg-white rounded-full flex gap-2 items-center cursor-pointer'>
                <span className='flex'><PiLessThanBold /> <PiLessThanBold /></span>
             <span> Previous</span>  
             </div>
             <div className='text-[#004D99] px-6 font-semibold  bg-[#E6E6E6] rounded-full flex  items-center cursor-pointer'>
              
             <span className='hover:bg-[#004D99] hover:text-white px-5 rounded-full py-2 '> 1</span>  
             <span className='hover:bg-[#004D99] hover:text-white px-5 rounded-full py-2 '> 2</span>
             <span className='hover:bg-[#004D99] hover:text-white px-5 rounded-full py-2 '> 3</span>
             <span className='hover:bg-[#004D99] hover:text-white px-5 rounded-full py-2 '> 4</span>
             <span className='hover:bg-[#004D99] hover:text-white px-5 rounded-full py-2 '> 5</span>
             </div>
             <div className='text-[#004D99] px-6 font-semibold py-2 bg-white rounded-full flex gap-2 items-center cursor-pointer'>
                <span className='flex'><PiGreaterThanBold /><PiGreaterThanBold /></span>
             <span> Next</span>  
             </div>
      </div>
    </div>
  )
}

export default TradeTable
