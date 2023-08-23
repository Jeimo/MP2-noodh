const key = 'd14e45e196bd0fb3476b361d7e85d6c0'

const requests = {
    reqPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    reqTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    reqUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    reqNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    reqMovies: `https://api.themoviedb.org/3/search/movie?api_key=${key}`,
}

export default requests