import React from "react";
import { BASE_POSTER_PATH } from "../services/util/utilty";
import useFetch from "../services/useFetch";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Erorr";
import PageNotFound from "../PageNotFound";
import "../global.css";

const MoviesDb = () => {
  const { data: movies, error, loading } = useFetch();

  function renderMovies(i) {
    return (
      <div className="col-md-auto m-4 poster" key={i.id}>
        <img
          src={`${BASE_POSTER_PATH}/w500${i.poster_path}`}
          alt={i.original_title}
        />
      </div>
    );
  }

  if (error) return <Error />;
  if (loading) return <Loader />;
  if (movies.length === 0) return <PageNotFound />;

  return (
    <div className="container mt-4">
      <section className="row">{movies.map(renderMovies)}</section>
      {/* <div className="row">
        <Link to={`/${movies}/${movies.id}`}>
          <div className="mt-4 col poster">
            <img
              src={`http://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.original_title}
            />
            <h2 className="text-primary bottom-left">
              {movies.original_title}
            </h2>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default MoviesDb;
