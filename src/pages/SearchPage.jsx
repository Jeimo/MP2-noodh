import React from 'react'
import SearchMain from '../components/Search/SearchMain';
import SearchBar from '../components/Search/SearchBar';

const SearchPage = () => {

    return (
        <>
            <div className="relative">
                <SearchMain />
                <div className="absolute top-0 justify-center bg-opacity-50 bg-[#001524] w-full h-full max-h-screen overflow-y-auto">
                    <h1 className='pt-[200px] text-5xl text-center font-extrabold mb-5 tracking-[4px]'>Watch a wide variety of movies and tv shows</h1>
                    <p className='text-xl text-center font-semibold mb-3 tracking-wider'>Look for your favorites shows anytime, anywhere.</p>
                <SearchBar />
                </div>
                
            </div>
        </>
    )
}

export default SearchPage