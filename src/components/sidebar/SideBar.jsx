import React from 'react'
import Tabs from './Tabs'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineSlackSquare } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import Flag1 from '../../assets/flag-4.png'
import Flag2 from '../../assets/flag-5.png'

const SideBar = () => {
  return (
    <div  id='style-4' className='w-full h-[80vh] overflow-y-scroll cursor-pointer'>
      <div className=' py-4 pb-12 flex flex-col items-center text-white'>
            <h1 className='uppercase text-[#004D99] font-semibold bg-[#E6F5FF] py-2 px-6 rounded-full'>buy evaluation</h1>
            <Tabs/>
            <div className='flex gap-1 mt-16 text-xl items-center justify-center '>
                
                <span className='border-2 rounded-lg border-white p-1'><IoLogoInstagram /></span>
                
               
                <span className='border-2 rounded-lg border-white p-1'><FaYoutube /></span>
                <span className='border-2 rounded-lg border-white p-1'><FaFacebook /></span>
                <span className='border-2 rounded-lg border-white p-1'><AiOutlineSlackSquare /></span>
                <span className='border-2 rounded-lg border-white p-1'><FaDiscord /></span>
            </div>
            <div className='mt-16 flex gap-4 items-center justify-center'>
                <span>
                <label class="switch">
  <input type="checkbox"/>
  <span class="slider"></span>
</label>
                </span>
                <span>Light/Dark Mode</span>
            </div>
            <div className='mt-10 flex items-center justify-center gap-4'>
                <span><RiArrowGoBackFill /></span>
                <span>Back to Homepage</span>
            </div>

            <div className='mt-24 text-center'>
                <h1 className='font-semibold'>AlpinEdge</h1>
                <h1 className='font-semibold mt-1'>Slope to Success</h1>
                <h2 className='text-xs  font-semibold mt-4'>Technology built in-house in Austria</h2>
                <div className='flex items-center justify-center gap-2 mt-4'>
                    <div className=''> <img src={Flag1} alt="" className='' /> </div>
                    <span> <img src={Flag2} alt="" /> </span>
                </div>
            </div>
          
      </div>
    </div>
  )
}

export default SideBar
