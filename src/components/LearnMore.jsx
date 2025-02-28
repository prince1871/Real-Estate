import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1 className='text-4xl sm:text-5xl font-bold mb-6 text-center text-blue-800'>
        Discover More About <span className='text-gray-700'>New Pavilion</span>
      </h1>
      
      <p className='text-gray-600 text-lg text-center max-w-3xl mb-10'>
        At <strong>New Pavilion</strong>, we redefine luxury and comfort in real estate. Our properties are designed to inspire, crafted with precision, and built for a sustainable future. Learn about our vision, projects, and the journey of excellence that sets us apart.
      </p>
      
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
          <h2 className='text-2xl font-semibold text-blue-700'>Innovation</h2>
          <p className='text-gray-500 mt-2'>We bring cutting-edge design and smart technology to modern homes.</p>
          <Link to='/learn-more' className='text-blue-600 mt-4 block hover:underline'>Learn More</Link>
        </div>
        <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
          <h2 className='text-2xl font-semibold text-blue-700'>Sustainability</h2>
          <p className='text-gray-500 mt-2'>Eco-friendly materials and energy-efficient solutions for a better future.</p>
          <Link to='/learn-more' className='text-blue-600 mt-4 block hover:underline'>Learn More</Link>
        </div>
        <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
          <h2 className='text-2xl font-semibold text-blue-700'>Community</h2>
          <p className='text-gray-500 mt-2'>Building spaces that foster connection, growth, and vibrant lifestyles.</p>
          <Link to='/learn-more' className='text-blue-600 mt-4 block hover:underline'>Learn More</Link>
        </div>
      </motion.div>
{/*       
      <motion.div 
        className='mt-10 flex justify-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <button 
          className='bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md transition-all hover:bg-blue-700 hover:shadow-lg'
          onClick={() => navigate('/learn-more')}
        >
          Learn More
        </button>
      </motion.div> */}
      
      <motion.div 
        className='mt-10 flex justify-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Link to="/" className='bg-blue-600 text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md transition-all hover:bg-blue-700 hover:shadow-lg'>
          Back to About
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LearnMore;
