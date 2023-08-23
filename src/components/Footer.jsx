import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#001524] text-[#ffecd1] relative">
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#001524] pt-2'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>Questions?  </span>Send us an email.</h1>
                <div>
                    <input type='email' placeholder='Enter your name here' className='text-gray-800 bg-transparent border sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                    <input type='textarea' placeholder='Enter your concern here' className='text-gray-800 bg-transparent border sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                    <button className='bg-teal-600 hover:bg-[#001524] text-[#ffecd1] hover:text-[#ffecd1] duration-300 px-5 py-2.5 rounded-md md:w-auto sm:w-[300px]'>Send</button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:px-8 px-5 py-10 border-b'>
                <h1 className='text-5xl cursor-pointer my-auto ml-5 font-semibold'>noödh.</h1>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <Link to='/' className='pb-5 text-xl'>Home</Link>
                        <Link to='/movies' className='pb-5 text-xl'>Movies</Link>
                        <Link to='/tvshows' className='pb-5 text-xl'>TV Shows</Link>
                    </div>
                    <div className='flex flex-col'>
                    <Link to='/' className='pb-5 text-xl'>Search</Link>
                        <Link to='/' className='pb-5 text-xl'>Browse by Genre</Link>
                        <Link to='/' className='pb-5 text-xl'>Careers</Link>
                    </div>
                </div>
            </div>
            <div className='my-4 text-center flex justify-between px-10'>
                <div className='ml-3 pt-4'>
                    &copy;{new Date().getFullYear()} noödh | All rights reserved
                </div>
                <div className='flex my-3 space-x-4'>
                    <FaFacebook className='icon text-[#ffecd1]'/>
                    <FaTwitter className='icon text-[#ffecd1]'/>
                    <FaYoutube className='icon text-[#ffecd1]'/>
                    <FaInstagram className='icon text-[#ffecd1]'/>
                    <TbWorldWww className='icon text-[#ffecd1]'/>
                </div>
            </div>    
        </footer>
    );
};

export default Footer;