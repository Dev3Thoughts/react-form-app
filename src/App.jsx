import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Movies from "./Pages/Movies";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/:detail/:id" element={<Detail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
