import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/layout/Header"
import PageNotFound from "./PageNotFound"
import Movies from "./Pages/Movies"
import Detail from "./Pages/Detail"
import Cart from "./Pages/Cart"

function App() {
  return (
    <>
      <main>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  )
}

export default App
