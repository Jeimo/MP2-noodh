import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
    return (
        <>
            <Main />
            <Row title='Now Playing' fetchURL={requests.reqNowPlaying} />
            <Row title='Trending' fetchURL={requests.reqPopular} />
            <Row title='Critically Acclaimed' fetchURL={requests.reqTopRated} />
            <Row title='Fresh & Coming' fetchURL={requests.reqUpcoming} />
        </>
    )
}

export default Home