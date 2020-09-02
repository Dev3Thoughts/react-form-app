import React, { useState, useEffect } from 'react';
import axios from "axios";
import { URL } from "../components/util/utilty"
import Loader from "../components/Error/Loader"
import Error from "../components/Error/Erorr"
import MovieCard from "../components/layout/MovieCard"

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

    if (loading) return <Loader />
    if (error) return <Error />


    return (
        <div className="container">
            <div className="row">
                <MovieCard movies={movies} />
            </div>
        </div>
    )
}

export default MoviesDb