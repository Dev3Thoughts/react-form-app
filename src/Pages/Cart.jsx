import React from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../useContext/cartContext";
import {
  BASE_POSTER_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../services/util/utility";
import useFetchAll from "../services/useFetchAll";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Error";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const history = useHistory();

  const urls = cart.map(
    (i) => `${i.id}?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}`
  );
  const { data: movies, loading, error } = useFetchAll(urls);

  function rederItems(itemInCart) {
    const { id, quantity } = itemInCart;
    const { title, poster_path } = movies.find((p) => p.id === parseInt(id));

    return (
      <div key={id} className="lead m-2 p-4 border-top">
        <img
          style={{ maxWidth: "160px" }}
          src={`${BASE_POSTER_PATH}/w500${poster_path}`}
          alt={poster_path}
        />
        <div className="mt-2">
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p>
            <strong>Title:</strong> {title}
          </p>
          <p>
            <strong>Item number:</strong> {id}
          </p>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => {
              dispatch({ type: "remove", id });
            }}
          >
            Remove
          </button>

          {cart.length > 0 && (
            <button
              className="btn btn-primary m-2"
              onClick={() => history.push("/checkout")}
            >
              Check out
            </button>
          )}
        </div>
      </div>
    );
  }

  if (loading) return <Loader />;
  if (error) return <Error />;

  const numItems = cart.reduce(
    (prevValue, curValue) => prevValue + curValue.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h1 className="text-info">
        {numItems === 0
          ? "Your cart is empty"
          : `${numItems} Item${numItems > 1 ? "'s" : ""}`}
      </h1>
      <section>{cart.map(rederItems)}</section>
    </div>
  );
};

export default Cart;
