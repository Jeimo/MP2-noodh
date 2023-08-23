import React, { useState } from 'react'
import ResultsCard from './ResultsCard';

const SearchBar = () => {
    const [query, setQuery] = useState ('');
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d14e45e196bd0fb3476b361d7e85d6c0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            if (!data.errors) {
                setResults(data.results)
            } else {
                setResults([]);
            }
        })
    };

    return (
        <>
            <div className='mt-[100px] text-center'>
                <input
                    type="text"
                    placeholder="Search movies"
                    className=" w-[600px] h-[40px] px-4 rounded focus:outline-none bg-transparent text-[#ffecd1] border"
                    value={query}
                    onChange={onChange}
                />
                <div>
                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultsCard movie={movie} />
                                </li>
                            ))}

                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchBar