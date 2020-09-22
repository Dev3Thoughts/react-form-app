import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  SEARCH_MOVIE_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../../services/util/utility";

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
    await console.log(setSearch(e.target.value));
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   await setSearch((curSearch) => {
  //     return {
  //       ...curSearch,
  //       [e.target.id]: e.target.value,
  //     };
  //   });
  // }

  return (
    <>
      <div className="p-5 m-4 border border">
        <form className=" my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            id="search"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          {/* <button className="btn btn-info" type="submit" value={search}>
            Search
          </button> */}
        </form>
        <div>{JSON.stringify(data, null, 2)}</div>
      </div>
    </>
  );
};

export default Search;
