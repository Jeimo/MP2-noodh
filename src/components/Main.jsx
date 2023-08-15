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
        <div className='w-full h-[550px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-[#001524]'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <p className='text-sm'>Released: {movie?.release_date}</p>
                    <div className='my-4'>
                        <button className='border bg-teal-300 text-black border-gray-300 py-2 px-5 rounded'>Play</button>
                        <button className='border border-gray-300 py-2 px-5 ml-4 rounded'>Watch Later</button>
                    </div>
                    
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:[35%]'>{movie?.overview}</p>
                    <p>{movie?.genre_id}</p>
                </div>
            </div>
        </div>
    )
}

export default Main
