"use client"
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Link from 'next/link';
// the link tag is creating some cache bug in the next js 

import { useEffect } from 'react';

export default function Mail() {
  useEffect(() => {
    // Automatically trigger the email link when the component is mounted
    window.location.href = 'mailto:medhashis000@gmail.com';
  }, []); // The empty array [] ensures that this effect runs only once on component mount

  return (
      <div className='flex  flex-col items-center justify-center h-full'>
         <div className="flex items-center justify-center w-full h-50 py-4 font-semibold text-3xl text-center  md:text-6xl z-10">
        <div className=" md:w-3/6   ">
          <AnimatedText text={" Mail"} />
        </div>
  </div> 
  <p className=' text-slate-400 w-3/5 whitespace-normal text-center md:text-lg font-semibold'> The Page automatically opens the mail app . If there is a problem here is the email address. EmailAddress: <a href="mailto:medhashis000@gmail.com">medhashis000@gmail.com</a>
   </p>  
      </div>
   
   
  ); 
}
