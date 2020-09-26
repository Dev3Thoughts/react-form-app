import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import PageNotFound from "./PageNotFound";
import Popular from "./Pages/Popular";
import TopRated from "./Pages/TopRated";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Search from "./Pages/Search";
import "./global.css";
import { ReactQueryDevtools } from "react-query-devtools";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route path="/top">
              <TopRated />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
