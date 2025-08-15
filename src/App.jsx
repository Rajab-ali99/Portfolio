import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { IoClose } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { RiFolderWarningFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { IoBriefcase } from "react-icons/io5";
import Button from './components/Button';
import { FaDownload } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify';


function App() {
  
  const handleclose = () => {
    { document.querySelector(".hide").style.right = "-300px" }
     }
 
  return (
    <>
    <ToastContainer />
      <main className='overflow-x-hidden overflow-y-hidden relative'>
        <aside>
        <div className='h-[100vh] w-56 hide absolute z-30 transition-all ease-out duration-1000 -right-[250px] top-0  '>
        <div className=' m-4'>

                <IoClose onClick={handleclose} className='text-white cursor-pointer text-2xl' />
        </div>
        <hr className='' />
        <ul className='text-white font-semibold flex flex-col gap-5 mx-3 my-5'>
          <NavLink onClick={handleclose} className={(e) => { return e.isActive ? "blue" : "" }} to="/"><li className='  flex gap-3 items-center cursor-pointer'><span><IoHome /></span>Home</li></NavLink>
          <NavLink onClick={handleclose} className={(e) => { return e.isActive ? "blue" : "" }} to="/About"><li className=' flex gap-3 items-center cursor-pointer'> <span><RiFolderWarningFill /></span>About</li></NavLink>
          <NavLink onClick={handleclose} className={(e) => { return e.isActive ? "blue" : "" }} to="/Contact"><li className=' flex gap-3 items-center cursor-pointer'><span><BiSolidContact /></span>Contact us</li></NavLink>
          <NavLink onClick={handleclose} className={(e) => { return e.isActive ? "blue" : "" }} to="/Projects"><li className=' flex gap-3 items-center cursor-pointer'><span><IoBriefcase /></span>Projects</li></NavLink>
          <a href="/Resume.pdf"><li className='mx-10 my-4'><Button name={"Resume"} icon={<FaDownload className='bg-violet-700 icon w-full' />} /></li></a>
        </ul>
        <div className='text-gray-400 text-sm font-semibold absolute bottom-5'>
          <span className='block'>&copy; Copyright 2024,Rajab Ali.</span>
          <span className='text-center block'>All Rights Reserved</span>




        </div>
      
      </div>
        </aside>
        <Navbar/>
        <Outlet/>
      </main>
    
    </>
  )
}

export default App
