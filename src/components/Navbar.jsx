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
    <>
    

      <nav className='flex justify-between px-10  lg:justify-around h-14 items-center overflow-hidden bg-cyan-600  '>

        <div className="logo   bg-cyan-600"><img className='bg-cyan-600  ' src="./assets/logo.png" alt="error" height={100} width={170} /></div>
        <div onClick={handleclick} className='block lg:hidden cursor-pointer bg-cyan-600'>
          <GiHamburgerMenu className='bg-cyan-600' />
        </div>
        <ul className='hidden lg:flex gap-10 text-white font-bold  bg-cyan-600 items-center'>

          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/"><li className='  bg-cyan-600 hover:text-violet-900 transition-all ease-out duration-300'>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/About"><li  className=' bg-cyan-600 hover:text-violet-900 transition-all ease-out duration-300'>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Contact"><li  className=' bg-cyan-600 hover:text-violet-900 transition-all ease-out duration-300'>Contact us</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Projects"><li  className=' bg-cyan-600 hover:text-violet-900 transition-all ease-out duration-300'>Projects</li></NavLink>
          <a href="../public/Resume.pdf"><li className='bg-cyan-600'><Button name={"Resume"} icon={<FaDownload className='bg-violet-700 icon' />} /></li></a>


        </ul>

      </nav>
    
    </>
  )
}

export default Navbar
