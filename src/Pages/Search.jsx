import React, { useState } from "react";
import { useQuery } from "react-query";
import { searchApi } from "../services/util/utility";
import MovieCard from "../components/layout/MovieCard";
import Loader from "../components/Error/Loader";
import "../global.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching, isError, error } = useQuery(
    [search, "Search"],
    searchApi,
    {
      enabled: search,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
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
      <form className="mx-4 mb-4">
        <label htmlFor="search">
          <h5>Seach {isFetching ? "..." : null}</h5>
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
        ) : isLoading ? (
          <Loader />
        ) : (
          data && <MovieCard props={data} />
        )}
      </div>
    </>
  );
};

export default Search;
