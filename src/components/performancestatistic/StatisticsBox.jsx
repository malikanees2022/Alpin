import React from 'react'

const StatisticsBox = () => {
  return (
    <div className='bg-white px-6 p-4 cursor-pointer mt-4 rounded-2xl  shadow-xl  text-sm'>
      <div className='flex gap-2'> 
        <div className='w-[33%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Average Profit:</h1>
            <h1 className='text-[#7B7B7B]'>$234.67</h1>
        </div>
        <div className='w-[33%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Average Loss:</h1>
            <h1 className='text-[#7B7B7B]'>-$334.67</h1>
        </div>
        <div className='w-[33%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Average RR:</h1>
            <h1 className='text-[#7B7B7B]'>$0.7</h1>
        </div>
      
      </div>
      <div className='flex gap-2 mt-4'> 
        <div className='w-[33%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Largest Profit:</h1>
            <h1 className='text-[#7B7B7B]'>$8624.67</h1>
        </div>
        <div className='w-[33%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Largest Loss:</h1>
            <h1 className='text-[#7B7B7B]'>-$364.67</h1>
        </div>
        <div className='w-[33%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Expectancy:</h1>
            <h1 className='text-[#7B7B7B]'>-$884.7</h1>
        </div>
      
      </div>
      <div className='mt-4'>
        <h1 className='text-[#004D99] font-extrabold text-center text-lg'>Win Rate</h1>
        <div className='mt-4 flex items-center justify-center md:gap-10 gap-2'>
            <div>
            <svg className="svg2">
  <circle cx="40" cy="40" r="35" stroke="#f3f3f3" />
  <circle className="progress4" cx="40" cy="40" r="35" />
  <text className='text flex flex-col' x="40" y="40">
    Long
  </text>
  <text className='text textsmall flex flex-col' x="40" y="52">
    xx,xx%
  </text>
  
</svg>
            </div>
            <div>
            <svg className="svg2">
  <circle cx="40" cy="40" r="35" stroke="#f3f3f3" />
  <circle className="progress4" cx="40" cy="40" r="35" />
  <text className='text' x="40" y="40">Overall</text>
  <text className='text textsmall flex flex-col' x="40" y="52">
    xx,xx%
  </text>
</svg>
            </div>
            <div>
            <svg className="svg2">
  <circle cx="40" cy="40" r="35" stroke="#f3f3f3" />
  <circle className="progress4" cx="40" cy="40" r="35" />
  <text className='text' x="40" y="40">Short</text>
  <text className='text textsmall flex flex-col' x="40" y="52">
    xx,xx%
  </text>
</svg>
            </div>

        </div>
      </div>

      <div className='flex gap-2 mt-6 text-xs'> 
        <div className='w-[25%] border border-[#7B7B7B] p-1 border-opacity-20 '>
            <h1 className='font-semibold'>Trades:</h1>
            <h1 className='text-[#7B7B7B]'>21</h1>
        </div>
        <div className='w-[25%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Lots:</h1>
            <h1 className='text-[#7B7B7B]'>123</h1>
        </div>
        <div className='w-[25%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Notional Volume:</h1>
            <h1 className='text-[#7B7B7B]'>-1.03</h1>
        </div>
        <div className='w-[25%] border border-[#7B7B7B] p-1 border-opacity-20'>
            <h1 className='font-semibold'>Profit Factor:</h1>
            <h1 className='text-[#7B7B7B]'>-0.9</h1>
        </div>
      
      </div>

    </div>
  )
}

export default StatisticsBox
