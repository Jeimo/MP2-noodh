import React from 'react'
import Row from '../components/Row'
import requests from '../Requests'
import Main from '../components/Main'

const Moviepage = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='Top Movies' fetchURL={requests.reqNowPlaying} />
            <Row rowID='2' title='Trending' fetchURL={requests.reqPopular} />
            <Row rowID='3' title='Critically Acclaimed' fetchURL={requests.reqTopRated} />
            <Row rowID='4' title='Fresh & Coming' fetchURL={requests.reqUpcoming} />
        </>
    )
}

export default Moviepage