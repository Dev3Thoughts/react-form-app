import React, { useState } from "react";
import { topRatedApi } from "../services/util/utility";
import { usePaginatedQuery } from "react-query";
import Loader from "../components/Error/Loader";
import Error from "../components/Error/Error";
import PageNotFound from "../PageNotFound";
import MovieCard from "../components/layout/MovieCard";
import "../global.css";

function TopRated() {
  const [page, setPage] = useState(1);
  const {
    resolvedData,
    latestData,
    isError,
    isLoading,
    isFetching,
  } = usePaginatedQuery(["top_rated", page], topRatedApi);

  if (isError) return <Error />;
  if (isLoading) return <Loader />;
  if (resolvedData.length === 0) return <PageNotFound />;

  return (
    <>
      <div className="container mt-4">
        <h4 className="m-2 text-uppercase">Top Rated</h4>
        <section className="row">
          {isFetching ? <Loader /> : null}
          <MovieCard props={resolvedData.results} />
        </section>
        <div className="m-4">
          <button
            className="btn btn-primary"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 1}
          >
            &laquo; Prev
          </button>
          <span className="m-2">{page}</span>
          <button
            className="btn btn-primary"
            onClick={() => {
              setPage((old) =>
                !latestData || !latestData.page ? old : old + 1
              );
            }}
            disabled={!latestData || !latestData.page}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </>
  );
}
export default TopRated;
