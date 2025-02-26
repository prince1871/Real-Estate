import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1.5, ease: "easeOut" }}
    className='flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-ofset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-grey-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <motion.div
                 className='grid grid-cols-2 gaps-6 md:gap-10 w-full 2xl pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-black'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-black'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-black'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-black'>30+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </motion.div>
                <motion.p 
                 initial={{ opacity: 0, y: 50 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ duration: 1.5, ease: "easeOut" }}
                className='my-10 ax-w-lg text-black'>
                At<strong>[New Pavilion]</strong>, we believe that finding the perfect home isn’t just about property—it’s about possibilities, dreams, and creating a space where life’s most cherished moments unfold. A home is more than just four walls; it’s where families grow, memories are made, and futures are built.
                That’s why our brand is built on a foundation of trust, transparency, and top-tier service. We are committed to guiding you through every step of the real estate journey with expertise and care. Whether you’re searching for your first home, upgrading to a new space, or investing in real estate, we ensure a seamless, stress-free, and rewarding experience.
                With a deep understanding of the market, a client-first approach, and a passion for excellence, we don’t just find you a house—we help you discover a place to truly call home. At <strong>[New Pavilion]</strong>, your vision is our mission, and your satisfaction is our success.
                </motion.p>
                
                {/* Learn More Button */}
                <motion.button 
                  initial={{ opacity: 0, y: 50 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className='bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md transition-all hover:bg-blue-900 hover:shadow-lg'
                  onClick={() => navigate('/learn-more')}
                >
                  Learn More
                </motion.button>
            </div>
        </div>
    </motion.div>
  );
};

export default About;
