import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
const Main = () => {

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#DC3545]'>Saurabh 👋🏼</span>
          </h1>
          <h1 className='py-2 text-gray-700 '>
          <Typewriter onInit={(typewriter)=>{
              typewriter.typeString("A Full Stack Developer").start()
            }}/>
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I'm passionate about building beautiful interfaces and accessible applications. Welcome to my personal slice of the internet. I'm glad you're here!
          </p>
          <div className='flex items-center justify-between max-w-[330px] mx-auto py-4 '>
            <a
              href='https://www.linkedin.com/in/saurabh-dabas-a3617b15a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <FaLinkedinIn color='#DC3545'/>
              </div>
            </a>
            <a
              href='https://github.com/saurabhdabas'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub color='#DC3545'/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-md shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 border-red-500'>
                <AiOutlineMail color='#DC3545'/>
              </div>
            </Link>
            <Link href='https://resume.creddle.io/resume/41kxny6bo27'>
              <div className='rounded-full shadow-md shadow-red-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill color='#DC3545'/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;