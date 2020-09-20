import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useQuery } from "react-query";
import {
  SEARCH_MOVIE_PATH,
  baseURL,
  BASE_LANGUAGE_URL_PATH,
} from "../../services/util/utility";
// import Loader from "../Error/Loader";
// import Error from "../Error/Error";
// import PageNotFound from "../PageNotFound";

// query tools
import { ReactQueryDevtools } from "react-query-devtools";

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
  console.log(data);

  // function renderMovies(i) {
  //   return (
  //     <div className="col-md-auto m-4" key={i.id}>
  //       <h1>{i.title}</h1>
  //       {/* <motion.div
  //         whileHover={{ scale: 1.1 }}
  //         whileTap={{ scale: 0.9 }}
  //         transition={{ ease: "easeOut", duration: 0.4 }}
  //       >
  //         <Link to={`/detail/${i.id}`}>
  //           <img
  //             src={`${BASE_POSTER_PATH}/w500${i.poster_path}`}
  //             alt={i.original_title}
  //           />
  //         </Link>
  //       </motion.div> */}
  //     </div>
  //   );
  // }
  async function handleChange(e) {
    e.preventDefault();
    await console.log(setSearch(e.target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await setSearch((curSearch) => {
      return {
        ...curSearch,
        [e.target.id]: e.target.value,
      };
    });
  }
  // if (error) return <Error />;
  // if (isLoading) return <Loader />;
  // if (data.length === 0) return <PageNotFound />;

  return (
    <>
      <div className="p-5 border border">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <label htmlFor="search">
            <input
              className="form-control mr-sm-2"
              type="text"
              id="search"
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
            <button className="btn btn-primary" type="submit" value={search}>
              Search
            </button>
          </label>
        </form>
        <div>{JSON.stringify(data, null, 2)}</div>
        {/* <div>{data.title}</div> */}
      </div>
      {/* <div>{data.map(renderMovies)}</div> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default Search;
