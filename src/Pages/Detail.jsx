import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Erorr";
import { IoMdAddCircle } from "react-icons/io";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export default function Detail() {
  const { id } = useParams();
  const { data: movieDetail, error, loading } = useFetch(id);

  if (error) return <Error />;
  if (loading) return <Loader />;

  return (
    <div className="card-body" key={movieDetail.id}>
      <img
        src={`http://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        alt={movieDetail.original_title}
      />
      <h2 className="text-bold mt-2">Overview</h2>
      <p className="lead">{movieDetail.overview}</p>
      {/* <p className="card-subtitle">Genres: {movieDetail.genres.name}</p> */}
      <p className="card-subtitle mt-1">Release: {movieDetail.release_date}</p>
      <p className="card-subtitle text-warning mt-1">
        Rated:
        <BsStarFill className="ml-1 mb-1" />
        <BsStarFill className="mb-1" />
        <BsStarHalf className="mr-1 mb-1" />
        {movieDetail.vote_average}
      </p>
      <button
        href="#"
        type="button"
        className="btn btn-outline-success mt-2 text-white"
      >
        <IoMdAddCircle className="text-warning mb-1" /> Buy: $9.99
      </button>
      {/* {movieDetail.map((movie) => (
        <img
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
      ))} */}
    </div>
  );
}
