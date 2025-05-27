import React from 'react'
import { testimonialsData} from '../assets/assets'
import {motion} from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div initial={{opacity:0.2 , y: 100}} 
    transition={{duration: 1}}
    whileInView={{opacity: 1,y: 0}}
    viewport={{once: true}} className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
      <p className="text-gray-500 mb-12">What our users are saying</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auti cursor-pointer hover:scale-[1.02] transition-all">
            <div className="flex flex-col items-center">
            <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-14 h-14 mx-auto mb-2" />
            <h2 className="font-semibold text-xl mt-3">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-center text-sm text-gray-600" >{testimonial.text}</p>
          </div>
      </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
