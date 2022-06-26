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
        <div className='flex justify-between items-center p-2 text-[#DC3545] text-xl '>
          <span className="">
            <Image src="/../public/assets/s.png" width="50px" height="50px" alt=""/>
          </span>
          <div>
            <ul  className='hidden md:flex dark:text-white text-black'>
              <li className='ml-20 text-lg hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/'>Home</Link>
              </li>
              <li className='ml-10 text-lg  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#about'>About</Link>
              </li>
              <li className='ml-10 text-lg  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#skills'>Skills</Link>
              </li>
              <li className='ml-10 text-lg  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#projects'>Projects</Link>
              </li>
              <li className='ml-10 text-lg  hover:text-[#DC3545] p-2 rounded-lg'>
                <Link href='/#contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Add Hamburger Icon to be displayed for medium screen size*/}
        <div className='flex justify-between items-center mr-5'>
          <div
            style={{ color: `${linkColor}`}}
            onClick = {handleNavigationBar}
            className='md:hidden shadow self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5 mr-5 cursor-pointer'
            >
            <AiOutlineMenu size={18} />
          </div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} type="button" aria-label="dark mode" className="shadow md:block self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"><svg aria-label="moon" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="fill-current text-gray-700"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
