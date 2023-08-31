import React from 'react'

const Hero = () => {
    return (
        <div className='absolute w-full top-[40%] pt-10 p-4 md:p-8'>
            <div>
                <h1 className='text-5xl text-center font-extrabold mb-5 tracking-[4px]'>Unlimited movies, tv shows, and more</h1>
                <p className='text-xl text-center font-semibold mb-3 tracking-wider'>Watch anywhere. Cancel anytime.</p>
                <p className='text-xl text-center font-semibold mb-3 tracking-wider'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='flex flex-row items-center justify-center m-auto w-[500px]'>
                    <form className='items-center max-w-[700px] mx-auto w-80 h-12 border p-1 rounded-md text-[#ffecd1] bg-transparent'>
                        <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none pl-2 pt-2' type='email' placeholder='Email address' />
                    </form>
                    <button className='bg-teal-600 rounded w-[150px] h-12 hover:bg-[#ffecd1] hover:text-[#001524] duration-300'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero