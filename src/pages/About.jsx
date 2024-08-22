import React from 'react'
import Lines from '../components/Lines'
import Typewrite from '../components/Typewriter'
import Button from '../components/Button'
import { FaDownload } from 'react-icons/fa'
import animation2 from "../animations/animation2.json"
import animation1 from "../animations/animation1.json"
import Lottie from 'lottie-react';
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { fadeIn } from '../varients'
const About = () => {
  return (
    <div className="about mt-10">
      <Lines first={"Let me tell u"} second={"About "} third={"Me"} />
      <div className="container flex flex-col lg:flex-row  gap-10 py-8">
        <motion.div
         variants={fadeIn("right", 0)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true, amount: 0 }}
        
        className="left w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <img className='w-[75%] rounded-full ' src="./assets/raja.jpg" alt="error-loading" />
        </motion.div>
        <motion.div
         variants={fadeIn("left", 0)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true, amount: 0 }}
        
        className="right w-full lg:w-1/2 px-2 lg:pl-24">
          <span className='font-bold text-3xl text-white'>Rajab Ali</span>
          <Typewrite />
          <p className='font-bold text-gray-400 '>As a Mern Stack Developer, my dedication lies in crafting high-quality web applications that precisely meet the requirements of my clients. With 2 years of hands-on experience in web development, I specialize in utilizing React.js, Next.js, TypeScript,  Node.js, MongoDb and Express js to develop scalable and robust web solutions. My focus on delivering excellence ensures that every project I undertake exceeds expectations and achieves optimal results.
            <br />
            My passion for solving complex problems and creating innovative solutions drives me to stay up-to-date with the latest technologies and trends in the industry.</p>

          <div className="grid grid-cols-2 gap-5 py-5">
            <div>
              <span className='font-bold text-violet-700'>Name :</span>
              <span className='font-semibold text-sm lg:text-md text-white'> Rajab Ali</span>
            </div>
            <div>
              <span className='font-bold text-violet-700'>Phone | Whatsapp : </span>
              <span className='font-semibold text-xs lg:text-md text-white'> +923093060947</span>
            </div>
            <div>
              <span className='font-bold text-violet-700'>Email :</span>
              <span className='font-semibold text-sm block lg:text-md text-white'>Rajabali2649@gmail.com</span>
            </div>
            <div>
              <span className='font-bold text-violet-700'>Address :</span>
              <span className='font-semibold text-sm lg:text-md text- text-white'> Faisalabad, Pakistan</span>
            </div>
          </div>
          <a href="../public/Resume.pdf" target='_blank'><Button name={"DOWNLOAD RESUME "} icon={<FaDownload className='bg-violet-700 icon' />} /></a>
        </motion.div>
      </div>
      <div className="skills pb-7 lg:pb-20">
        <h2 className='text-center py-14'>
          <span className="font-semibold text-white text-4xl pr-3">My</span>
          <span className="font-semibold text-violet-700 text-4xl">Skills</span>
        </h2>
        <div className="container flex flex-col-reverse lg:flex-row gap-20 justify-around">
          <div className="left w-full lg:w-2/3 ">
            <div className="box  flex justify-end items-center pr-10">
              <div className='ml-32'>
                <h1 className='text-xl mb-2 font-bold text-cyan-600'>Languages:</h1>
                <div className="logos  flex gap-7 rounded-md mb-7">
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="bg-[#313131] text-orange-600 svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-blue-400 bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-yellow-500 rounded bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-green-600 bg-[#313131]  svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path></svg></div>

                </div>
                <h1 className='text-xl mb-2 font-bold text-cyan-600'>Frameworks & Libraries:</h1>
                <div className="logos  flex gap-7 rounded-md mb-7">
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-cyan-400  bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-indigo-600 bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-cyan-400 bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-neutral bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg></div>

                </div>
                <h1 className='text-xl mb-2 font-bold text-cyan-600'>Tools & Technologies:</h1>
                <div className="logos  flex gap-7 rounded-md mb-7">
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-green-500 bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="text-black bg-[#313131]  svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg fill="none" viewBox="0 0 15 15" class="text-red-600  bg-[#313131]  svg" height="2em" width="2em" > <path fill="currentColor" fillRule="evenodd" d="M7 2.05H5.525a1.475 1.475 0 000 2.95H7V2.05zm0-1h2.475a2.475 2.475 0 011.492 4.45A2.475 2.475 0 018 9.463V11.425A2.475 2.475 0 114.033 9.45a2.471 2.471 0 01-.983-1.975c0-.807.386-1.523.983-1.975a2.475 2.475 0 011.492-4.45H7zm1 1V5h1.475a1.475 1.475 0 100-2.95H8zm-2.475 6.9H7V6H5.525a1.475 1.475 0 00-.006 2.95h.006zM4.05 11.425c0-.813.657-1.472 1.47-1.475H7v1.475a1.475 1.475 0 01-2.95 0zM8 7.472a1.475 1.475 0 110 .006v-.006z" clipRule="evenodd" /></svg></div>
                  <div className='bg-[#313131] h-12 w-12 hove flex justify-center hover:bg-[#262626] items-center cursor-pointer hover:-translate-y-1 hover:transition-all hover:ease-out hover:duration-500 rounded-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-cyan-800 bg-[#313131] svg" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"></path></svg></div>

                </div>
              </div>
            </div>
          </div>
          <div className="right w-full lg:w-2/3 flex justify-center items-center">
            <Lottie className='w-2/3 lg:w-1/2' animationData={animation2} loop={true} />
          </div>
        </div>
      </div>
      <div className="qualificaton">
        <h2 className='text-center py-5 lg:py-14'>
          <span className="font-semibold text-white text-4xl pr-3">My</span>
          <span className="font-semibold text-violet-700 text-4xl">Qualifications</span>
        </h2>
        <div className="container flex flex-col lg:flex-row gap-5">
          <div className="left w-full lg:w-1/2 flex justify-center items-center">
            <Lottie className='w-4/5 mx-9' animationData={animation1} loop={true} />
          </div>
          <div className="right w-full lg:w-1/2">
            <div className='w-4/5  lg:mx-0 lg:w-1/2 bg-[#262626] p-5 rounded-xl cursor-pointer hover:shadow-md hover:shadow-violet-700 transition-all ease-out duration-500'>
              <h1 className='font-semibold text-2xl bg-[#262626] flex justify-end  text-violet-700'>Software Engineering </h1>
              <h1 className='font-semibold text-2xl bg-[#262626] flex justify-end text-violet-700'>Student</h1>
              <span className='text-gray-400 flex bg-[#262626] justify-end font-bold'>2023-2027</span>
              <span className='text-gray-400 font-medium text-sm bg-[#262626] text-center'>I am currently pursuing my Bachelor's degree in Software Engineering from the University of Agriculture Faisalabad, Pakistan (UAF) .</span>
            </div>
            <div className='lg:w-1/2 w-3/4 bg-[#262626] mt-6 relative left-20 mb-3 lg:mb-0 lg:left-48 p-5 rounded-xl cursor-pointer hover:shadow-md hover:shadow-violet-700 transition-all ease-out duration-500'>
              <h1 className='font-semibold text-xl lg:text-2xl bg-[#262626] flex justify-end  text-violet-700'>Mern-Stack Developer </h1>
              <span className='text-gray-400 flex bg-[#262626] justify-end font-bold'>2023</span>
              <span className='text-gray-400 font-medium text-sm bg-[#262626] text-center'>I have successfully completed the <span className='font-bold'>Sigma Web Development course</span> from @codeWithHarry.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default About
