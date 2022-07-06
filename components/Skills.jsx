import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='dark:bg-black w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-red-500 dark:text-red-500'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/html.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>HTML 5</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/css.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>CSS</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/js.webp' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Javascript</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/typescript.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Typescript</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/react.jpg' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>React</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/tailwind.jpeg' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Tailwind</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/firebase.webp' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Firebase</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/mui.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Material UI</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/node.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Node.Js</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/psql.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>PostgreSQL</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/next.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Next.Js</p>
            </div>
          </div>
          <div className='p-6 shadow-md shadow-gray-400  rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 lg:gap-6 items-center justify-center '>
              <div className='flex flex-col items-center justify-center'>
              <Image src='/assets/jest.png' width='64' height='64' alt='/'/>
              </div>
              <p className='text-center'>Jest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
