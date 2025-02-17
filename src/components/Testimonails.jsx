import React from 'react'
import{ assets, testimonialsData } from '../assets/assets'

const Testimonails = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4
         decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real stories from Those Who Found Home with Us</p>


        <div className='flex flex-wrap justify-center gap-8'>
  {testimonialsData.map((testimonial, index) => (
    <div
      key={index}
      className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-100'
    >
      <img
        className='w-20 h-20 rounded-full mx-auto mb-4'
        src={testimonial.Image}
        alt={testimonial.alt}
      />
      <h2 className='text-xl text-black-700 font-medium'>{testimonial.Name}</h2>
      <p className='text-gray-500 mb-4 text-sm'>{testimonial.Title}</p>
      <div className='flex justify-center gap-1 text-red-500 mb-4'>
        {Array.from({ length: testimonial.Rating }, (item, index) => (
          <img key={index} src={assets.star_icon} alt='' />
        ))}
      </div>
      <p className='text-blue-600'>{testimonial.text}</p>
    </div>
  ))}
</div>

    </div>
  )
}

export default Testimonails