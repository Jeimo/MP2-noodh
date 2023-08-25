const key = 'd14e45e196bd0fb3476b361d7e85d6c0'

const TVrequests = {
    reqTVPopular: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`,
    reqTVTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US`,
    reqTVTrending: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`,
}

export default TVrequests