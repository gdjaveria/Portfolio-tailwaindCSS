"use client";

import React from "react";
import Image from "next/image";
import p1Image from "/public/project1.png";
import p2Image from "/public/project2.png";
import p3Image from "/public/project3.png";
import p4Image from "/public/project4.png";
import { motion } from 'framer-motion';


const Projects = () => {
   return(
<div className=" max-w-[2000px] mx-auto p-5">
        <div className="pb-8">
       <p className="text-center font-bold text-orange-600 text-5xl my-8 uppercase">My Projects </p>
       <p className="text-center font-light text-orange-100 my-10">check out some of my recent work</p>
  </div>

            
    <div className="grid grid-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

     <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
  >  

 <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
  shadow-[#040c16] group container rounded-md flex justify-center items-center 
   h-[200px] bg-cover relative">
   <Image src={p1Image} layout="fill" objectFit="cover" alt=""/>

    <div className="opacity-0 group-hover:opacity-90 bg-transparent-300/70 absoulate
     flex flex-col justify-center items-center">
     

      <div className="pt-8 text-center">
      <a href="/">
      <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-300
       text-orange-800 font-bold text-2xl font-serif">
         LIVE 
     </button>
 </a>

</div>
 </div>
 </div>
    </motion.div>


     <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
     >  

 <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
     shadow-[#040c16] group container rounded-md flex justify-center items-center 
  h-[200px] bg-cover relative">
  <Image src={p2Image} layout="fill" objectFit="cover" alt=""/>

     <div className="opacity-0 group-hover:opacity-90 bg-transparent-300/70 absoulate inset-0 
     flex flex-col justify-center items-center">


      <div className="pt-8 text-center">
   <a href="https://figma-template-designe.vercel.app/">
      <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-300 
      text-orange-800 font-bold text-2xl font-serif">
        LIVE 
  </button>
  </a>

</div>
 </div>
 </div>
 </motion.div>



 <motion.div
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5 }}
 >  


  <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
     shadow-[#040c16] group container rounded-md flex justify-center items-center 
  h-[200px] bg-cover relative">
   <Image src={p3Image} layout="fill" objectFit="cover" alt=""/>

  <div className="opacity-0 group-hover:opacity-90 bg-transparent-300/70 absoulate inset-0 
      flex flex-col justify-center items-center">


     <div className="pt-8 text-center">
    <a href="https://restruant-landing-page-dun.vercel.app/">
    <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-300 
    text-orange-800 font-bold text-2xl font-serif">
       LIVE 
 </button>
    </a>
</div>
 </div>
 </div>

 <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg
     shadow-[#040c16] group container rounded-md flex justify-center items-center 
  h-[200px] bg-cover relative">
  <Image src={p4Image} layout="fill" objectFit="cover" alt=""/>

     <div className="opacity-0 group-hover:opacity-90 bg-transparent-300/70 absoulate inset-0 
     flex flex-col justify-center items-center">


      <div className="pt-8 text-center">
   <a href="https://portfolio-css-phi.vercel.app/">
      <button className="text-center rounded-lg px-4 py-3 m-2 bg-slate-300 
      text-orange-800 font-bold text-2xl font-serif">
        LIVE 
  </button>
  </a>

</div>
 </div>
 </div>
  </motion.div>

 </div>
</div>

)
}



export default Projects;






