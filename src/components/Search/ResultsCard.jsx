import React from 'react'
import { TERipple } from 'tw-elements-react';

const ResultsCard = ({movie}) => {
    return (
        <div className='flex items-center justify-center my-10'>
            <div className="result block rounded-lg bg-teal-700/50 w-[400px] h-[500px]">
                <TERipple>
                    <div className='mt-5'>
                        {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title}`} className='h-[400px] w-[300px]' />
                        ) : (
                            <div className='filler-poster'></div>
                        )}
                    </div>
                </TERipple>
                <div className="p-1">
                    <h5
                        className="mb-2 sm:text:sm lg:text-md font-medium leading-tight text-[#ffecd1]">
                        {movie.title}
                    </h5>
                    <p className="mb-4 text-[#ffecd1]">
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-" }
                    </p>    
                </div>
            </div>
        </div>
    )
}

export default ResultsCard