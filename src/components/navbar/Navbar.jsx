import React from 'react'
import Logo from '../../assets/logo.png'
import { FaAngleDown } from "react-icons/fa6";
import UserImage from '../../assets/user.png'
import Flag from '../../assets/Flag.png'
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='bg-white px-2 sm:px-8 py-1 rounded-lg z-50 '>
      <div className='flex justify-between items-center '>
        <div className='cursor-pointer sm:w-fit w-14'>
            <img src={Logo} alt="" className='w-full h-full'/>
        </div>
        <div className='flex items-center cursor-pointer sm:text-base text-xs'>
            <div className='flex mr-2 items-center gap-1 sm:gap-4'>
                <div className='text-[#004D99] p-1 rounded-full bg-[#F5F5F5] sm:text-2xl'><IoNotificationsOutline /></div>
                <div className='flex gap-1 items-center'>
                <img src={Flag} alt="" className='sm:w-fit w-6' />
                    <select name="" id="" className='px-1 sm:px-4'>
                        <option value="" className=''>
                      English
                    </option>
                    <option value="" className=''>
                      Urdu
                    </option>
                    </select>
                </div>
            </div>
            <div className='flex items-center gap-1 sm:gap-4 border-l sm:pl-6 pl-1  border-[#888888]'>
                <div>
                    <img src={UserImage} alt="" className='sm:w-fit w-8'/>
                </div>
                <div>
                    <h1 className='font-bold'>Thomas</h1>
                    <p>User</p>
                </div>
                <div className='sm:ml-4 rounded-full p-[1px] sm:p-1 border border-[#5C5C5C]'><FaAngleDown /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

