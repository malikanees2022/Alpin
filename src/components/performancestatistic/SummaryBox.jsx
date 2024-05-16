import React from 'react'
import Image from '../../assets/speedmeter.png'

const SummaryBox = () => {
  return (
    <div className='bg-white px-6 pb-4 pt-2 cursor-pointer mt-4 rounded-2xl  shadow-xl  text-sm'>
      <table className='w-full '>
        <th className='flex justify-between w-full px-2 py-2 border-b border-[#E7E4E8]'>
            <td>Date</td>
            <td>Trades</td>
            <td>Lots</td>
            <td>Max Daily Loss</td>
            <td>Result</td>
        </th>
        <tr className='flex items-center justify-between w-full px-2 py-3 border-b border-[#E7E4E8]  text-[#7B7B7B] font-semibold'>
        <td>12 March</td>
            <td>2</td>
            <td>14.00</td>
            <td><img src={Image} alt="" /></td>
            <td className='text-red-600'>-$134.67</td>
        </tr>
        <tr className='flex items-center justify-between w-full px-2 py-3 border-b border-[#E7E4E8] mt-2 text-[#7B7B7B] font-semibold'>
        <td>12 March</td>
            <td>2</td>
            <td>14.00</td>
            <td><img src={Image} alt="" /></td>
            <td className='text-red-600'>-$134.67</td>
        </tr>
        <tr className='flex items-center justify-between w-full px-2 py-3 border-b border-[#E7E4E8] mt-2 text-[#7B7B7B] font-semibold'>
        <td>12 March</td>
            <td>2</td>
            <td>14.00</td>
            <td><img src={Image} alt="" /></td>
            <td className='text-green-700'>$134.67</td>
        </tr>
        <tr className='flex items-center justify-between w-full px-2 py-3 border-b border-[#E7E4E8] mt-2 text-[#7B7B7B] font-semibold'>
        <td>12 March</td>
            <td>2</td>
            <td>14.00</td>
            <td><img src={Image} alt="" /></td>
            <td className='text-green-700'>$134.67</td>
        </tr>
        <tr className='flex items-center justify-between w-full px-2 py-3 border-b border-[#E7E4E8] mt-2 text-[#7B7B7B] font-semibold'>
        <td>12 March</td>
            <td>2</td>
            <td>14.00</td>
            <td><img src={Image} alt="" /></td>
            <td className='text-green-700'>$134.67</td>
        </tr>
        
      </table>
    </div>
  )
}

export default SummaryBox
