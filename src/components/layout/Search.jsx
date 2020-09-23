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
  const [search, setSearch] = useState(" ");
  const { data, isFetching } = useQuery(search, fetchApi);

  // console.log(isFetching);

  async function handleChange(e) {
    e.preventDefault();
    await setSearch(e.target.value);
  }
  return (
    <>
      <div className="p-5 m-4 ">
        <form className=" my-2 my-lg-0">
          <label htmlFor="search bar">
            <h1>Seach</h1>
          </label>
          <input
            className="form-control mr-sm-2"
            type="text"
            id="search"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
          />
        </form>
        <div>{!isFetching ? <MovieCard props={data} /> : ""}</div>
      </div>
    </>
  );
};

export default Search;
