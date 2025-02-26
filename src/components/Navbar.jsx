import React, { useEffect } from "react";
import { assets } from "../assets/assets";

export const Navbar = ({ showMobileMenu, setShowMobileMenu }) => {
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-white font-bold text-3xl w-2/3">
          {["Home", "About", "Projects", "Testimonials"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative cursor-pointer after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0
                 after:bg-red-500 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* ------- Mobile Menu ------- */}
      <div
        className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 ease-in-out shadow-lg ${
          showMobileMenu ? "w-2/3" : "w-0"
        } overflow-hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close"
          />
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
          {["Home", "About", "Projects", "Testimonials"].map((item) => (
            <li key={item}>
              <a
                onClick={() => setShowMobileMenu(false)}
                href={`#${item}`}
                className="px-4 py-2 rounded-full inline-block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;




// import React, { useEffect } from 'react'
// import { assets } from '../assets/assets'

// export const Navbar = () => {
//   const [showMobileMenu, setShowMobileMenu] = React.useState(false)


//      useEffect(() => {
//           if(showMobileMenu){
//             document.body.style.overflow = 'hidden'
//           }else{
//             document.body.style.overflow = 'auto'
//           }
//           return () => {
//             document.body.style.overflow = 'auto'
//           };
//      },[showMobileMenu])

//   return (
//     <div className='absolute top-0 left-0 w-full z-10'>
//         <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
//             <img src={assets.logo} alt=""/>
//             <ul className="hidden md:flex gap-7 text-white font-bold text-3xl w-2/3">
//   <a href="#Header" className="relative cursor-pointer after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0
//    after:bg-red-500 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full" >Home</a>
//   <a href="#About" className="relative cursor-pointer after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0
//    after:bg-red-500 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full" >Projects</a>
//   <a href="#Projects" className="relative cursor-pointer after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0
//    after:bg-red-500 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full" >About</a>
//   <a href="#Testimonials" className="relative cursor-pointer after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0
//    after:bg-red-500 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full" >Testimonials</a>
// </ul>


//             {/* <button className='hidden md:block bg-black px-8 py-2 rounded-full text-white'>Sign Up</button> */}
//             <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer'alt=""/>
//         </div>
//         {/* -------mobile-memu------ */}
//         <div className={`md:hidden ${showMobileMenu ? 'fixed w-1/2' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300`}>
//           <div className='flex justify-end p-6 cursor-pointer'>
//             <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt=""/>
//           </div>
//           <ul className='flex flex-col items-center gap-2 mt-5 px-5  text-lg font-medium'>
//             <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block'>Home</a>
//             <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block'>About</a>
//             <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py2 rounded-full inline-block'>Projects</a>
//             <a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" className='px-4 py2 rounded-full inline-block'>Testimonails</a>
//           </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar
