import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import axios from 'axios';



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [post,setPost]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    setPost(true);
    alert('Your message has been sent!');
  };

  useEffect(()=>{
    const data = {name,email,subject,message};
    if(post){
      axios.post('/api/mail', data).then((response) => {
        console.log("response:",response);
        console.log('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setPost(false);
      })
      .catch((error) => {
        console.log('fail', error);
      });
    }
  },[post])

  return (
    <div id='contact' className='dark:bg-black w-full lg:h-screen px-2 pb-5'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-red-500 dark:text-red-500 mt-10'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
      <div className="grid lg:grid-flow-col gap-8">
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div className='ml-14'>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src="/assets/navatar.png"
                  alt='/'
                  width="250px"
                  height="200px"
                />
              </div>
              <div>
                <h3 className='uppercase py-2 dark:text-[#999999]'>Saurabh Dabas</h3>
                <p className=' dark:text-[#999999]'>Full Stack Developer</p>
                <p className='py-3 dark:text-[#999999]'>
                  I am available for full-time positions and freelance.
                </p>
                <div className='py-3 dark:text-[#999999] flex flex-row items-center'>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src="/assets/location.gif"
                  alt='/'
                  width="35px"
                  height="30px"
                />
                  
                  <span className='mx-4 dark:text-[#999999]'>Calgary, Alberta, Canada</span>
                </div>                
              </div>
                <div>
                  <div className='flex items-center justify-between py-3'>
                    <a
                      aria-label='linkedin-icon'
                      href='https://www.linkedin.com/in/saurabh-dabas-a3617b15a/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn color="#DC3545"/>
                      </div>
                    </a>
                    <a
                      aria-label='github-icon'
                      href='https://github.com/saurabhdabas'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub color="#DC3545"/>
                      </div>
                    </a>
                    <a
                    aria-label='mail-icon' 
                    href="mailto:saurabhdabas7@gmail.com?subject=Important&body=Hey%20Saurabh%2C"
                    target='_blank'
                    rel='noreferrer'
                    >
                      <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail color="#DC3545"/>
                      </div>
                    </a>
                    <a
                    aria-label='resume-icon' 
                    href='https://resume.creddle.io/resume/41kxny6bo27'
                    target='_blank'
                    rel='noreferrer'
                    >
                      <div className='rounded-full shadow-md shadow-red-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill color="#DC3545"/>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className='col-span-3 w-full h-full shadow-md shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form
                  onSubmit={handleSubmit}
                >
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label htmlFor='name' className='uppercase text-sm py-2 dark:text-[#999999]'>Name</label>
                      <input
                        id='name'
                        className='border-2 rounded-lg p-3 flex border-gray-300 dark:text-white'
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor='email' className='uppercase text-sm py-2 dark:text-[#999999]'>Email</label>
                    <input
                      id='email'
                      className='border-2 rounded-lg p-3 flex border-gray-300 dark:text-white'
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor='subject' className='uppercase text-sm py-2 dark:text-[#999999]'>Subject</label>
                    <input
                      id='subject'
                      className='border-2 rounded-lg p-3 flex border-gray-300 dark:text-white'
                      type='text'
                      name='subject'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col py-2 '>
                    <label htmlFor='message' className='uppercase text-sm py-2 dark:text-[#999999]'>Message</label>
                    <textarea
                      id='message'
                      className='resize-none border-2 rounded-lg p-3 border-gray-300 dark:text-white'
                      rows='4'
                      name='message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button className='w-full p-4 text-gray-100 mt-4'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end'>
            <Link href='#home'>
              <div className='rounded-full shadow-md shadow-red-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce'>
                <HiOutlineChevronDoubleUp
                  className='text-[#DC3545]'
                  size={30}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
