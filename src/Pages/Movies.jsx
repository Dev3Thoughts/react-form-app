import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../services/useFetch";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Erorr";
import PageNotFound from "../PageNotFound";
import "../global.css";

const MoviesDb = () => {
  const { id } = useParams();
  const { data: movies, error, loading } = useFetch(`${id}`);

  if (error) return <Error />;
  if (loading) return <Loader />;
  if (movies.length === 0) return <PageNotFound />;

  return (
    <div className="container">
      <div className="row">
        <Link to={`/${movies}/${movies.id}`}>
          <div className="mt-4 col poster">
            <img
              style={{ maxWidth: "300px" }}
              src={`http://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.original_title}
            />
            <h2 className="text-primary bottom-left">
              {movies.original_title}
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MoviesDb;
