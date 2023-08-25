import React from 'react'
import TVShows from '../components/TVShows'
import TVrequests from '../TVRequests'
import TVRow from '../components/TVRow'


const TVPage = () => {
    return (

        <div>
            <TVShows />
            <TVRow rowID='5' title='Airing Now' fetchURL={TVrequests.reqTVTrending} />
            <TVRow rowID='6' title='Top Rated' fetchURL={TVrequests.reqTVTopRated} />
            <TVRow rowID='7' title='Popular' fetchURL={TVrequests.reqTVPopular} />
        </div>
    )
}

export default TVPage