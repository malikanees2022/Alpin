import React from 'react'
import { IoMdLogIn } from "react-icons/io";

const DetailsBox = () => {
  return (
    <div className='bg-white mt-2 px-8 py-4 h-auto md:h-80 text-[#666666]  rounded-2xl shadow-xl'>
      <div className='flex items-center justify-start   py-2'>
        <h1 className='font-semibold w-44'>Status:</h1>
        <h2>Ongoing</h2>
      </div>
      <div className='flex items-center justify-start border-t border-b border-[#888888] border-opacity-20   py-2'>
        <h1 className='font-semibold w-44'>Start:</h1>
        <h2>2 March 2024 08:50:0</h2>
      </div>
      <div className='flex items-center justify-start border-b border-[#888888] border-opacity-20   py-2 '>
        <h1 className='font-semibold  w-44'>End:</h1>
        <h2 className=''>2 April 2024 08:50:02</h2>
      </div>
      <div className='flex items-center justify-start border-b border-[#888888] border-opacity-20   py-2 '>
        <h1 className='font-semibold  w-44'>Platform:</h1>
        <h2 className=''>MT5+ | JFD Brokers</h2>
      </div>
      <div className='flex items-center justify-start  border-opacity-20   py-2 '>
        <h1 className='font-semibold  w-44'>Last Updated:</h1>
        <h2 className=''>12 March 2024 08:50:02</h2>
      </div>
      <div className='flex md:flex-row flex-col items-center justify-center gap-4 mt-8'>
        <button className='text-white flex items-center gap-2 bg-[#024573] px-2 py-1 rounded-full border border-[#024573]'>
          <span><IoMdLogIn /></span>
          <span>Login Credential</span>
        </button>
        <button className='bg-white flex items-center gap-2 text-[#024573] px-2 py-1 rounded-full border border-[#024573]'>
          <span><IoMdLogIn /></span>
          <span>Login Credential</span>
        </button>
      </div>
    </div>
  )
}

export default DetailsBox
