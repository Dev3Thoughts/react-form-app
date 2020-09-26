export const BASE_MOVIE_PATH = "https://api.themoviedb.org/3/movie/";
export const BASE_URL_PATH = "https://api.themoviedb.org/3/";
export const BASE_LANGUAGE_URL_PATH = "&language=en-US";

export const SEARCH_MOVIE_PATH = "https://api.themoviedb.org/3/search/movie?";
// Image
export const BASE_BACKDROP_PATH = "https://image.tmdb.org/t/p/original";
export const BASE_POSTER_PATH = "https://image.tmdb.org/t/p";

export const baseURL = process.env.REACT_APP_API_KEY;

export const URL = Object.freeze({
  // API_URL: `https://api.themoviedb.org/3/movie/550?api_key=${baseURL}&language=en-US`
  API_URL: `${BASE_MOVIE_PATH}popular?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}&page=1`,
});

export const popularApi = async (key, page) => {
  const res = await fetch(
    `${BASE_MOVIE_PATH}popular?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}&page=${page}`
  );
  if (res.ok) {
    const json = await res.json();
    return json;
  }
  throw res;
};

// top rated movies
export const topRatedApi = async (key, page) => {
  const res = await fetch(
    `${BASE_MOVIE_PATH}top_rated?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}&page=${page}`
  );
  if (res.ok) {
    const json = await res.json();
    return json;
  }
  throw res;
};

// // serach api
export const searchApi = async (search) => {
  const controller = new AbortController();
  const signal = controller.signal;

  const res = await fetch(
    `${SEARCH_MOVIE_PATH}api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}&query=${search}&page=1&include_adult=false`,
    {
      method: "get",
      signal,
    }
  );
  if (res.ok) {
    const json = await res.json();
    json.cancel = async () => await controller.abort();
    return json.results;
  }
  throw res;
};
