import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../varients';

const Lines = (prop) => {
  return (
    <motion.div
    variants={fadeIn("down" , 0.6)}
    initial= "hidden"
    whileInView={"show"}
    viewport={{once:true, amount:0.3}}

    className='flex flex-col items-center justify-center'>
      <span className='text-gray-400 '>{prop.first}</span>
      <div className='block mb-4 mt-0'>
        <span className='lg:text-4xl text-3xl font-bold text-white'>{prop.second}</span>
        &nbsp;
        <span className='lg:text-4xl text-3xl font-bold text-violet-700'>{prop.third}</span>
      </div>
      <div className='flex items-center gap-0'>

      <div className="sideline bg-violet-700"></div>
      <div className="midline  bg-violet-700">
        <div className="innercircle"></div>
      </div>
      <div className="sideline  bg-violet-700"></div>

      </div>
    </motion.div>
  )
}

export default Lines
