import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  SEARCH_MOVIE_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../../services/util/utility";
import MovieCard from "../layout/MovieCard";
import Loader from "../Error/Loader";
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
  const { data, status, isFetching, isError, error } = useQuery(
    [search, "Search"],
    fetchApi,
    {
      enabled: search,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  async function handleChange(e) {
    e.preventDefault();
    await setSearch(e.target.value);
  }

  return (
    <>
      <div className="m-4">
        <h2>Welcome.</h2>
        <h4>
          Millions of movies, TV shows and people to discover. Explore now.
        </h4>
      </div>
      <div className="heroImg"></div>
      <form className="mx-6">
        <label htmlFor="search">
          <h3>Seach</h3>
        </label>
        <input
          className="form-control"
          type="text"
          id="search"
          placeholder="Search for a movie, tv show, person..."
          value={search}
          onChange={handleChange}
        />
      </form>
      <div>
        {isError ? (
          error.message
        ) : status === "loading" ? (
          <Loader />
        ) : (
          data && <MovieCard props={data} />
        )}
        {isFetching ? "Updating..." : null}
      </div>
    </>
  );
};

export default Search;
