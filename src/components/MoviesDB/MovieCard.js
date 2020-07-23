import React from 'react'
import { URL } from "../util/utilty"
const MovieCard = ({ movies }) => {
    console.log("console log", URL.API_URL + movies.poster_path);
    return (
        <div>
            {movies.map((movie, id) => (
                <div className="card" key={id}>
                    <h3 className="card-header">{movie.original_title}</h3>
                    <img style={{
                        width: "400px",
                        height: "200px"
                    }} src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie Poster" />
                    <div className="card-body">
                        <h5 className="lead">{movie.overview}</h5>
                        <h6 className="card-subtitle text-muted mt-1">Release: {movie.release_date}</h6>
                        <h6 className="card-subtitle text-muted mt-1">Rated: {movie.vote_average}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCard
