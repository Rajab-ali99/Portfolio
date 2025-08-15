import React from 'react'


const Button2 = (prop) => {
  return (
    <button className='btn2 bg-black  flex items-center text-xs lg:text-base hover:bg-violet-700 transition-all ease-in duration-500 border-2 border-violet-700  gap-1 rounded-md py-1 px-2 text-white font-bold'>{prop.name}{prop.icon}</button>
  )
}

export default Button2
