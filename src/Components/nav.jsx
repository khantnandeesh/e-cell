import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';

export const Nav = () => {
    const [active,setActive]=useState(false);
    let navigate=useNavigate();
  return (
    <div className={`w-[100%] md:text-md ${active? 'h-[42.75vw]' :'h-[16.03vw]' }  md:h-[7.66vw] lg:h-[3.8vw] items-center   flex justify-end gap-12 md:py-2 lg:py-2  md:px-8 lg:px-8 lg:text-[1.25vw] md:text-[2.42vw] font-light tracking-wide   shadow-[0_0_4px_4px_rgba(0,0,0,0.25)]`}>
        <div className={`${active? 'hidden':''} mr-[4.58vw] w-[12.72vw] h-[7.37vw] md:hidden lg:hidden flex flex-col justify-between`} onClick={()=>{setActive((status)=>!status)}}>
            <div  className='bg-[#D9D9D9] w-[100%] h-[1.78vw] rounded-lg'></div>
            <div className='bg-[#D9D9D9] w-[100%] h-[1.78vw] rounded-lg'></div>
            <div className='bg-[#D9D9D9] w-[100%] h-[1.78vw] rounded-lg'></div>
        </div>

        {/* dropdown  */}
        <div className={`${active ?'':'hidden'} md:hidden lg:hidden   relative h-[100%] w-[100%]`}>
                <div onClick={()=>{setActive(()=>{return false;})}} className=" cross h-[10.25vw]  w-[10.25vw] relative top-[5.59vw] left-[81.93vw]">
                        <div className=' absolute bg-[#D9D9D9] h-[1.78vw] w-[12.72vw]  -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 rotate-45 rounded-lg'></div>
                        <div className=' absolute  bg-[#D9D9D9] h-[1.78vw] w-[12.72vw] -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 -rotate-45 rounded-lg'></div>
                </div>
                <div className="navigation absolute top-[18.57vw] left-1/2 -translate-x-1/2  flex flex-col text-[4.58vw] justify-center items-center ">
                    <div onClick={() => {window.location.href = 'http://localhost:5173/about';  }} className='cursor-pointer mb-[1vw]'>Home</div>
                    <div className='mb-[1vw] cursor-pointer'>Grid</div>
                    <div   onClick={() => {window.location.href = 'https://www.linkedin.com';  }}>LinkedIn</div>
                </div>
        </div>




        {/* main larger screen visible only */}
        <div  onClick={()=>{}} className='hidden cursor-pointer hover:font-semibold md:block lg:block' >Home</div>
        <div className='hidden cursor-pointer md:block hover:font-semibold  lg:block'>Grid</div>
        <div  onClick={() => {window.location.href = 'https://www.linkedin.com'; }} className='hover:font-semibold  hidden cursor-pointer md:block lg:block'>Linkdin</div>

    </div>
  )
}
