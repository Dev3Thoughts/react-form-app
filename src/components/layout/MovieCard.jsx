import React from 'react'
import { IoMdAddCircle } from "react-icons/io"
import { BsStarFill, BsStarHalf, } from "react-icons/bs";
// import Form from "../Form"

const MovieCard = ({ movies }) => {

    return (
        <div>
            {movies.map((movie, id) => (
                <div className="card mt-4" style={{ width: "22rem" }} key={id}>
                    <img style={{
                        height: "200px"
                    }} src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster" />
                    <div className="card-body">
                        <h2 className="text-primary">{movie.original_title}</h2>
                        <strong className="text-bold">Overview</strong>
                        <h3 className="lead">{movie.overview}</h3>
                        <p className="card-subtitle text-muted mt-1">Genres: {movie.genres[0].name}</p>
                        <p className="card-subtitle text-muted mt-1">Release: {movie.release_date}</p>
                        <p className="card-subtitle text-warning mt-1">Rated:
                        <BsStarFill className="ml-1 mb-1" />
                            <BsStarFill className="mb-1" />
                            <BsStarHalf className="mr-1 mb-1" />
                            {movie.vote_average}
                        </p>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            {/* <button href="#" type="button" className="btn btn-outline-success m-2 text-white">
                                <IoMdAddCircle className="text-warning mb-1" /> Rent: $9.99
                            </button> */}
                            <button href="#" type="button" className="btn btn-outline-success m-2 text-white">
                                <IoMdAddCircle className="text-warning mb-1" /> Buy: $49.00
                            </button>
                        </div>
                    </div>
                    {/* <div className="card">
                        <div className="card-body">
                            <Form />
                        </div>
                    </div> */}
                </div>
            ))}
        </div>
    )
}

export default MovieCard
