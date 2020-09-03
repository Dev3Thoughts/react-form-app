import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Movies from "./Pages/Movies";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <main>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
