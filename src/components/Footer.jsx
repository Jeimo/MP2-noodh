import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#001524] text-[#ffecd1] relative">
            <div className='md:flex md:justify-between md:items-center px-2 pt-2 bg-[#001524]'>
                <h1 className='lg:text-4xl text-3xl w-full md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>Questions? </span>Send us an email.</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:pl-[100px] lg:ml-[200px]'>
                    <input type='email'
                            placeholder='Enter your name here'
                            className='text-[#ffecd1] bg-transparent border w-full  lg:w-80 mr-5 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                    <input type='textarea'
                            placeholder='Enter your concern here'
                            className='text-[#ffecd1] bg-transparent border w-full lg:w-80 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                    <button className='bg-teal-600 hover:bg-[#ffecd1] text-[#ffecd1] hover:text-[#001524] duration-300 px-5 py-2.5 mt-3 rounded-md md:w-full lg:w-[100px] h-[48px]'>Send</button>
                </div>
                
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 py-10 border-b'>
                <h1 className='text-5xl cursor-pointer font-semibold'>noödh.</h1>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <Link to='/' className='pb-5 text-xl hover:text-teal-600'>Home</Link>
                        <Link to='/movies' className='pb-5 text-xl hover:text-teal-600'>Movies</Link>
                        <Link to='/tv' className='pb-5 text-xl hover:text-teal-600'>TV Shows</Link>
                    </div>
                    <div className='flex flex-col'>
                    <Link to='/search' className='pb-5 text-xl hover:text-teal-600'>Search</Link>
                        <Link to='/' className='pb-5 text-xl hover:text-teal-600'>Browse by Genre</Link>
                        <Link to='/' className='pb-5 text-xl hover:text-teal-600'>Careers</Link>
                    </div>
                </div>
            </div>
            <div className='my-4 text-center flex justify-between'>
                <div className='ml-1'>
                    &copy;{new Date().getFullYear()} noödh | All rights reserved
                </div>
                <div className='flex my-3 space-x-4 mr-1'>
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