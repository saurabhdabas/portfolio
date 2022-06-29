import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
const Main = () => {

  return (
    <div id='home' className='dark:bg-black  w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
        <div>
          <h2 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-red-600'>Saurabh 👋🏼</span>
          </h2>
          <h2 className='py-2 text-gray-700 '>
          <Typewriter onInit={(typewriter)=>{
              typewriter.typeString("A Full Stack Developer").start()
            }}/>
          </h2>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I&apos;m passionate about building beautiful interfaces and accessible applications. Welcome to my personal slice of the internet. I&apos;m glad you&apos;re here!
          </p>
          <div className='flex items-center justify-between max-w-[330px] mx-auto py-4 '>
            <a
              aria-label='linkedin-icon'
              href='https://www.linkedin.com/in/saurabh-dabas-a3617b15a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <FaLinkedinIn color='#DC3545'/>
              </div>
            </a>
            <a
              aria-label='github-icon'
              href='https://github.com/saurabhdabas'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub color='#DC3545'/>
              </div>
            </a>
            <a
            aria-label='mail-icon'
            href="mailto:saurabhdabas7@gmail.com?subject=Important&body=Hey%20Saurabh%2C"
            target='_blank'
            rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail color='#DC3545'/>
              </div>
            </a>
            <a
            aria-label='resume-icon'
            href='https://resume.creddle.io/resume/41kxny6bo27'
            target='_blank'
            rel='noreferrer'
            >
              <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill color='#DC3545'/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;