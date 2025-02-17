import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-ofset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-grey-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gaps-6 md:gap-10 w-full 2xl pr-28'>
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
                </div>
                <p className='my-10 ax-w-lg text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quia deleniti, 
                nemo autem enim voluptatibus, rem consectetur molestias repellat deserunt ratione,
                 corporis ea maxime. Porro iusto perspiciatis magnam in itaque! Lorem ipsum, 
                 dolor sit amet consectetur adipisicing elit.
                  Commodi laborum ab quasi pariatur nemo doloribus ut dolorum blanditiis nihil. 
                 Possimus deleniti perferendis iste unde eaque consequuntur quo consectetur mollitia suscipit!</p>
                 <button className='bg-blue-600 text-white px-10 py-3 rounded-full'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default About