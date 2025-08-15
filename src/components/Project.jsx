import React from 'react'
import Lines from './Lines'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'
import Button from './Button'
import Button2 from './Button2'
import { GiDeliveryDrone } from 'react-icons/gi'
import { HiAcademicCap } from 'react-icons/hi'

const Projects = () => {
  return (
    <div className='container mx-auto  px-6 pb-5 lg:px-8'>
      < Lines first={"Some of my recent projects"} second={"Featured "} third={"projects"} />
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        animate={"show"}
        viewport={{ once: true, amount: 0.7 }}

        className='mt-10 flex gap-4  flex-wrap'>
        <a href='https://food-delivery-blond-eta.vercel.app' target='_blank'>
          <div className="card p-4 bg-violet-200 w-[310px] lg:w-[390px] rounded-md cursor-pointer">
            <div className='lg:h-[180px] h-[140px] w-[280px]  lg:w-[360px]'>
              <img className='h-full w-full object-scale-down' src="../src/assets/proc1.png" alt="" />
            </div>
            <div>
              <div className='py-1 text-xl  font-semibold bg-violet-200'>Tomato - Food delivery  </div>

              <div className='bg-violet-200 flex flex-wrap  gap-1 p-2'>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>HTML</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>CSS</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>JavaScript</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>React</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Tailwind Css</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Redux</div>
              </div>
              <div className='bg-violet-200 items-center flex gap-3'>
                <a className='bg-violet-200' href="https://github.com/Rajab-ali99/Food-Delivery" target="_blank" >
                  <Button name={"Github Repo"} icon={<HiAcademicCap className='bg-violet-700 icon' />} />
                </a>
                <a className='bg-violet-200' href='https://food-delivery-blond-eta.vercel.app' target="_blank">
                  <Button2 name={"Live Link"} icon={<GiDeliveryDrone className='bg-black transition-all ease-in duration-500 icon' />} />
                </a>

              </div>
            </div>
          </div>
        </a>
         <a href='https://full-stack-ecommerce-app-frontend.onrender.com' target='_blank'>
          <div className="card p-4 bg-violet-200 w-[310px] lg:w-[390px] rounded-md cursor-pointer">
            <div className='lg:h-[180px] h-[140px] w-[280px]  lg:w-[360px]'>
              <img className='h-full w-full object-scale-down' src="../src/assets/proc3.png" alt="" />
            </div>
            <div>
              <div className='py-1 text-xl  font-semibold bg-violet-200'>Cartify - Ecommerce Site </div>

              <div className='bg-violet-200 flex flex-wrap  gap-1 p-2'>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>HTML</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>JavaScript</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>React + vite</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Tailwind Css</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Redux</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Node Js</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Mongo DB</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>RESTful API</div>
              </div>
              <div className='bg-violet-200 items-center flex gap-3'>
                <a className='bg-violet-200' href="https://github.com/Rajab-ali99/Full-Stack-Ecommerce-App" target="_blank" >
                  <Button name={"Github Repo"} icon={<HiAcademicCap className='bg-violet-700 icon' />} />
                </a>
                <a className='bg-violet-200' href='https://full-stack-ecommerce-app-frontend.onrender.com' target="_blank">
                  <Button2 name={"Live Link"} icon={<GiDeliveryDrone className='bg-black transition-all ease-in duration-500 icon' />} />
                </a>

              </div>
            </div>
          </div>
        </a>
         <a href='https://mern-chat-app-frontend-xnjp.onrender.com' target='_blank'>
          <div className="card p-4 bg-violet-200 w-[310px] lg:w-[390px] rounded-md cursor-pointer">
            <div className='lg:h-[180px] h-[140px] w-[280px]  lg:w-[360px]'>
              <img className='h-full w-full object-scale-down' src="../src/assets/proc2.png" alt="" />
            </div>
            <div>
              <div className='py-1 text-xl  font-semibold bg-violet-200'>Convo chat App </div>
              <div className='bg-violet-200 flex flex-wrap  gap-1 p-2'>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>React + vite</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Tailwind Css</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Redux</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Node Js</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Mongo DB</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Express JS</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Socket.io</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>RESTful API</div>
              </div>
              <div className='bg-violet-200 items-center flex gap-3'>
                <a className='bg-violet-200' href="https://github.com/Rajab-ali99/Mern-Chat-App" target="_blank" >
                  <Button name={"Github Repo"} icon={<HiAcademicCap className='bg-violet-700 icon' />} />
                </a>
                <a className='bg-violet-200' href='https://mern-chat-app-frontend-xnjp.onrender.com' target="_blank">
                  <Button2 name={"Live Link"} icon={<GiDeliveryDrone className='bg-black transition-all ease-in duration-500 icon' />} />
                </a>

              </div>
            </div>
          </div>
        </a>
          <a href='https://landing-page-five-psi-55.vercel.app/' target='_blank'>
          <div className="card p-4 bg-violet-200 w-[310px] lg:w-[390px] rounded-md cursor-pointer">
            <div className='lg:h-[180px] h-[140px] w-[280px]  lg:w-[360px]'>
              <img className='h-full w-full object-scale-down' src="../src/assets/proc5.png" alt="" />
            </div>
            <div>
              <div className='py-1 text-xl  font-semibold bg-violet-200'>Personal portfolio site </div>
              <div className='bg-violet-200 flex flex-wrap  gap-1 p-2'>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>HTML</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>CSS</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>JavaScript</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Tailwind Css</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>React + vite</div>

              </div>
              <div className='bg-violet-200 items-center flex gap-3'>
                <a className='bg-violet-200' href="https://github.com/Rajab-ali99/Landing-page" target="_blank" >
                  <Button name={"Github Repo"} icon={<HiAcademicCap className='bg-violet-700 icon' />} />
                </a>
                <a className='bg-violet-200' href='https://landing-page-five-psi-55.vercel.app/' target="_blank">
                  <Button2 name={"Live Link"} icon={<GiDeliveryDrone className='bg-black transition-all ease-in duration-500 icon' />} />
                </a>

              </div>
            </div>
          </div>
        </a>
          <a href='' target='_blank'>
          <div className="card p-4 bg-violet-200 w-[310px] lg:w-[390px] rounded-md cursor-pointer">
            <div className='lg:h-[180px] h-[140px] w-[280px]  lg:w-[360px]'>
              <img className='h-full w-full object-scale-down' src="../src/assets/proc4.png" alt="" />
            </div>
            <div>
              <div className='py-1 text-xl  font-semibold bg-violet-200'>Personal portfolio site </div>
              <div className='bg-violet-200 flex flex-wrap  gap-1 p-2'>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>HTML</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>CSS</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>JavaScript</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Tailwind Css</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>React + vite</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>Web3Forms</div>
                <div className='bg-gray-500 text-white  text-xs py-1 px-3 rounded-full'>RESTful API</div>
              </div>
              <div className='bg-violet-200 items-center flex gap-3'>
                <a className='bg-violet-200' href="https://github.com/Rajab-ali99/Portfolio" target="_blank" >
                  <Button name={"Github Repo"} icon={<HiAcademicCap className='bg-violet-700 icon' />} />
                </a>
                <a className='bg-violet-200' href='https://mern-chat-app-frontend-xnjp.onrender.com' target="_blank">
                  <Button2 name={"Live Link"} icon={<GiDeliveryDrone className='bg-black transition-all ease-in duration-500 icon' />} />
                </a>

              </div>
            </div>
          </div>
        </a>
         
      
      </motion.div>
    </div>
  )
}

export default Projects
