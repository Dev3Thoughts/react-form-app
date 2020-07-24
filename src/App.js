import React from 'react';
import Navbar from "./components/layout/Navbar"
import Movies from "./components/MoviesDB/MoviesDb"
import Form from "./components/Form"
function App() {
  return (
    <div>
      <Navbar />
      <h1 className="row justify-content-center align-items-center m-2">Movies</h1>
      <Movies />
      {/* <Form /> */}
    </div>
  );
}

export default App;
