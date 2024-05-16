import React from 'react'
import Flag1 from '../../assets/flag-4.png'
import Flag2 from '../../assets/flag-5.png'

const Footer = () => {
  return (
    <div className='mt-20 mb-24 text-[#333333] px-4'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dignissimos deserunt dolores animi odio voluptates qui ut nostrum est, excepturi placeat amet autem architecto quasi blanditiis libero nemo! Eaque beatae veritatis eius sunt vero quam delectus quae, sint magni ex dolore quibusdam dolores cupiditate fugiat nihil odit itaque? Provident, earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident in aliquam repellendus reiciendis perferendis, labore necessitatibus dolores est? Aperiam, sequi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam sapiente ratione incidunt, nihil officiis!</p>
      <div className='w-full flex flex-col md:flex-row  items-center justify-between mt-6'>
        <h1>copyright- AlpinEdge</h1>
        <h1 className='flex gap-2 items-center'>technology built in-house Austria
             <span>
                <img src={Flag1} alt="" />
            </span>
            <span>
                <img src={Flag2} alt="" />
            </span>
            
             </h1>
        <ul className='flex flex-col md:flex-row mt-4 md:mt-0 gap-4 text-[#004D99] underline font-semibold justify-center items-center'>
            <li>Terms & Conditions</li>
            <li>Cookies Setting</li>
            <li>Privacey Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
