import React from 'react'
import HomeHero from '../components/Landing/HomeHero'
import Watchlist from '../components/Watchlist'

const WatchlistPage = () => {
    return (
        <>
            <div className='relative'>
                <HomeHero /> 
                <div className='absolute top-0 justify-center bg-opacity-50 bg-[#001524] w-full h-full max-h-screen overflow-y-auto pt-[100px]'> 
                    <h1 className='text-3xl md:text-5xl font-bold mb-10 ml-10'>Watchlist</h1>
                    <Watchlist />
                </div>
            </div>
            
        </>
    )
}

export default WatchlistPage