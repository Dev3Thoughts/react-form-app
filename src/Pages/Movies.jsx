import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BASE_POSTER_PATH } from "../services/util/utility";
import useFetch from "../services/useFetch";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Error";
import PageNotFound from "../PageNotFound";
import "../global.css";

export default function MoviesDb() {
  const { data: movies, error, loading } = useFetch();

  function renderMovies(i) {
    return (
      <div className="col-md-auto m-4" key={i.id}>
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
  if (loading) return <Loader />;
  if (movies.length === 0) return <PageNotFound />;

  return (
    <div className="container mt-4">
      <section className="row">{movies.map(renderMovies)}</section>
    </div>
  );
}
