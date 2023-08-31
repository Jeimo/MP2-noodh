import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='absolute w-full top-[20%] md:top-[30%] pt-10 p-4 md:p-8'>
            <div>
                <h1 className='text-5xl text-center font-extrabold mb-5 tracking-[4px]'>Unlimited movies, tv shows, and more</h1>
                <p className='text-xl text-center font-semibold mb-3 tracking-wider'>Watch anywhere. Cancel anytime.</p>
                <p className='text-xl text-center font-semibold mb-3 tracking-wider'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='flex flex-col items-center justify-center mt-10'>
                    <NavLink to='/signup'><button className='bg-teal-600 rounded-md w-[200px] h-12 hover:bg-[#ffecd1] hover:text-[#001524] duration-300'>Get Started</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero