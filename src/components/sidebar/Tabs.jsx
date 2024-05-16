import React from 'react'
import { GoHome } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { RiDownload2Fill } from "react-icons/ri";
import { AiOutlineFileSync } from "react-icons/ai";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { FaHeadset } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { MdStarBorderPurple500 } from "react-icons/md";
import { MdViewTimeline } from "react-icons/md";

const Tabs = () => {
  return (
    <div className='mt-6 flex flex-col items-start justify-start '>
                <div className='flex mt-4 items-center gap-4 py-2 w-44 px-4 rounded-full  hover:bg-[#E6F5FF] hover:text-[#004D99]'>
                    <span className='text-xl'><GoHome /></span>
                    <span>Dashboard</span>
                </div>
                <div className='flex mt-4 items-center gap-4 py-2 px-4 w-44 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99]'>
                    <span className='text-xl'><ImProfile /></span>
                    <span>Profile</span>
                </div>
                <div className='flex mt-4 items-center gap-4 py-2 px-4 w-44 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99]'>
                    <span className='text-xl'><RiDownload2Fill /></span>
                    <span>Platforms</span>
                </div>
                <div className='flex mt-4 items-center gap-4 py-2 px-4 w-44 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99]'>
                    <span className='text-xl'><AiOutlineFileSync /></span>
                    <span>Billing</span>
                </div>
                <div className='flex mt-4 items-center gap-4  py-2 pl-4 w-48 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99] text-sm'>
                    <span className='text-xl'><VscCircleLargeFilled /></span>
                    <span>AlpinEdge Champions</span>
                </div>
                <div className='flex mt-4 items-center gap-4  py-2 pl-4 w-48 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99] text-sm'>
                    <span className='text-xl'><FaHeadset /></span>
                    <span>Mountain Rescue</span>
                </div>
                <div className='flex mt-4 items-center gap-4  py-2 pl-4 w-48 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99] text-sm'>
                    <span className='text-xl'><PiCertificateFill /></span>
                    <span>Certificates</span>
                </div>
                <div className='flex mt-4 items-center gap-4  py-2 px-4 w-44 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99] text-sm'>
                    <span className='text-xl'><MdStarBorderPurple500 /></span>
                    <span>Affiliates</span>
                </div>
                <div className='flex mt-4 items-center gap-4  py-2 px-4 w-48 rounded-full hover:bg-[#E6F5FF] hover:text-[#004D99] text-sm'>
                    <span className='text-xl'><MdViewTimeline /></span>
                    <span>Economic Calender</span>
                </div>
            </div>
  )
}

export default Tabs
