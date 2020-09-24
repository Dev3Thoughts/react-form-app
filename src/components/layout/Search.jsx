import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  SEARCH_MOVIE_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../../services/util/utility";
import MovieCard from "../layout/MovieCard";
import "../../global.css";

const fetchApi = async (search) => {
  const res = await fetch(
    `${SEARCH_MOVIE_PATH}api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}&query=${search}&page=1&include_adult=false`
  );
  if (res.ok) {
    const json = await res.json();
    return json.results;
  }
  throw res;
};

const Search = () => {
  const [search, setSearch] = useState("");
  const { data } = useQuery(search, fetchApi, {
    retry: false,
  });

  async function handleChange(e) {
    e.preventDefault();
    await setSearch(e.target.value);
  }

  return (
    <>
      <div className="m-4">
        <h1>Welcome.</h1>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <div className="heroImg"></div>
        <form>
          <label htmlFor="search bar">
            <h3>Seach</h3>
          </label>
          <input
            className="form-control mr-sm-2"
            type="text"
            id="search"
            placeholder="Search for a movie, tv show, person......"
            value={search}
            onChange={handleChange}
          />
        </form>
        <div>{data && <MovieCard props={data} />}</div>
      </div>
    </>
  );
};

export default Search;
