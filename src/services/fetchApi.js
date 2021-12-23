import axios from "axios"

const key = '0fa478120c0e13e0bb362fa76e7c6216'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: key,
        languege: "en-US",

    }
})

const getTrendingMovies = () => {
    return instance.get('/trending/all/day')
}

const searchMovie = (query, page = 1) => {
    return instance.get('/search/movie' , {
    params: {
        page,
        query,
    }})
}

const getMovieDatails = (movie_id) => {
    return instance.get(`/movie/${movie_id}`)
}

const getMovieCredits = (movie_id) => {
    return instance.get(`/movie/${movie_id}/credits`)
}
 
const getMovieReviews = (movie_id) => {
    return instance.get(`/movie/${movie_id}/reviews`)
}

export default {
    getTrendingMovies,
    searchMovie,
    getMovieDatails,
    getMovieCredits,
    getMovieReviews
}