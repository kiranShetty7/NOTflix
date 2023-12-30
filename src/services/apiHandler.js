import axios from "axios";
import { BASE_URL, VERSION, GET_MOVIES, GET_SERIES } from './endpoints'

const HttpClient = axios.create()



export const getMovies = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=d342456f3548dd3806a43a3876aa140a'
            const CONFIG = {
                headers: {
                    'Content-Type': 'application/json',
                },

            };
            const response = await HttpClient.get(URL, CONFIG)
            resolve(response)
        }
        catch (error) {
            reject(error)
        }
    })
}

export const getMovieDetailsById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d342456f3548dd3806a43a3876aa140a`
            const CONFIG = {
                headers: {
                    'Content-Type': 'application/json',
                },

            };
            const response = await HttpClient.get(URL, CONFIG)
            resolve(response)
        }
        catch (error) {
            reject(error)
        }
    })
}

export const getYoutubeVideoKey = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d342456f3548dd3806a43a3876aa140a`
            const CONFIG = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await HttpClient.get(URL, CONFIG)
            resolve(response)
        }
        catch (error) {
            reject(error)
        }
    })
}

export const getTrendingMovies = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d342456f3548dd3806a43a3876aa140a'
            const CONFIG = {
                headers: {
                    'Content-Type': 'application/json',
                },

            };
            const response = await HttpClient.get(URL, CONFIG)
            resolve(response)
        }
        catch (error) {
            reject(error)
        }
    })
}

export const getTvSeries = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const URL = 'https://api.themoviedb.org/3/trending/tv/week?api_key=d342456f3548dd3806a43a3876aa140a'
            const CONFIG = {
                headers: {
                    'Content-Type': 'application/json',
                },

            };
            const response = await HttpClient.get(URL, CONFIG)
            resolve(response)
        }
        catch (error) {
            reject(error)
        }
    })
}