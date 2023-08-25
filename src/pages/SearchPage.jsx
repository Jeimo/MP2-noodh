import React from 'react'
import SearchMain from '../components/SearchMain';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {

    return (
        <>
            <div className="relative">
                <SearchMain />
                <div className="absolute top-0 justify-center bg-opacity-50 bg-[#001524] w-full h-full max-h-screen overflow-y-auto">
                <SearchBar />
                </div>
                
            </div>
        </>
    )
}

export default SearchPage