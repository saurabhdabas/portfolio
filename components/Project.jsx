import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-red-500 to-red-800'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width="400px" height="250px" /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center dark:text-white'>{tech}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github</p>
        </Link>
    </div>
 </div>
  )
}

export default Project;
