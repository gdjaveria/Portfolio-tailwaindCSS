
"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';





const Hero =() => {
    return(
      
    <section className="mx-auto md:px-10 md:py-10">

<div className="flex lg:justify-between items-center mx-auto sm:py-3 flex-col sm:flex-row gap-5 ">
<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
    <div className="flex flex-col lg:gap-10 gap-5">

      <h2 className=" mx-auto text-2xl font-serif py-5 px-5  flex flex-col   sm:text-4xl md:text-5xl lg:text-5xl lg:leading-normal
       text-orange-200 ">
        Hi I Am <br/>
        Javeria Iftikhar
</h2>

        <span className="font-extrabold text-2xl md:text-3xl lg:text-5xl  text-orange-400 ">

        <TypeAnimation
      sequence={[
    
        'Web Developer',
        1000,
        'Graphic Designer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display:'inherit' }}
      repeat={Infinity}
    />
  
    </span>
       

    <p className="text-base text-orange-50 font-normal mx-auto px-5 py-5   sm:text-lg lg:text-xl ">
    Welcome to my portfolio I m a dedicated web developer with a knack for crafting beautiful 
    functional websites that elevate brands and engage users</p>
</div>



    </motion.div>
       
<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >  

<div className=" mx-auto my-auto w-[300px] h-auto lg:w-[400px]">
  
   <Image src="/popic.png" 
width={1000} 
height={1000} 
alt="hero image"/>
 </div>
 </motion.div>


 </div>
 </section>
    )
}


export default Hero;