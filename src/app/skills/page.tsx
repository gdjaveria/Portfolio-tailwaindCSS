"use client";

import React from "react"
import {FaNodeJs,FaHtml5} from "react-icons/fa6"
import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {TbBrandTypescript} from "react-icons/tb";
import {SiTailwindcss} from "react-icons/si";
import { motion } from 'framer-motion';



const Skills =() => {
    return(
      
        <div className=" text-purple-600 mt-6 py-10">
          
         
      <h2 className="text-center font-extrabold text-orange-600 text-5xl py-6 my-8 uppercase">Skills</h2>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >  

      
      <div className="flex flex-wrap items-center justify-center mt-8 gap-6">

    <div><FaHtml5 className="text-6xl  text-orange-400" /></div>

    <div><RiReactjsLine className="text-6xl text-blue-500" /></div>
    

    <div><SiTailwindcss className="text-6xl text-sky-500"/></div>

    <div><FaNodeJs className="text-6xl text-green-400"/></div>

    <div><TbBrandNextjs className="text-6xl text-white"/></div>

    <div>< TbBrandTypescript className="text-6xl text-sky-500"/></div>
    </div>
    </motion.div>



<div className="space-y-4 mt-20 px-14 ">
<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        
        >  

     <div className="flex items-center   text-orange-300 font-bold">
      <label htmlFor="htmlandcss" className="w-2/12">
       HTML & CSS
        </label>
   <div className="grow bg-gray-800 rounded-full h-2.5 ">
  <div
      className="bg-gradient-to-r from-orange-800 to-gray-200 h-2.5 rounded-full 
    transform transition-transform duration-300 hover:scale-105 w-10/12"
   ></div>
    </div>
   </div>

<div className="flex items-center  text-orange-300 font-bold ">
      <label htmlFor="htmlandcss" className="w-2/12 ">
       React.Js
        </label>
   <div className="grow bg-gray-800 rounded-full h-2.5">
  <div
      className="bg-gradient-to-r from-orange-800 to-gray-200 h-2.5 rounded-full 
    transform transition-transform duration-300 hover:scale-105 w-10/12"
   ></div>
    </div>
   </div>


   <div className="flex items-center text-orange-300 font-bold ">
      <label htmlFor="htmlandcss" className="w-2/12">
       Next.Js
        </label>
   <div className="grow bg-gray-800 rounded-full h-2.5">
  <div
      className="bg-gradient-to-r from-orange-800 to-gray-200 h-2.5 rounded-full 
    transform transition-transform duration-300 hover:scale-105 w-10/12"
   ></div>
    </div>
   </div>


   <div className="flex items-center text-orange-300 font-bold ">
      <label htmlFor="htmlandcss" className="w-2/12">
      Typescript
        </label>
   <div className="grow bg-gray-800 rounded-full h-2.5">
  <div
      className="bg-gradient-to-r from-orange-800 to-gray-200 h-2.5 rounded-full 
    transform transition-transform duration-300 hover:scale-105 w-10/12">

    </div>
    </div>
   
    
   </div>

  

   </motion.div>
</div>

    </div>








)
}
  export default Skills;