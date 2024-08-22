import React from 'react'
const Button = (prop) => {
  return (
    <button className='btn flex items-center hover:text-violet-700 hover:bg-gray-800 bg-violet-700 gap-1 rounded-md p-2 text-white text-xs lg:text-base font-bold'>{prop.name}{prop.icon}</button>
  )
}

export default Button
