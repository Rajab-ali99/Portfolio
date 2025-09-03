import React, { useState } from 'react'
import { useEffect } from 'react';
import Typewrite from '../components/Typewriter'
import { FaDownload, } from 'react-icons/fa'
import { HiAcademicCap } from "react-icons/hi";
import Button from '../components/Button'
import Button2 from '../components/Button2';
import { Helmet } from "react-helmet-async";
import animation from "../animations/animation.json"
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import Lines from '../components/Lines';
import { motion } from "framer-motion";
import { fadeIn } from '../varients';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Project from '../components/Project';
const Home = () => {
   const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Delay video appearance by 2.5 sec
    const timer = setTimeout(() => {
      setShowVideo(true);
    },);

    return () => clearTimeout(timer);
  }, []);
  const url = "https://portfolio-e4q6.onrender.com";
  const title = "Rajab Ali – MERN Stack Developer | Full-Stack Web Developer";
  const description = "Rajab Ali is a skilled MERN stack developer specializing in building high-performance web applications using MongoDB, Express.js, React, and Node.js. Explore projects in e-commerce, real-time chat, and custom web solutions. Hire a full-stack developer who delivers clean code, scalable architectures, and responsive designs.";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rajab Ali",
    "jobTitle": "MERN Stack Developer",
    "url": url,
    "sameAs": [
      "https://github.com/Rajab-ali99",
      "https://www.linkedin.com/in/rajab-ali-636524375",
      "https://www.upwork.com/freelancers/~01bf3c34879bc12ce2",
      "https://www.fiverr.com/sellers/rajabali10005"
    ]
  };

  return (
    <>
      <Helmet>

        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://portfolio-e4q6.onrender.com/img.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://portfolio-e4q6.onrender.com/img.png" />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      </Helmet>



      
        <div className=" relative  z-10  flex flex-col-reverse  lg:flex-row lg:flex  lg:px-[6%] py-10 lg:gap-14">
          {/* Background Video */}
          {showVideo && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"  // lazy loading
              className="absolute opacity-50 top-0 left-0 w-full h-[370px] lg:h-[calc(100dvh-56px)] object-cover"
            >
              <source src="/smoke.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            animate={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="left z-10  w-full px-5 lg:px-0 lg:w-[60%] py-3 lg:py-20 " >
            <span className='font-semibold  text-gray-400 text-xl'>Hi,This is</span>
            <h1 className='text-white font-semibold text-4xl my-1 px-1'>Rajab Ali</h1>
            <Typewrite />
            <p className='text-gray-400 font-bold'>As a Frontend React Developer, my dedication lies in crafting high-quality web applications that precisely meet the requirements of my clients. With 2 years of hands-on experience in web development, I specialize in utilizing React.js, Next.js, JavaScript, and Node.js Mongo Db , Express and Mongoose to develop scalable and robust web solutions. My focus on delivering excellence ensures that every project I undertake exceeds expectations and achieves optimal results</p>
            <div className='my-4 flex items-center gap-10'> <a href="/Resume.pdf"><Button name={"DOWNLOAD RESUME"} icon={<FaDownload className='bg-violet-700 icon' />} /></a>
              <Link to="/About">
                <Button2 name={"ABOUT ME"} icon={<HiAcademicCap className='bg-black transition-all ease-in duration-500 icon' />} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="right    w-full px-5 lg:flex lg:justify-between  lg:px-0 lg:w-1/2  ">
            <Lottie className='w-full ' animationData={animation} loop={true} />
          </motion.div>
        </div>
        <Lines first={"What I Provide"} second={"My "} third={"Services"} />
        <div className="services py-5 px-[3%] lg:px-[8%]" >
          <div className=" lg:grid flex flex-col lg:grid-cols-3 lg:py-8  gap-6">
            <div className="box p-8 flex justify-center  flex-col bg-[#313131] cursor-pointer hover:shadow-md hover:shadow-violet-700 transition-all duration-300 rounded-xl">
              <div className="logo flex justify-center bg-[#313131]"><svg className='text-violet-700 bg-[#313131]' stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M10.799 4.652c-1.485 0.324-2.271 2.045-2.104 4.593 0.051 0.738 0.043 0.666 0.196 1.609 0.064 0.38 0.107 0.7 0.098 0.709-0.008 0.013-0.269 0.077-0.572 0.149-2.019 0.465-3.505 1.165-4.397 2.070-0.602 0.606-0.854 1.17-0.845 1.882 0.004 0.401 0.137 0.841 0.38 1.264 0.209 0.363 0.956 1.101 1.447 1.434 1.029 0.692 1.345 0.79 1.626 0.508 0.12-0.119 0.145-0.179 0.145-0.32 0-0.273-0.094-0.405-0.414-0.581-1.409-0.781-2.147-1.592-2.147-2.369 0-0.282 0.098-0.538 0.333-0.845 0.619-0.824 2.113-1.562 4.115-2.036 0.529-0.124 0.632-0.132 0.632-0.043 0 0.115 0.427 1.481 0.7 2.228l0.273 0.751-0.337 0.645c-0.184 0.354-0.448 0.892-0.585 1.2-1.959 4.316-2.284 7.743-0.867 9.152 0.333 0.333 0.606 0.487 1.054 0.602 1.033 0.265 2.399-0.132 3.931-1.144 0.534-0.354 0.653-0.487 0.653-0.721 0-0.282-0.307-0.555-0.581-0.512-0.077 0.013-0.376 0.179-0.662 0.367-0.632 0.422-1.34 0.773-1.853 0.926-0.525 0.154-1.093 0.162-1.417 0.021-0.995-0.44-1.225-2.215-0.606-4.678 0.29-1.17 0.956-2.928 1.558-4.128l0.239-0.482 0.132 0.299c0.248 0.572 1.212 2.437 1.588 3.073 2.079 3.534 4.422 6.125 6.501 7.184 1.473 0.751 2.689 0.683 3.517-0.201 0.61-0.645 0.909-1.584 0.96-2.992 0.081-2.425-0.709-5.579-2.254-8.96-0.205-0.453-0.41-0.862-0.448-0.905-0.094-0.102-0.333-0.171-0.495-0.137s-0.359 0.231-0.388 0.397c-0.034 0.158 0.004 0.265 0.384 1.088 1.059 2.284 1.801 4.683 2.087 6.744 0.094 0.679 0.111 2.151 0.026 2.604-0.085 0.457-0.252 0.931-0.431 1.204-0.286 0.44-0.615 0.619-1.157 0.615-1.609-0.004-4.145-2.215-6.399-5.571-1.037-1.55-1.993-3.3-2.732-5.011l-0.265-0.61 0.371-0.627c0.478-0.811 0.982-1.579 1.545-2.369l0.448-0.627h0.692c4.747 0 9.459 1.076 11.867 2.702 0.551 0.371 1.080 0.914 1.264 1.289 0.128 0.265 0.145 0.337 0.145 0.64-0.004 0.286-0.021 0.376-0.119 0.563-0.294 0.572-1.042 1.14-2.079 1.592-0.487 0.209-0.64 0.354-0.64 0.602 0 0.23 0.094 0.397 0.273 0.482 0.196 0.094 0.265 0.085 0.581-0.043 1.49-0.602 2.565-1.49 2.903-2.395 0.623-1.665-0.683-3.347-3.564-4.602-2.518-1.101-6.219-1.789-10.070-1.87l-0.423-0.009 0.482-0.555c0.555-0.645 1.78-1.87 2.305-2.309 1.246-1.050 2.361-1.716 3.321-1.989 0.474-0.137 1.059-0.132 1.362 0.004 0.41 0.184 0.696 0.598 0.854 1.238 0.098 0.388 0.098 1.575 0 2.147-0.111 0.632-0.098 0.743 0.073 0.913 0.124 0.124 0.175 0.145 0.354 0.145 0.38 0 0.478-0.141 0.593-0.832 0.060-0.354 0.081-0.692 0.081-1.387 0-0.811-0.013-0.965-0.098-1.302-0.269-1.063-0.926-1.797-1.806-2.006-2.040-0.478-5.161 1.485-8.264 5.208-0.256 0.303-0.495 0.602-0.534 0.653-0.064 0.094-0.107 0.102-0.726 0.141-0.359 0.021-1.016 0.081-1.464 0.132-1.187 0.137-1.093 0.149-1.161-0.158-0.179-0.858-0.239-1.46-0.243-2.39-0.004-1.007 0.030-1.306 0.213-1.865 0.196-0.593 0.529-0.995 0.952-1.135 0.205-0.073 0.709-0.064 1.007 0.013 0.499 0.132 1.204 0.508 1.844 0.99 0.38 0.286 0.512 0.337 0.713 0.269 0.23-0.073 0.367-0.265 0.367-0.504 0-0.179-0.017-0.213-0.205-0.393-0.265-0.256-1.033-0.768-1.498-0.999-0.879-0.44-1.648-0.581-2.339-0.431zM12.4 12.216c-0.004 0.021-0.282 0.44-0.61 0.935s-0.653 0.995-0.721 1.11l-0.124 0.209-0.102-0.277c-0.128-0.337-0.525-1.643-0.525-1.725 0-0.077 0.188-0.107 1.579-0.252 0.29-0.030 0.521-0.030 0.504 0zM15.649 14.854c-0.303 0.098-0.598 0.316-0.773 0.576-0.525 0.773-0.269 1.78 0.555 2.185 0.256 0.128 0.32 0.141 0.67 0.141s0.414-0.013 0.67-0.141c1.114-0.546 1.089-2.168-0.043-2.689-0.299-0.137-0.781-0.166-1.080-0.073z"></path></svg></div>
              <h2 className='text-white font-semibold text-2xl text-center bg-[#313131] py-3'>Front End Development</h2>
              <p className='text-gray-400  bg-[#313131]'>As a Front-end developer, I would love to develope any front-end application using Nextjs , React js and its libraries.</p>
            </div>
            <div className="box p-8 flex justify-center  flex-col bg-[#212121] cursor-pointer hover:shadow-md hover:shadow-violet-700 transition-all duration-300 rounded-xl">
              <div className="logo flex justify-center bg-[#212121]"><svg className='text-violet-700 bg-[#212121]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg></div>
              <h2 className='text-white font-semibold text-2xl text-center bg-[#212121] py-3'>MERN Development</h2>
              <p className='text-gray-400  bg-[#212121]'>I am very familiar with NodeJS, Express JS, and MongoDB/Mongoose. So I can build full-stack application with MERN.</p>
            </div>
            <div className="box p-8 flex justify-center  flex-col bg-[#313131] cursor-pointer hover:shadow-md hover:shadow-violet-700 transition-all duration-300 rounded-xl">
              <div className="logo flex justify-center bg-[#313131]"><svg className='text-violet-700 bg-[#313131]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.054 10.054 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 0 0 2.618.354l.142-.001a3.001 3.001 0 0 0 2.516-1.426 2.989 2.989 0 0 0 .153-2.879l-.199-.416a1.919 1.919 0 0 1 .094-1.912 2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0 0 22 12.14a9.935 9.935 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 0 1-.051.961.992.992 0 0 1-.844.479h-.112a8.061 8.061 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"></path><circle cx="7.5" cy="14.5" r="1.5"></circle><circle cx="7.5" cy="10.5" r="1.5"></circle><circle cx="10.5" cy="7.5" r="1.5"></circle><circle cx="14.5" cy="7.5" r="1.5"></circle></svg></div>
              <h2 className='text-white font-semibold text-2xl text-center bg-[#313131] py-3'>Web Design and Maintenance</h2>
              <p className='text-gray-400  bg-[#313131]'>I also provide Fully Responsive Static Website Design with Next js , React js ,Node js , Mongo Db HTML, CSS, Bootstrap, Tailwind, Matrial Ui , Chakra</p>
            </div>
            <div className="box p-9 flex justify-center  flex-col bg-[#212121] cursor-pointer hover:shadow-md hover:shadow-violet-700 transition-all duration-300 rounded-xl">
              <div className="logo flex justify-center bg-[#212121]"><svg className='text-violet-700 bg-[#212121]' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg></div>
              <h2 className='text-white font-semibold text-2xl text-center bg-[#212121] py-3'>Web Management</h2>
              <p className='text-gray-400  bg-[#212121]'>I will manage any kinds of website. Data Management, Component management, Bug Fixes and Service management and so on.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Project />
        </div>
        <div className='contact my-12'>
          <Form />
        </div>
      <Footer />


    </>
  )
}

export default Home
