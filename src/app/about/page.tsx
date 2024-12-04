
"use client";
import Image from "next/image";
import { motion } from 'framer-motion';




const About =()=>{
    return(
    <section className=" mx-auto md:px-10 md:py-10">


<div className="flex items-center mx-auto  flex-col py-5 sm:flex-row md:px-12 lg:px-20 gap-5 ">
<div className="flex flex-col lg:gap-10 gap-5">

<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >  
<div className=" mx-auto my-auto w-[300px] h-auto lg:w-[400px]">
        <Image src="/aopic.png" 
width={1000} height={1000} 
alt="hero image"/>

</div>
</motion.div>
</div>


<motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >

<h2 className="text-center font-extrabold text-orange-600 text-5xl py-8 my-8 uppercase">About Me</h2>
<p className="text-base text-orange-50 font-normal mx-auto px-8 py-5   sm:text-lg lg:text-xl ">
Passionate web developer skilled in creating <br/>
dynamic user-friendly websites  Committed to<br/> 
blending innovative design with seamless<br/>
functionality to enhance user experiences<br/>
Dedicated to continuous learning and <br/>
leveraging the latest technologies to deliver<br/> 
outstanding digital solutions</p>


</motion.div>
 </div>




 
</section>

    )
}
export default About;