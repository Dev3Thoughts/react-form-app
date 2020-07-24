import React from 'react';
import Navbar from "./components/layout/Navbar"
import Movies from "./components/MoviesDB/MoviesDb"

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="row justify-content-center align-items-center m-2">Movies</h1>
      <Movies />
    </div>
  );
}

export default App;
