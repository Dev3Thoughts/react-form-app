import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import MoviesDb from "./Pages/Movies";
import Detial from "./Pages/Detail"
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MoviesDb />}></Route>
          <Route path="/:detail/:id" element={<Detial />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
