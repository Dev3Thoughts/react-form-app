import React from 'react';
import Navbar from "./components/layout/Navbar"
import Movies from "./components/MoviesDB/MoviesDb"
import Form from "./components/Form"
function App() {
  return (
    <div>
      <Navbar />
      <Movies />
      <Form />
    </div>
  );
}

export default App;
