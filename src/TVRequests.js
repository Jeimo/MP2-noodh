const key = 'd14e45e196bd0fb3476b361d7e85d6c0'

const TVrequests = {
    reqAiring: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}`,
    reqOnTheAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}`,
    reqTVPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}`,
    reqTVTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`,
    reqTVTrending: `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`,
}

export default TVrequests