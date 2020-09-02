
const baseURL = process.env.REACT_APP_API_KEY;

export const URL = Object.freeze({
    // API_URL: `https://api.themoviedb.org/3/movie/550?api_key=${baseURL}&language=en-US`
    API_URL: `https://api.themoviedb.org/3/movie/popular?api_key=${baseURL}&language=en-US&page=1`

});
