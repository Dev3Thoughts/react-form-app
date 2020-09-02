import React from "react";
import useFetch from "../services/useFetch";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Erorr";
import { IoMdAddCircle } from "react-icons/io";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Detail() {
  const { data: movie, error, loading } = useFetch();
  console.log(movie);
  if (error) return <Error />;
  if (loading) return <Loader />;

  return (
    <div className="card-body">
      <img
        src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h2 className="text-bold">Overview</h2>
      <p className="lead">{movie.overview}</p>
      <p className="card-subtitle">Genres: {movie.genres[0].name}</p>
      <p className="card-subtitle mt-1">Release: {movie.release_date}</p>
      <p className="card-subtitle text-warning mt-1">
        Rated:
        <BsStarFill className="ml-1 mb-1" />
        <BsStarFill className="mb-1" />
        <BsStarHalf className="mr-1 mb-1" />
        {movie.vote_average}
      </p>
      <button
        href="#"
        type="button"
        className="btn btn-outline-success mt-2 text-white"
      >
        <IoMdAddCircle className="text-warning mb-1" /> Buy: $9.99
      </button>
    </div>
  );
}
