import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState ([])
    // Fetching movies and setting them to state.
    useEffect (() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        let slider =document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider =document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    // console.log(movies);
    return (
        <>
            <h2 className='font-bold md:text-xl p-4 relative lg:px-[100px]'>{title}</h2>
            <div className='relative flex items-center group lg:px-[100px]'>
                <MdChevronLeft
                onClick={slideLeft} className='bg-white text-[#001524] left-0 rounded-full absolute opacity-50 hover:opacity100 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight
                onClick={slideRight} className='bg-white text-[#001524] right-0 rounded-full absolute opacity-50 hover:opacity100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </>
    )
}

export default Row