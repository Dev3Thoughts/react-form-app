import React, { useEffect, useReducer, useContext } from "react";
import cartReducer from "../useReducer/cartReducer";

const CartContext = React.createContext(null);

let initalCart;
try {
  initalCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  console.error("The cart can not be parsed in localStorage");
  initalCart = [];
}

export function CartProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer, initalCart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const contextValue = { cart, dispatch };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider. Wrap a parent component in <CartProvider> to fix this error!"
    );
  }
  return context;
}
