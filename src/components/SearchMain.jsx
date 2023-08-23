import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchMain = () => {
    const [movies, setMovies] = useState([1, 2, 3, 4])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=d14e45e196bd0fb3476b361d7e85d6c0').then((response) => {
            setMovies(response.data.results)
        })
    }, [])
console.log(movies);

    return (
        <>
            <div className='w-full h-screen'>
                <div className='w-full h-full'>
                    <div className='absolute w-full h-full bg-[#001524] opacity-60'></div>
                    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                    <div className='absolute w-full top-[40%] pt-10 p-4 md:p-8'>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchMain