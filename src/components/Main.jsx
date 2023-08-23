import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'


const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.reqPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
console.log(movies);

    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-full bg-gradient-to-r from-[#001524]'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[40%] pt-10 p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <p className='text-sm pt-3'>Released: {movie?.release_date}</p>
                    <div className='my-4'>
                        <button className='bg-teal-600 text-black border-gray-300 py-2 px-5 rounded'>Play</button>
                        <button className='border border-gray-300 py-2 px-5 ml-4 rounded'>Watch Later</button>
                    </div>
                    
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:[35%]'>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Main
