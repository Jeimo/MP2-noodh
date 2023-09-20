import React, { useState } from 'react'
import HomeHero from '../components/Landing/HomeHero'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {user, logIn} = UserAuth();
    const navigate = useNavigate();

    const eventSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error);
            setError(error.message);
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
                    <p className='text-center border mb-3'>Sign-in</p>
                    {error ? <p className='mt-2 p-2 h-10 text-center bg-red-400 text-red-950'>User not found!</p> : null}
                    <div className='flex flex-col mb-4'>
                        <label>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            id='email'
                            className='border relative bg-transparent p-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                            id='password'
                            className='border relative bg-transparent p-2' />
                    </div>
                    <button className='w-full py-3 mt-8 bg-teal-600 hover:bg-teal-800 text-[#001524] font-semibold hover:text-[#ffecd1] relative'>Sign-in</button>
                    <p className='flex items-center'><input type='checkbox' className='mr-2' />Remember Me</p>
                    <p className='text-center mt-8'>Not a subscriber? <Link to='/signup'><span className='text-teal-600'>Sign-up</span></Link> now.</p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage