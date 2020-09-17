import React, { useState, useEffect } from "react";
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
const Search = () => {
  const [data, setData] = useState([]);
  //  const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch(URL.API_URL);
        if (res.ok) {
          const json = await res.json();
          setData(json.results);
        } else {
          throw res;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  function handelSubmit(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <input
        onChange={handelSubmit}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default Search;
