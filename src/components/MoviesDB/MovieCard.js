import React from 'react'
import { URL } from "../util/utilty"
const MovieCard = ({ movies }) => {
    console.log("console log", movies);
    return (
        <div>
            {movies.map((movie, id) => (
                <div className="card" style={{ width: "22rem" }} key={id}>
                    <img style={{
                        height: "200px"
                    }} src={`http://image.tmdb.org/t/p/w185${movie.backdrop_path}`} alt="Movie Poster" />
                    <div className="card-body">
                        <h3 className="text-primary">{movie.original_title}</h3>
                        <h5 className="lead">{movie.overview}</h5>
                        <h6 className="card-subtitle text-primary mt-1">Genres: {movie.genres[0].name}</h6>
                        <h6 className="card-subtitle text-info mt-1">Release: {movie.release_date}</h6>
                        <h6 className="card-subtitle text-warning mt-1">Rated: {movie.vote_average}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCard
