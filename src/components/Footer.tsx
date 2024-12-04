
import React from "react";



const Footer = () => {
    return (

<footer className=" py-8">
<div className="container mx-auto px-8 flex items-center sm:flex-row flex-col md:px-12 lg:px-20">
  <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
    <div className="flex-1 mb-4 md:mb-0">

      <h3 className="text-2xl font-bold text-orange-400 mt-3 mb-3">Javeria</h3>

      <p className="text-orange-200 text-center text-base">
        Full-Stack Developer specializing in web and
        software development.
      </p>
    </div>

    
<div className="border-t border-orange-400 pt-3 flex flex-col sm:flex-col md:flex-row 
          justify-between items-center">

    <p className=" text-orange-200">
   & Copy ; {new Date().getFullYear()} 2024 Javeria Iftikhar.All Rights Reserved.
</p>


</div>
</div>
</div>

</footer>
    )
    }

    export default Footer;