import React from "react"
import { Link } from "react-router-dom"
import { BASE_POSTER_PATH } from "../services/util/utilty"
import useFetch from "../services/useFetch"
import Loader from "../components/Error/Loader"
import Error from "../components/Error/Erorr"
import PageNotFound from "../PageNotFound"
import "../global.css"

const MoviesDb = () => {
  const { data: movies, error, loading } = useFetch()

  function renderMovies(i) {
    return (
      <div className="col-md-auto m-4 poster" key={i.id}>
        <Link to={`/detail/${i.id}`}>
          <img
            src={`${BASE_POSTER_PATH}/w500${i.poster_path}`}
            alt={i.original_title}
          />
        </Link>
      </div>
    )
  }

  if (error) return <Error />
  if (loading) return <Loader />
  if (movies.length === 0) return <PageNotFound />

  return (
    <div className="container mt-4">
      <section className="row">{movies.map(renderMovies)}</section>
    </div>
  )
}

export default MoviesDb
