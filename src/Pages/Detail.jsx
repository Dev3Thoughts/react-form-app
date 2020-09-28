import React from "react";
import { useQuery } from "react-query";
import { useParams, useHistory } from "react-router-dom";
import {
  movieId,
  BASE_POSTER_PATH,
  BASE_BACKDROP_PATH,
} from "../services/util/utility";

import Loader from "../components/Error/Loader";
import Error from "../components/Error/Error";
import { useCart } from "../useContext/cartContext";
import "../global.css";

const Detail = () => {
  const { dispatch } = useCart();
  const { id } = useParams();
  const history = useHistory();
  const { data, isLoading, isError } = useQuery([id, "detail"], movieId, {
    retry: false,
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="container row m-4">
      {data.poster_path === null ? null : (
        <img
          src={`${BASE_POSTER_PATH}/w500${data.poster_path}`}
          alt={data.original_title}
        />
      )}
      {data.backdrop_path === null ? null : (
        <img
          className="backdropPath"
          src={`${BASE_BACKDROP_PATH + data.backdrop_path}`}
          alt={data.original_title}
        />
      )}

      <div className="m-4 col">
        <h2>{data.title}</h2>
        <strong>Overview</strong>
        <p className="lead">{data.overview}</p>
        <strong>Release:</strong>
        <p className="lead">{data.release_date}</p>
        <div className="d-block">
          <button
            type="button"
            className="btn btn-success text-white"
            onClick={() => {
              dispatch({ type: "add", id });
              history.push("/cart");
            }}
          >
            Add To Cart
          </button>
          <strong className="ml-2 text-white">$0.00</strong>
        </div>
      </div>
    </div>
  );
};

export default Detail;
