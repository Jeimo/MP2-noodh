import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-certer justify-between p-4 z-[100] absolute w-full'>
            <h1 className='text-4xl font-bold cursor-pointer'>noödh.</h1>
            <div>
                <button className='pr-4'>Sign In</button>
                <button className='bg-teal-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar