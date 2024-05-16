import React from 'react'
import { GoHome } from "react-icons/go";
import DashBoardDetails from '../../components/dashboardDetails/DashBoardDetails';
import Evaluationobjective from '../../components/evaluationObjectives/Evaluationobjective';
import PerformanceSection from '../../components/performancestatistic/PerformanceSection';
import TradeHistory from '../../components/tradehistory/TradeHistory';
import Footer from '../../components/footer/Footer';

const DashBoard = () => {
  return (
    <div className=''>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <div>
                <div className='flex gap-2 items-center text-[#7B7B7B]'>
                    <span className='text-lg font-bold text-[#004D99]'><GoHome/></span>
                    <span>Trader</span>
                    <span className='text-xl'>/</span>
                    <span>Client Area</span>
                    <span className='text-xl'>/</span>
                    <span className='text-[#004D99] font-bold'>xxx</span>
                </div>
                <h1 className='text-lg font-bold mt-2'>Good Morning, Thomas!</h1>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                <span className=' text-[#7B7B7B]'>Select your Ride:</span>
                <span className='bg-[#024573] rounded-lg font-semibold px-2 py-1 text-white cursor-pointer'>
                  <select name="" id="" className='bg-transparent'>
                    <option value="">#1234024535 - INTERIM 1</option>
                  </select>
                </span>
            </div>
        </div>
      <DashBoardDetails/>
      <Evaluationobjective/>
      <PerformanceSection/>
      <TradeHistory/>
   

    </div>
  )
}

export default DashBoard

