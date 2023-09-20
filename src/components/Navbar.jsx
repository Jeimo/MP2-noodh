import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { TbWorldWww } from 'react-icons/tb'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate();
    // console.log(user.email)

    const handleLogout = async () => {
        try{
            await logOut();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const MenuLink = [
        {name: 'Home', href: '/'},
        {name: 'Movies', href: '/movies'},
        {name: 'TV Shows', href: '/tv'},
    ];

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }


    return (
        <div className='flex items-certer justify-between p-4 z-[100] w-full absolute'>
            <NavLink to='/'><h1 className='text-4xl font-bold cursor-pointer ml-[20px] lg:ml-[150px]' onClick={handleNav}>noödh.</h1></NavLink>
            <ul className='hidden lg:flex ml-20'>
                {
                    MenuLink.map((menu, i) => (
                        <NavLink key={i}
                                to={menu.href}
                                className={({isActive}) => {
                                    return ('px-3 py-2 mx-8 mb-10 rounded text-md font-medium no-underline' + (!isActive ? 'text-gray-300 hover:bg-[#ffecd1] hover:text-[#001524]' : ' text-[#001524] bg-teal-400')
                                    );
                                }}
                                >
                            <span>{menu.name}</span>
                        </NavLink>
                    ))
                }
            </ul>
            {/* Ternary for signin/signup */}
            { user?.email? (
            <div className='hidden md:flex mr-[20px] lg:mr-[150px]'>
                <NavLink to='/watchlist'><button className='mr-4 px-4 border rounded h-10'>Watchlist</button></NavLink>
                <button
                    onClick={handleLogout}
                    className='bg-teal-600 h-10 px-6 py-2 rounded cursor-pointer'>Logout</button>
            </div> ) : (
            <div className='hidden md:flex mr-[20px] lg:mr-[150px]'>
                <NavLink to='/login'><button className='mr-4 px-4 border rounded h-10'>Sign In</button></NavLink>
                <NavLink to='/signup'><button className='bg-teal-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button></NavLink>
            </div> )}

            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleNav}>
                {nav ? <AiOutlineClose className='text-[#ffecd1]' size={20} /> : <AiOutlineMenu className='mr-[20px]' size={20} />}
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={nav ? 'absolute text-black left-0 top-0 w-full md:w-[400px] lg:w-[600px] h-screen bg-[#001524]/80 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'} onClick={handleNav}>
                <h1 className='text-4xl font-bold cursor-pointer pb-5 text-[#ffecd1]'>noödh.</h1>
                <ul className='flex flex-col text-center h-screen my-8'>
                    {
                        MenuLink.map((menu, i) => (
                            <NavLink key={i}
                                    to={menu.href}
                                    className={({isActive}) => {
                                        return ('px-3 py-2 mx-5 my-5 rounded-md text-md text-[#ffecd1] font-medium h-[70px] pt-[20px] no-underline' + (!isActive ? 'text-gray-300 hover:bg-[#ffecd1] hover:text-[#001524]' : ' text-[#001524] bg-teal-400')
                                        );
                                    }}
                                    >
                                <span>{menu.name}</span>
                            </NavLink>
                        ))
                    }
                </ul>
                {/* Ternary for signin/signup */}
                { user?.email? (
                <div className='flex py-8 justify-around'>
                    <NavLink to='/watchlist'><button className='bg-teal-600 text-[#001524] font-semibold text-lg px-6 py-2 rounded cursor-pointer mb-5 hover:bg-[#ffecd1] '>Watchlist</button></NavLink>
                    <button 
                        onClick={handleLogout}
                        className='bg-teal-600 text-[#001524] font-semibold text-lg h-11 px-6 py-2 rounded cursor-pointer hover:bg-[#ffecd1] '>Logout</button>
                </div> ) : (
                <div className='flex py-8 justify-around'>
                    <NavLink to='/login'><button className='bg-teal-600 text-[#001524] font-semibold text-lg px-6 py-2 rounded cursor-pointer mb-5 hover:bg-[#ffecd1] '>Sign In</button></NavLink>
                    <NavLink to='/signup'><button
                        className='bg-teal-600 text-[#001524] font-semibold text-lg px-6 py-2 rounded cursor-pointer hover:bg-[#ffecd1] '>Sign Up</button></NavLink>
                </div> )}
                <div className='flex justify-between my-3'>
                    <FaFacebook className='icon text-[#ffecd1]'/>
                    <FaTwitter className='icon text-[#ffecd1]'/>
                    <FaYoutube className='icon text-[#ffecd1]'/>
                    <FaInstagram className='icon text-[#ffecd1]'/>
                    <TbWorldWww className='icon text-[#ffecd1]'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar