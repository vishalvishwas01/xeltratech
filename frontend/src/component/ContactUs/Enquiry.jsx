import React from 'react';
import "./Enquiry.css"
import Header from '../homepage/header';
const Enquiry = () => {
  return (
    <div className="mt-3 enquiry-container ">
     
       <div className=' w-9/12 flex flex-row gap-4 items-center justify-center overflow-hidden flex-wrap'>
             <div className='  '>
                 <div className='font-inter text-base leading-[36px] tracking-normal'>Contact Info</div>
                 <div className="font-inter font-bold text-[48px] leading-[62.4px] tracking-normal">We are always 
                 happy to assist you</div>
             </div>
             <div className='  flex flex-col gap-2'>
                    <div className="font-inter font-semibold text-[22px] leading-[26.63px] tracking-normal">Email Address</div>
                    <div className="font-inter font-semibold text-[22px] leading-[26.63px] tracking-normal">enquiry@xeltratech.com</div>
                    <div className="font-inter font-semibold text-[22px] leading-[26.63px] tracking-normal max-w-[60%]">Assistance hours:

Monday - friday 8am 

to 9pm EST</div>
             </div>
             <div className='  flex flex-col gap-2 '>
                   <div className="font-inter font-semibold text-[22px] leading-[26.63px] tracking-normal">Number</div>
                   <div className="font-inter font-semibold text-[22px] leading-[26.63px] tracking-normal">+91-1234567890</div>
                   <div className="font-inter font-semibold text-[22px] leading-[26.63px] tracking-normal max-w-[90%]">Assistance hours:<br></br>

Monday - friday 8am 

to 9pm EST</div>
             </div>
         
       </div>
    </div>
  );
}

export default Enquiry;