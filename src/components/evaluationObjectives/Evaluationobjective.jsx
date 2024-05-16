import React from 'react'

const Evaluationobjective = () => {
  return (
    <div className='mt-10'>
       <h1 className='font-bold text-lg'>Evaluation Objectives</h1>
       <div className='mt-6 flex flex-wrap gap-4'>
        <div className='bg-white text-center w-full md:w-40 py-4 rounded-2xl h-44 shadow-xl'>
            <h1 className='font-semibold text-sm'>Account</h1>
            <div className='mt-3 border-t border-[#646464] border-opacity-20 text-[#004D99] '>
                <h1 className='mt-2 text-sm'>Equity</h1>
                <h1>$50,000.00</h1>
                <h1 className='mt-2 text-sm'>Balance</h1>
                <h1>$50,000.00</h1>
            </div>
        </div>
        <div className='bg-white text-center w-full md:w-40 py-4 rounded-2xl h-44 shadow-xl'>
            <h1 className='font-semibold text-sm'>Virtual Daily Loss</h1>
            <div className='mt-3 border-t border-[#646464] border-opacity-20 text-[#004D99] '>
                <h1 className='mt-2'>$50,000.00</h1>
               <div className=' relative h-6 mt-1'>
               <div className="progress-loader2">
    <div className="progress2 w-16"></div>
</div>
               </div>
               <p className='text-[#7B7B7B] text-xs mt-3'>Rule Breach Level Today.</p>
               <p className='text-[#7B7B7B] text-xs mt-1'>$48,000.00</p>
               
            </div>
        </div>
        <div className='bg-white text-center w-full md:w-40 py-4 rounded-2xl h-44 shadow-xl'>
            <h1 className='font-semibold text-sm'>Virtual Overall Loss</h1>
            <div className='mt-3 border-t border-[#646464] border-opacity-20 text-[#004D99] '>
                <h1 className='mt-2'>$3,500.00</h1>
               <div className=' relative h-6 mt-1'>
               <div className="progress-loader2">
    <div className="progress2 w-12"></div>
</div>
               </div>
               <p className='text-[#7B7B7B] text-xs mt-3'>Rule Breach Level.</p>
               <p className='text-[#7B7B7B] text-xs mt-1'>$46,500.00</p>
               
            </div>
        </div>
        <div className='bg-white text-center w-full md:w-40 py-4 rounded-2xl h-44 shadow-xl'>
            <h1 className='font-semibold text-sm'>Virtual Profit Target</h1>
            <div className='mt-3 border-t border-[#646464] border-opacity-20 text-[#004D99] '>
                <h1 className='mt-2'>$3,500.00</h1>
               <div className=' relative h-6 mt-1'>
               <div className="progress-loader2">
    <div className="progress2 w-8"></div>
</div>
               </div>
               <p className='text-[#7B7B7B] text-xs mt-3'>Required Balance level:</p>
               <p className='text-[#7B7B7B] text-xs mt-1'>$55,000.00</p>
               
            </div>
        </div>
        <div className='bg-white text-center w-full md:w-40 py-4 rounded-2xl h-44 shadow-xl'>
            <h1 className='font-semibold text-sm'>Minimum Trading Days</h1>
            <div className='mt-3 border-t border-[#646464] border-opacity-20 text-[#004D99] '>
               <div className='flex items-center mt-4 justify-center'>
           
               <svg className="svg">
  <circle cx="40" cy="40" r="35" stroke="#f3f3f3" />
  <circle className="progress3" cx="40" cy="40" r="35" />
  <text className='text' x="40" y="40">3</text>
</svg>
</div>
               
            </div>
        </div>
        <div className='bg-white text-center w-full md:w-40 py-4 rounded-2xl h-44 shadow-xl'>
            <h1 className='font-semibold text-sm'>Virtual Profit Target</h1>
            <div className='mt-3 border-t border-[#646464] border-opacity-20 text-[#004D99] '>
                <h1 className='mt-4'>Switch Display</h1>
                <div className='flex gap-3 items-center justify-center mt-4'>
                    <span>%</span>
                    <span>
                <label class="switch2">
  <input type="checkbox"/>
  <span class="slider3"></span>
</label>
                </span>
                    <span>$</span>
                </div>
               
              
            </div>
        </div>
       </div>
    </div>
  )
}

export default Evaluationobjective
