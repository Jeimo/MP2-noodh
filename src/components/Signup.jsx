import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='absolute w-full top-2 flex justify-center items-center h-full'>
            <form
                className='max-w-[400px] w-full mx-auto bg-[#001524] rounded-xl border p-8'>
                <h2 className='text-4xl font-bold text-center py-4'>noödh.</h2>
                <p className='text-center border'>Sign-up</p>
                <div className='flex justify-between py-5'>
                    <p className='border shadow-md shadow-teal-400 hover:shadow-lg hover:shadow-teal-400 px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                    <p className='border shadow-md shadow-teal-400 hover:shadow-lg hover:shadow-teal-400 px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Email</label>
                    <input 
                        type='text'
                        id='email'
                        className='border relative bg-transparent p-2' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Username</label>
                    <input 
                        type='text'
                        id='username'
                        className='border relative bg-transparent p-2' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Password</label>
                    <input
                        type='password'
                        id='password'
                        className='border relative bg-transparent p-2' />
                </div>
                <div className='flex flex-col'>
                    <label>Confirm Password</label>
                    <input 
                        type='password'
                        id='username'
                        className='border relative bg-transparent p-2' />
                </div>
                <Link to='/signin'><button className='w-full py-3 mt-8 bg-teal-600 hover:bg-teal-800 text-[#001524] font-semibold hover:text-[#ffecd1] relative'>Sign-up</button></Link>
                <p className='flex items-center'><input type='checkbox' className='mr-2' />Remember Me</p>
                <p className='text-center mt-8'>Already signed-up? <a href='#'a>Log-in</a> now.</p>
            </form>
        </div>
    )
}

export default Signup