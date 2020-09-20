import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BASE_POSTER_PATH,
  BASE_MOVIE_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../services/util/utility";
import { useQuery } from "react-query";
// import useFetch from "../services/useFetch";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Error";
import PageNotFound from "../PageNotFound";
import "../global.css";
// query tools
import { ReactQueryDevtools } from "react-query-devtools";

const fetchApi = async (movie) => {
  const res = await fetch(
    `${BASE_MOVIE_PATH}${movie}?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}&page=1`
  );
  if (res.ok) {
    const json = await res.json();
    return json.results;
  }
  throw res;
};

export default function MoviesDb() {
  const [movie, setMovies] = useState("popular");
  // const { data: movies, error, loading } = useFetch();
  const { data, error, isLoading } = useQuery(movie, fetchApi);
  function renderMovies(i) {
    return (
      <div className="col-auto m-4" key={i.id}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
        >
          <Link to={`/detail/${i.id}`}>
            <img
              src={`${BASE_POSTER_PATH}/w500${i.poster_path}`}
              alt={i.original_title}
            />
          </Link>
        </motion.div>
      </div>
    );
  }

  if (error) return <Error />;
  if (isLoading) return <Loader />;
  if (data.length === 0) return <PageNotFound />;

  return (
    <>
      <div className="container mt-4">
        <h4 className="m-2 text-uppercase">{movie}</h4>
        <button
          type="button"
          className=" btn btn-info m-1"
          onClick={() => setMovies("popular")}
        >
          Popular
        </button>
        <button
          type="button"
          className=" btn btn-info m-1"
          onClick={() => setMovies("upcoming")}
        >
          Upcoming
        </button>
        <button
          type="button"
          className=" btn btn-info m-1"
          onClick={() => setMovies("now_playing")}
        >
          Now playing
        </button>
        <button
          type="button"
          className=" btn btn-info m-1"
          onClick={() => setMovies("top_rated")}
        >
          Top rated
        </button>

        <section className="row">{data.map(renderMovies)}</section>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
