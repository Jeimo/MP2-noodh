import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TVrequests from '../TVRequests'


const TVShows = () => {
    const [tv, setTv] = useState([])

    const show = tv[Math.floor(Math.random() * tv.length)]

    useEffect(() => {
        axios.get(TVrequests.reqTVTrending).then((response) => {
            setTv(response.data.results)
        })
    }, [])
    // console.log(show);

    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-full bg-gradient-to-r from-[#001524]'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`} alt={show?.name} />
                <div className='absolute w-full top-[40%] pt-10 p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{show?.name}</h1>
                    <p className='text-sm pt-3'>First Air: {show?.first_air_date}</p>
                    <div className='my-4'>
                        <button className='bg-teal-600 text-black border-gray-300 py-2 px-5 rounded'>Play</button>
                        <button className='border border-gray-300 py-2 px-5 ml-4 rounded'>Watch Later</button>
                    </div>
                    
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:[35%]'>{show?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default TVShows