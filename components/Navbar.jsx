import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({theme,setTheme}) => {

  const [navbar, setNavbar] = useState(false);
  const handleNavigationBar = () => {
    setNavbar(true);
  }

  return (
    <div className='dark:bg-black  fixed w-full h-20 z-[100] bg-[#F6F6F6]'>
      <div className='flex justify-between items-center w-full h-full 2xl:px-32'>
        <div className='flex justify-between items-center p-2 text-[#DC3545] text-lg'>
          <div className="pl-11">
            <Image src="/assets/new.png" width="90px" height="74px" alt=""/>
          </div>
          <div>
            <ul  className='hidden md:flex dark:text-[#999999] text-black'>
              <li className='ml-20 text-md hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/'>Home</Link>
              </li>
              <li className='ml-10 text-md  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#about'>About</Link>
              </li>
              <li className='ml-10 text-md  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#skills'>Skills</Link>
              </li>
              <li className='ml-10 text-md  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li className='ml-10 text-md  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Add Hamburger Icon to be displayed for medium screen size*/}
        <div className='flex justify-between items-center mr-5'>
          <div
            onClick = {handleNavigationBar}
            className='md:hidden shadow self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5 mr-5 cursor-pointer'
            >
            <AiOutlineMenu size={18} />
          </div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} type="button" aria-label="dark mode" className="shadow md:block self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5">
          {theme === 'dark' ? <svg aria-label="sun" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current text-gray-50"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
          : <svg aria-label="moon" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current text-gray-500"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>  }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
