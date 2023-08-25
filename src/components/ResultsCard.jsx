import React from 'react'

const ResultsCard = ({movie}) => {
    return (
        <>
            <div className='result my-5 flex flex-col items-center mb-10'>
                <div className='wrapper justify-start sm:w-[300px] md:w-[400px]'>
                    {movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={`${movie.title}`} />
                    ) : (
                        <div className='filler-poster'></div>
                    )}
                </div>
                <div className='info bg-[#ffecd1] rounded-b'>
                    <div className='header'>
                        <h3 className='text-xl text-[#001524] text-center sm:w-[300px] md:w-[400px]'>{movie.title}</h3>
                        <h4 className='text-xl text-[#001524] text-center sm:w-[300px] md:w-[400px]'>{movie.release_date ? movie.release_date.substring(0, 4) : "-" }</h4>
                    </div>
                    <div className='flex border-x'>
                        <button className='absolute rounded bg-teal-600 text-[#001524] w-[100px] h-[40px] md:ml-[80px] md:mr-[25px] mt-2 mb-6 hover:text-[#ffecd1] hover:bg-transparent hover:border duration-300'>Play</button> 
                    </div>
                    <div>
                        <button className='absolute rounded border w-[100px] h-[40px] md:ml-[25px] md:mr-[50px] mt-2 mb-6 sm:ml-[50px] hover:bg-teal-600 hover:border-none duration-300'>Add to List</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResultsCard