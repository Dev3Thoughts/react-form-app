import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BASE_POSTER_PATH,
  BASE_MOVIE_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../services/util/utilty"
import Loader from "../components/Error/Loader"
import Error from "../components/Error/Erorr"

export default function Detail() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  console.log(data)

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

  if (error) return <Error />
  if (loading) return <Loader />

  return (
    <>
      <div>
        <img
          src={`${BASE_POSTER_PATH}/w500${data.poster_path}`}
          alt={data.original_title}
        />
        <h1>{data.title}</h1>
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
  )
}
