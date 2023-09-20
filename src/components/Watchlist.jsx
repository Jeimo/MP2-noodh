import React, {useState, useEffect} from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

const Watchlist = () => {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.addedToList);
        })
    },[user?.email])

    return (
        <>
            <div className='grid h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 ml-[20px] md:ml-[50px] items-center justify-center'>
                {movies.map((item, id) => (
                    <div className='rounded bg-teal-700/50 w-[350px] h-[400px] md:w-[380px] p-5 flex flex-col items-center justify-center'>
                        <img
                            className='h-[200px] rounded'
                            src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                            alt={item?.title} />
                        <h6 className='text-[#ffecd1] text-md text-center my-3'>{item?.title}</h6>
                        <button className='w-[100px] h-10 rounded bg-teal-600 text-[#ffecd1]'>Play</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Watchlist