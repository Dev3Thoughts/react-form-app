import { BASE_MOVIE_PATH, BASE_LANGUAGE_URL_PATH } from "./util/utility";
export const baseURL = process.env.REACT_APP_API_KEY;

export async function getPopularMovies(key, nextCursor = 1) {
  const response = await fetch(
    `${BASE_MOVIE_PATH}popular?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}&page=` +
      nextCursor
  );
  if (response.ok) {
    const json = await response.json();
    return json.results;
  }
  throw response;
}
