import React from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import Image from "next/image";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar =()=>{
    return(
        
 <nav className="flex justify-between px-3 py-3 max-w-screen-2xl  items-center mx-auto md:px-16 lg:px-24">
  <div>
  <Image src="/logo01.png" 
width={100} height={100} alt="logo image"/>
<h1 className="mx-auto text-orange-100
     font-semibold hidden md:inline ">Portfolio</h1>
    </div>


      <ul className= "hidden md:block">
      


   <li className="space-x-8 mx-auto text-orange-100 font-semibold hover:underline hover:text-orange-300">

        <Link href="/">Home</Link>
       <Link href="/about">About</Link>
       <Link href="/skills">Skills</Link>
       <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
             </li>
             </ul>

            

             
        <Sheet>
  <SheetTrigger className="md:hidden">
    <AlignJustify  className="text-orange-100"/>
    </SheetTrigger>
  <SheetContent>
 
  <ul className= "">

<li className="flex flex-col py-8 space-y-7 px-4 text-orange-100  hover:text-orange-300 font-semibold hover:underline ">

     <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/skills">Skills</Link>
    <Link href="/projects">Projects</Link>
   <Link href="/contact">Contact</Link>
          </li>
          </ul>
  </SheetContent>
</Sheet>

        </nav>

    );

};


export default Navbar;