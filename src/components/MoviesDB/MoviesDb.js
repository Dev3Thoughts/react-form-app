import React, { useState, useEffect } from 'react';
import axios from "axios";
import { URL } from "../util/utilty"
import Loader from "../layout/Loader"

const MoviesDb = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)




    useEffect(() => {
        setMovies([])
        setLoading(true)
        axios.get(URL.API_URL + `/movie/550?api_key=${process.env.REACT_APP_API_KEY}`)
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
        <div>
            <h1>Movies</h1>
            <p className="text-info">
                {JSON.stringify(movies)}
            </p>

        </div>
    )
}

export default MoviesDb
