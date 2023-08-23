import React from 'react'
import TVShows from '../components/TVShows'
import TVrequests from '../TVRequests'
import TVRow from '../components/TVRow'


const TVPage = () => {
    return (

        <div>
            <TVShows />
            <TVRow rowID='5' title='Airing Now' fetchURL={TVrequests.reqTVTrending} />
            <TVRow rowID='6' title='Ongoing Shows' fetchURL={TVrequests.reqOnTheAir} />
            <TVRow rowID='7' title='Popular' fetchURL={TVrequests.reqTVPopular} />
            <TVRow rowID='8' title='Upcoming' fetchURL={TVrequests.reqAiring} />
        </div>
    )
}

export default TVPage