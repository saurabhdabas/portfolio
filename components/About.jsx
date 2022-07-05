import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <div id='about' className='dark:bg-black w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-12'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#DC3545] dark:text-[#DC3545]'>
            About me
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 text-justify'>
          Hello! I&apos;m Saurabh, a full stack developer based in Edmonton,CA 🇨🇦.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
          I have a bachelors in technology and a certificate in project management.
          I left my full time job as Assistant Store Manager at Shoppers drug mart to pursue Diploma of Education in Full Stack Web Development at Lighthouse labs.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
          I have experience designing and developing applications for the web, from simple landing pages to complex web applications.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
          I aspire toward a career that will allow me to build inclusive and accessible applications through carefully crafted code and user-centric design that result in engaging experiences.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
          When I&apos;m not glued to my computer screen, I am probably listening to music or working out.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-white'>
          <Image src='/assets/pic.jpg' className='rounded-xl' alt='/' width='350px' height='380px' />
        </div>
      </div>
    </div>
  );
};

export default About;