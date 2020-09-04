import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
// import { BASE_POSTER_PATH } from "../services/util/utilty";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Erorr";

export default function Detail() {
  const { id } = useParams();
  const { data: movie, error, loading } = useFetch();
  console.log(movie);

  if (error) return <Error />;
  if (loading) return <Loader />;

  return (
    <>
      <div>
        <h1>Detail{id}</h1>
      </div>
      {/* {movie.map((movie) => (
        <div key={movie.id} className="card-body">
          <img
            src={`${BASE_POSTER_PATH}/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
      ))} */}
    </>
  );
}
