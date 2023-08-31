import React, { useState } from 'react'
import HomeHero from '../components/Landing/HomeHero'
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const eventSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <HomeHero />
            <div className='absolute w-full top-2 flex justify-center items-center h-full'>
                <form
                    onSubmit={eventSubmit}
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
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            id='email'
                            autocomplete='email'
                            className='border relative bg-transparent p-2' />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            id='password'
                            autocomplete='current-password'
                            className='border relative bg-transparent p-2' />
                    </div>
                    <button className='w-full py-3 mt-8 bg-teal-600 hover:bg-teal-800 text-[#001524] font-semibold hover:text-[#ffecd1] relative'>Sign-up</button>
                    <p className='flex items-center'><input type='checkbox' className='mr-2' />Remember Me</p>
                    <p className='text-center mt-8'>Already signed-up? <Link to='/login'><span className='text-teal-600'>Log-in</span></Link> now.</p>
                </form>
            </div>
        </div>
    )
}

export default SignupPage