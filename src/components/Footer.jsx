import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#001524] text-[#ffecd1] relative mt-5 border-t">
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 py-10'>
                <h1 className='text-5xl cursor-pointer font-semibold ml-[20px] md:ml-[150px]'>noödh.</h1>
                <div>
                    <div className='flex mt-5'>
                        <Link to='/' className='pb-5 px-[70px] w-[130] text-xl hover:text-teal-600'>Home</Link>
                        <Link to='/movies' className='pb-5 px-[70px] w-[130] text-xl hover:text-teal-600'>Movies</Link>
                        <Link to='/tv' className='pb-5 px-[50px] w-[130] text-xl hover:text-teal-600'>TV Shows</Link>
                    </div>
                </div>
            </div>
            <div className='md:flex md:justify-between md:items-center px-2 pt-2 bg-[#001524] mb-5'>
                <h1 className='lg:text-4xl text-3xl w-full md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 ml-[20px] md:ml-[150px]'><span className='text-teal-400'>Questions? </span>Send us an email.</h1>
                <div className='w-[800px]'>
                    <input type='textarea'
                            placeholder='Enter your concern here'
                            className='md:ml-[100px] w-[450px] md:w-[500px] h-[48px] sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 ml-5' />
                    <button className='bg-teal-600 hover:bg-[#ffecd1] text-[#ffecd1] hover:text-[#001524] duration-300 px-5 py-2.5 mt-3 rounded-md h-[48px]'>Send</button>
                </div>
                
            </div>
            
            <div className='my-4 text-center flex justify-between border-t mx-[20px] md:mx-[100px]'>
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