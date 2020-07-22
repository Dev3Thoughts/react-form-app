import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">React Form</a>
      </nav>
      <div className='container' style={{ width: '400px', marginTop: 20 }}>
        <form action="">
          <fieldset>
            <label htmlFor="text">Add title</label>
            <input type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add title">
            </input>
          </fieldset>
        </form>

      </div>
    </div>
  );
}

export default App;
