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

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div class='w-[360px] sm:w-[400px] md:w-[440px] lg:w-[480px] inline-block cursor-pointer relative p-2 mx-2'>
            <div class="p-4 h-auto rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.name} />
                <div className='absolute top-0 left-[-5%] w-full h-full hover:bg-[#001524]/80 opacity-0 hover:opacity-100 rounded-xl'>
                    <p className='relative text-xl md:text-lg font-semibold flex justify-center h-full items-center text-start text-[#ffecd1] space-x-4.5'>{item.name}</p>
                    <div className='flex justify-around'>
                    <button
                            onClick={() => setShowModal(true)}
                            className='absolute top-[70%] rounded bg-teal-600 mr-[200px] w-[100px] h-[40px] hover:bg-transparent hover:border duration-300 text-[#001524] hover:text-[#ffecd1]'>Info</button>
                            {showModal ? (
                            <>
                            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative my-6 mx-auto w-[350px] md:w-[800px]">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#ffecd1] outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-800 rounded-t">
                                        <h3 className="text-3xl text-[#001524] font-semibold">{item?.name}</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                        </span>
                                    </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto h-auto">
                                    <p className="my-2 text-[#001524] text-lg whitespace-break-spaces">
                                        Overview:<br/>
                                        {item?.overview}
                                    </p>
                                    <p className="my-4 text-[#001524] text-lg">
                                        Date released:<br/>
                                        {item?.release_date}
                                    </p>
                                    <p className="my-4 text-[#001524] text-lg">
                                        Rating:<br/>
                                        {item?.vote_average}
                                    </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-teal-600 text-[#ffecd1] hover:text-[#001524] active:bg-emerald-600 text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-teal-600 text-[#ffecd1] hover:text-[#001524] active:bg-emerald-600 text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Play
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null} 
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