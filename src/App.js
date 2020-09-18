import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cartReducer from "./useReducer/cartReducer";
import Header from "./components/layout/Header";
import PageNotFound from "./PageNotFound";
import Movies from "./Pages/Movies";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

let initalCart;
try {
  initalCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  console.error("The cart can not be parsed in localStorage");
  initalCart = [];
}

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initalCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <Header cart={cart} />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/detail/:id">
            <Detail dispatch={dispatch} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} dispatch={dispatch} />
          </Route>
          <Route path="/checkout">
            <Checkout dispatch={dispatch} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
