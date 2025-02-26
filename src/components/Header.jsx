import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* Navbar with Mobile Menu Control */}
      <Navbar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />

      {/* Hero Section: Hidden when Mobile Menu is Open */}
      <div
        className={`min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden transition-all duration-300 ${
          showMobileMenu ? "hidden" : "flex"
        } items-center`}
        style={{ backgroundImage: "url('/header_img.jpg')" }}
        id="Header"
      >
        <div className="container text-center mx-auto py-4 z-10 px-6 md:px-20 lg:px-32 text-white">
          <motion.h2 
           initial={{ opacity: 0, y: 50 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-[82px] font-semibold pt-20 text-white drop-shadow-lg hover:text-blue-500">
           <strong> Explore homes that 
            fit your dreams</strong> 
          </motion.h2>

          <div className="space-x-6 mt-16">
            <a href="#Projects" className="border border-white px-8 py-3 rounded-full  hover:bg-blue-500 hover:shadow-lg">
              Projects
            </a>
            <a href="#Contact" 
   className="bg-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black border">
  Contact Us
</a>

          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
};

export default Header;






// import React from 'react'
// import Navbar from './Navbar'

// const Header = () => {
//   return (
//    <>
//     <div className='min-h-screen mb-4 bg-cover bg-center flex 
//     items-center w-full overflow-hidden ' 
//     style={{backgroundImage: "url('/header_img.jpg')"}} id='Header'>
//        <Navbar />
//        <div className='container text-center mx-auto py-4 z-10 px-6 md:px-20 lg:px-32 text-white'>
//        <h2 className=" text-5xl sm:text-6xl md:text-[82px] font-semibold pt-20 text-white drop-shadow-lg hover:text-blue-500 ">
//          Explore homes that fit your dreams
//       </h2>

//         <div className='space-x-6 mt-16'>
//             <a href="#Projects" className='border border-white px-8 py-3 rounded-full'>Projects</a>
//             <a href="#Contact" className=' bg-blue-500 px-8 py-3 rounded-full'>Contact Us</a>
//         </div>
//        </div>

//        <div className='overlay'></div>
//     </div>
    
//     </>
//   )
// }

// export default Header