import React from 'react'
import {Typewriter} from "react-simple-typewriter"
const Typewrite = () => {
   
  return (
    <div>
       <h1 className='font-bold text-2xl text-violet-700 my-5'>
          <Typewriter
          words= {['Software Eng. Student','Node JS Developer','Next Js Developer','React Developer','Front-end Developer']}
          loop={""}
          cursor
          delaySpeed={3000}
          />
        </h1>
    </div>
  )
}

export default Typewrite
