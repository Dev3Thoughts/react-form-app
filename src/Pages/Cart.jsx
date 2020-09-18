import React from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../useContext/cartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const history = useHistory();

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

      {cart.map((i) => (
        <div key={i.id} className="border border p-2 m-2">
          <h3 className="text-primary mt-2">{i.id}</h3>
          <h3 className="text-primary mt-2">title: {i.title}</h3>
          <h3 className="text-primary mt-2">{i.quantity}</h3>
          <button
            type="button"
            className="ml-2 btn btn-outline-danger"
            onClick={() => {
              dispatch({ type: "remove", id: i.id });
            }}
          >
            X
          </button>
          {cart.length > 0 && (
            <button
              className="btn btn-primary m-4"
              onClick={() => history.push("/checkout")}
            >
              Check out
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
