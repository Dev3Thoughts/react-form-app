import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import {
  BASE_POSTER_PATH,
  BASE_MOVIE_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../services/util/utilty"
import PageNotFound from "../PageNotFound"
import Loader from "../components/Error/Loader"
import Error from "../components/Error/Erorr"

export default function Detail(props) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch(
          `${BASE_MOVIE_PATH}${id}?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}`
        )
        if (res.ok) {
          const json = await res.json()
          setData(json)
        } else {
          throw res
        }
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [id])

  if (loading) return <Loader />
  if (error) return <Error />
  if (data.length === 0) return <PageNotFound />
  return (
    <div className="container mt-4 d-flex">
      <img
        style={{ maxWidth: "450px" }}
        src={`${BASE_POSTER_PATH}/w500${data.poster_path}`}
        alt={data.original_title}
      />
      <div className="ml-4">
        <h2 className="text-primary">{data.title}</h2>
        <h5>Overview</h5>
        <p className="lead">{data.overview}</p>
        <h5>Release:</h5>
        <p className="lead">{data.release_date}</p>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={() => {
            props.addToCart(id)
            history.push("/cart")
          }}
        >
          <strong className="text-white">Buy $9.99</strong>
        </button>
      </div>
    </div>
  )
}
