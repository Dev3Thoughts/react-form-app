import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/layout/Header"
import PageNotFound from "./PageNotFound"
import Movies from "./Pages/Movies"
import Detail from "./Pages/Detail"
import Cart from "./Pages/Cart"

function App() {
  const [cart, setCart] = useState([]);


  function addToCart(id) {
    setCart((items) => {
      const itemInCart = items.find((i) => i.id === id)
      if (itemInCart) {
        // return new array with maching item replaced
        return items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...items, { id, quantity: 1 }];
      }
    })
  }


  return (
    <>
      <main>
        <Router>
          <Header cart={cart} />
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/detail/:id">
              <Detail addToCart={addToCart} />
            </Route>
            <Route path="/cart">
              <Cart cart={cart}  />
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
