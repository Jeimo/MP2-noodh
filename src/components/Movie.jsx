import React from 'react'

const Movie = ({item}) => {

    return (
        <div class='w-[360px] sm:w-[400px] md:w-[440px] lg:w-[480px] inline-block cursor-pointer relative p-2 mx-2'>
            <div class="p-4 h-auto rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img className='w-full h-auto rounded' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
                <div className='absolute top-0 left-[-5%] w-full h-full hover:bg-[#001524]/80 opacity-0 hover:opacity-100 rounded-xl'>
                    <p className='relative text-xl md:text-lg font-semibold flex justify-center h-full items-center text-start text-[#ffecd1] space-x-4.5'>{item.title}</p>
                    <div className='flex justify-center'>
                        <button className='absolute top-[70%] rounded bg-teal-600 mr-[200px] w-[100px] h-[40px] hover:bg-transparent hover:border duration-300 text-[#001524] hover:text-[#ffecd1]'>Play</button> 
                        <button className='absolute top-[70%] rounded border ml-[200px] w-[100px] h-[40px] hover:bg-teal-600 hover:border-none duration-300 hover:text-[#001524]'>Add to List</button> 
                    </div>   
                </div>
                
            </div>
        </div>

    )
}

export default Movie