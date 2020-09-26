import React, { useState } from "react";
import { useQuery } from "react-query";
import { searchApi } from "../../services/util/utility";
import MovieCard from "../layout/MovieCard";
import Loader from "../Error/Loader";
import "../../global.css";

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
      <form className="mx-5">
        <label htmlFor="search">
          <h5>Seach</h5>
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
        {isFetching ? "Updating..." : null}
      </div>
    </>
  );
};

export default Search;
