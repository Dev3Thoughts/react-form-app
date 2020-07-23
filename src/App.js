import React from 'react';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" href="#">React Form</span>
      </nav>
      <div className='container' style={{ width: '400px', marginTop: 20 }}>
        <form action="">
          <fieldset>
            <div className="form-group">
              <label htmlFor="text">Add title</label>
              <input type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Add title"
              />
            </div>
          </fieldset>
        </form>

      </div>
    </div>
  );
}

export default App;
