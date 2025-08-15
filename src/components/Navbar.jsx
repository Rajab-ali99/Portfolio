import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import Button from './Button'
const Navbar = () => {
  const handleclick = () => {
    
    { document.querySelector(".hide").style.right = 0 }
  }
  return (
    
    

      <nav className='flex justify-between lg:px-10 pr-4  lg:justify-around h-14 items-center overflow-hidden bg-violet-700  '>

        <div className="logo h-[75px] bg-violet-700 "><img className=' bg-violet-700 relative top-1  h-full w-full object-cover  ' src='./assets/logo1.png' alt="error"  /></div>
        
        <div onClick={handleclick} className='block lg:hidden cursor-pointer bg-violet-700 '>
          <GiHamburgerMenu className='bg-violet-700 ' />
        </div>
        <ul className='hidden lg:flex gap-10 text-white font-bold  bg-violet-700 items-center'>

          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/"><li className='bg-violet-700 hover:text-black transition-all ease-out duration-300'>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/About"><li  className=' bg-violet-700 hover:text-black transition-all ease-out duration-300'>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Contact"><li  className=' bg-violet-700 hover:text-black transition-all ease-out duration-300'>Contact us</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Projects"><li  className=' bg-violet-700 hover:text-black transition-all ease-out duration-300'>Projects</li></NavLink>
          <a href="/Resume.pdf"><li className='bg-violet-700 text-black'><Button name={"Resume"} icon={<FaDownload className='bg-violet-700 icon' />} /></li></a>


        </ul>

      </nav>
    
    
  )
}

export default Navbar
