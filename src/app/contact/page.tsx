"use client";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { FaSquareGithub,FaLinkedin,FaSquareFacebook} from  "react-icons/fa6";




const Contact = () => {
    return (
      <div className= "text-orange-300 font-bold py-10" >
        
        <div className="container mx-auto px-8   md:px-16 sm:py-6 lg:px-24">
        
          <h2 className="text-center font-extrabold text-orange-600 text-5xl my-8 py-8 uppercase">
            Contact Me</h2>
          
          <div className="flex flex-col items-center md:flex-row sm:flex-row md:space-x-10">
            <div className="flex-1">
            <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
              <h3 className='text-3xl font-bold text-transparent py-5 bg-clip-text bg-gradient-to-r 
              from-orange-500 to-white mb-4'>Let s Talk
              </h3>

    <p className="text-orange-100 my-3">I m open to discussing web 
      development <br/>projects or partnership opportunities</p>


  <div className="flex  gap-3 px-5 py-2 flex-col items-center md:flex-row sm:flex-row">
    <div className="flex flex-wrap items-center justify-between gap-3 py-2">

    <a href="https://github.com/gdjaveria" className=" hover:text-white">     
       <FaSquareGithub className="text-orange-400 text-3xl" />
      </a>
    </div>


    <div className="flex flex-wrap items-center justify-between  gap-3 py-2">
    <a href="" className=" hover:text-white">     
       <FaLinkedin className="text-orange-400 text-3xl" />
      </a>
    </div>

    <div className="flex flex-row gap-3 py-2">
    <a href="#" className="text-orange-400 hover:text-white">     
       <FaSquareFacebook className="text-orange-400 text-3xl" />
      </a>
    </div>
    
    </div>
    
    
    
    <div className='mb-4 mt-8 text-orange-200'>
    <FaEnvelope className='inline-block text-orange-200 mx-5 my-3'/>

   
 <a href="mailto:youremail@example.com" className='hover:underline'>
  yourEmail@exmple.com
      </a>
            
  </div>
        
        <div className='mb-4'>
   <FaPhone className='inline-block text-orange-200 mx-5'/>
<span className="text-orange-200">+982-8839-922</span>
   </div>
  <div className='mb-4'>
        <FaMapMarkedAlt className='inline-block text-orange-200 mx-5'/>
        <span className="text-orange-200">Street city country</span>
        </div>
 </motion.div>
  </div>


<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
       <div className='flex-1 py-8 w-full'>
         <form className='space-y-4'>
          <div>
          <label htmlFor="name" className='block mb-2'>Your Name</label>
          <input type="text" 
         className='w-full p-2 rounded bg-orange-100 border border-orange-900 focus:outline-none
          focus:border-green-400'
           placeholder='Enter You Name'/>
          </div>

            <div>
           <label htmlFor="emial" className='block mb-2'>Email</label>
          <input type="text" 
          className='w-full p-2 rounded bg-orange-100 border border-orange-900 focus:outline-none
          focus:border-green-400'
           placeholder='Enter You Email'/>
          </div>

          <div>
           <label htmlFor="message" className='block mb-2'>Message</label>
            <textarea typeof="text" 
            className='w-full p-2 rounded bg-orange-100 border border-orange-900 focus:outline-none
             focus:border-green-400'
            placeholder='Enter You Message'/>
           </div>

     <button className='bg-gradient-to-r from-orange-300 to-orange-700 text-white md:inline
   transform transition-transform duration-300 hover:scale-105 px-8 py-2 font-extrabold rounded-full'>
    Send</button>
     </form>
     </div>
     </motion.div>
     </div>
     
     </div>

   </div>
    )
  }




export default Contact;