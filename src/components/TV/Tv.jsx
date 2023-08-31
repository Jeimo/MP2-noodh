import React, { useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Tv = ({item}) => {
    const [like, setLike] = useState(false);
    const [add, setAdd] = useState(false);
    const {user} = UserAuth();

    const TvID = doc(db, 'users', `${user?.email}`)

    const addedList = async () => {
        if(user?.email) {
            setLike(!like);
            setAdd(true);
            await updateDoc(TvID, {
                addedToList: arrayUnion ({
                    id  : item.id,
                    title :  item.name,
                    img : item.backdrop_path
                })
            })
        } else {
            alert('Please log in to add this movie/tvshow to your watchlist!!!');
        }
    }

    return (
        <div class='w-[360px] sm:w-[400px] md:w-[440px] lg:w-[480px] inline-block cursor-pointer relative p-2 mx-2'>
            <div class="p-4 h-auto rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.name} />
                <div className='absolute top-0 left-[-5%] w-full h-full hover:bg-[#001524]/80 opacity-0 hover:opacity-100 rounded-xl'>
                    <p className='relative text-xl md:text-lg font-semibold flex justify-center h-full items-center text-start text-[#ffecd1] space-x-4.5'>{item.name}</p>
                    <div className='flex justify-around'>
                        <button className='absolute top-[70%] rounded bg-teal-600 mr-[200px] w-[100px] h-[40px] hover:bg-transparent hover:border duration-300 text-[#001524] hover:text-[#ffecd1]'>Play</button> 
                        <div onClick={addedList}>
                            { like ? (
                            <button
                                className='absolute top-[70%] rounded border ml-[40px] md:ml-[70px] w-[120px] h-[40px] bg-[#ffecd1] text-[#001524] border-none duration-300'>Added to List
                            </button>
                            ) : (
                            <button
                                className='absolute top-[70%] rounded border ml-[50px] md:ml-[70px] w-[100px] h-[40px] hover:bg-teal-600 hover:border-none duration-300 hover:text-[#001524]'>Add to List
                            </button>
                            )}
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Tv