import React, { useState, useEffect } from 'react';
import axios from "axios";
import { URL } from "../util/utilty"
import Loader from "../layout/Loader"
import MovieCard from "./MovieCard"

const MoviesDb = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setMovies([])
        setLoading(true)

        axios.get(URL.API_URL + `api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then(res => {
                setMovies([res.data])
                console.log(res.data);
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                setError(err)
                console.log("Error Reading data " + err);
            })
    }, [])

    if (loading) {
        return <Loader />
    } if (error) {
        return <p className="text-danger">API Error...</p>
    }

    return (
        <div className="container">
            <h1 className="row justify-content-center align-items-center m-2">Movies</h1>
            <MovieCard movies={movies} />
        </div>
    )
}

export default MoviesDb
