import React from "react";
import useFetch from "../services/useFetch";
import { BASE_POSTER_PATH } from "../services/util/utilty";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Erorr";

export default function Detail() {
  const { data: movie, error, loading } = useFetch();

  console.log(movie);

  if (error) return <Error />;
  if (loading) return <Loader />;

  return (
    <>
      {movie.map((movie) => (
        <div key={movie.id} className="card-body">
          <img
            src={`${BASE_POSTER_PATH}/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      ))}
    </>
  );
}
