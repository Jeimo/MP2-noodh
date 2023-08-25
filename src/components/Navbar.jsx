import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { TbWorldWww } from 'react-icons/tb'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }


    return (
        <div className='flex items-certer justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'><h1 className='text-4xl font-bold cursor-pointer'>noödh.</h1></Link>
            <ul className='hidden lg:flex'>
                <Link to='/'><li className='hover:bg-[#ffecd1] hover:text-[#001524] rounded'>Home</li></Link>
                <Link to='/movies'><li className='hover:bg-[#ffecd1] hover:text-[#001524] rounded'>Movies</li></Link>
                <Link to='/tv'><li className='hover:bg-[#ffecd1] hover:text-[#001524] rounded'>TV Shows</li></Link>
                <Link to='/search'><li className='hover:bg-[#ffecd1] hover:text-[#001524] rounded'>Search</li></Link>
            </ul>
            <div className='hidden md:flex'>
                <Link to='/login'><button className='mr-4 px-4 border rounded h-10'>Sign In</button></Link>
                <Link to='/signup'><button className='bg-teal-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button></Link>
            </div>
            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleNav}>
                {nav ? <AiOutlineClose className='text-[#ffecd1]' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={nav ? 'absolute text-black left-0 top-0 w-full md:w-[400px] lg:w-[600px] h-screen bg-[#001524]/80 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'} onClick={handleNav}>
                <h1 className='text-4xl font-bold cursor-pointer pb-5 text-[#ffecd1]'>noödh.</h1>
                <ul>
                    <Link to='/'><li className='border-b py-7 hover:bg-[#ffecd1] hover:text-[#001524] rounded'>Home</li></Link>
                    <Link to='/movies'><li className='border-b py-7 hover:bg-[#ffecd1] hover:text-[#001524] rounded'>Movies</li></Link>
                    <Link to='/tv'><li className='border-b py-7 hover:bg-[#ffecd1] hover:text-[#001524] rounded'>TV Shows</li></Link>
                    <Link to='/search'><li className='border-b py-7 hover:bg-[#ffecd1] hover:text-[#001524] rounded mb-[150px]'>Search</li></Link>

                    <div className='flex py-8 justify-around'>
                        <Link to='/login'><button className='bg-[#ffecd1] text-[#001524] font-bold text-lg px-6 py-2 rounded cursor-pointer mb-5 hover:bg-teal-600'>Sign In</button></Link>
                        <Link to='/signup'><button className='bg-[#ffecd1] text-[#001524] font-bold text-lg px-6 py-2 rounded cursor-pointer hover:bg-teal-600'>Sign Up</button></Link>
                    </div>
                    <div className='flex justify-between my-3'>
                        <FaFacebook className='icon text-[#ffecd1]'/>
                        <FaTwitter className='icon text-[#ffecd1]'/>
                        <FaYoutube className='icon text-[#ffecd1]'/>
                        <FaInstagram className='icon text-[#ffecd1]'/>
                        <TbWorldWww className='icon text-[#ffecd1]'/>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar