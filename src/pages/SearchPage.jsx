import React from 'react'
import SearchMain from '../components/SearchMain';
import SearchBar from '../components/SearchBar';
import GenreRow from '../components/GenreRow';
import GenreRequests from '../GenreRequests';

const SearchPage = () => {

    return (
        <>
            <div className="relative">
                <SearchMain />
                <div className="absolute top-0 justify-center bg-opacity-50 bg-[#001524] w-full h-full max-h-screen overflow-y-auto">
                <SearchBar />
                {/* <GenreRow rowID='9' title='Action' fetchURL={GenreRequests.reqAction} />
                <GenreRow  rowID='10' title='Adventure' fetchURL={GenreRequests.reqAdventure} />
                <GenreRow  rowID='11' title='Animation' fetchURL={GenreRequests.reqAnimation} />
                <GenreRow  rowID='12' title='Comedy' fetchURL={GenreRequests.reqComedy} /> */}
                </div>
                
            </div>
        </>
    )
}

export default SearchPage