import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState ([])
    const [like, setLike] = useState(false)

    useEffect (() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

        console.log(movies);
    return (
        <>
            <h2 className='font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <div id={'slider'}>
                    {movies.map((item, id) => (
                        <div className='w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
                                <p className='white-space-normal text-md md:text-lg font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                                <p>
                                    {like ? <FaHeart className='absolute top-4 left-4' /> : <FaRegHeart className='absolute top-4 left-4' size={20}/> }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Row