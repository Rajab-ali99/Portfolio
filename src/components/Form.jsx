import React from 'react'
import Lines from "./Lines"
import { useForm } from 'react-hook-form';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeIn } from '../varients';
import { useState } from "react";
import { TbSend2 } from "react-icons/tb";
import Footer from './Footer';
import { toast } from 'react-toastify';
const Form = () => {
     
    
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "75f095bd-2cbc-4674-b4c4-9d41bd76b80a"); // replace with your key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      toast.success("Message sent successfully!",{
        position: "top-center",
        autoClose: 3000,
        
    });
      e.target.reset();
    } else {
      toast.error("Something went wrong. Please try again.",{
        position: "top-center",
        autoClose: 3000,
        
    });
    }
};
      

    return (
        <div>
            < Lines first={"Feel Free To Contact Me"} second={"Get In"} third={"Touch"} />
            <div className="container flex lg:flex-row flex-col   gap-9 pt-8">
                <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0 }}

                    className="left w-full lg:w-1/2">
                    <h1 className=' font-semibold text-2xl py-3 text-white'>Contact Me</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-9 mb-7">
                            <input
                                className="w-1/2 p-3 rounded-md shad input text-gray-400"
                                placeholder="Username"
                                name="username"
                                type="text"
                                required
                            />
                            <input
                                className="w-1/2 p-3 rounded-md shad input text-gray-400"
                                placeholder="Email"
                                name="email"
                                type="email"
                                required
                            />
                        </div>

                        <input
                            className="w-full p-3 rounded-md shad mb-7 input text-gray-400"
                            placeholder="Subject"
                            name="subject"
                            type="text"
                            required
                        />

                        <textarea
                            className="w-full p-3 rounded-md shad h-32 mb-3 input text-gray-400"
                            placeholder="Message"
                            name="message"
                            required
                        ></textarea>

                        <Button
                        
                            type="submit"
                            name={loading ? "Sending..." : "Send"}
                            icon={<TbSend2 className="bg-violet-700 icon" />}
                            disabled={loading}
                        />


                    </form>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}

                    className="right w-full lg:w-1/2">
                    <h1 className=' font-semibold text-2xl  py-3 text-white'>Contact Info</h1>
                    <div className='flex gap-6 my-6 items-center'>
                        <div className='text-white hover:text-violet-700'><svg class="text-white text-2xl cursor-pointer hover:text-violet-700" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path></svg></div>
                        <div className='text-violet-700 font-bold   ' >Rajab Ali</div>
                    </div>
                    <div className='flex gap-6 my-6 items-center'>
                        <div className='text-white hover:text-violet-700'><svg class="text-white text-2xl cursor-pointer hover:text-violet-700" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg></div>
                        <div className='text-violet-700 font-bold   ' >+923093060947</div>
                    </div>
                    <div className='flex gap-5 my-6 items-center'>
                        <div className='text-white hover:text-violet-700'><svg class="text-white text-3xl cursor-pointer hover:text-violet-700" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg></div>
                        <div className='text-violet-700 font-bold   ' >Rajabali2649@gmail.com</div>
                    </div>
                    <div className='flex gap-6 my-6 items-center'>
                        <div className='text-white hover:text-violet-700'><svg class="text-white text-2xl cursor-pointer hover:text-violet-700" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg></div>
                        <div className='text-violet-700 font-bold   ' >Faisalabad, Pakistan</div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className='text-gray-400 text-xl'>Social</div>
                        <div className='w-10 bg-gray-400 h-[2px] mx-4'></div>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/in/rajab-ali-636524375" target='_blank'>
                                <svg className=' hover:-translate-y-3 cursor-pointer text-gray-400 hover:text-violet-700 transition-all ease-out text-3xl duration-500' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                            </a>
                            <a href="https://github.com/Rajab-ali99" target='_blank'>
                                <svg className=' hover:-translate-y-3 cursor-pointer text-gray-400 hover:text-violet-700 transition-all ease-out text-3xl duration-500' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61555695417095" target='_blank'>
                                <svg className=' hover:-translate-y-3 cursor-pointer text-gray-400 hover:text-violet-700 transition-all ease-out text-3xl duration-500' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                            </a>
                            <a href="https://wa.me/923093060947" target='_blank'>
                                <svg className=' hover:-translate-y-3 cursor-pointer text-gray-400 hover:text-violet-700 transition-all ease-out text-3xl duration-500' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>

        </div>
    )
}

export default Form
