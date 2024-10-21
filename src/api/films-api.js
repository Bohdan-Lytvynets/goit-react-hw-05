import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
    headers: {
        Authorization :
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2ZlYTU3ZWFlZmU3ZmVmODM2MDRjNDk3NjMxMGY1MyIsIm5iZiI6MTcyOTUzNDIyMC43MDg0ODgsInN1YiI6IjY2ZDc2ZWQwMzYwODBmNzk0ZDBlYmY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qvVMLqGdXtjPU1t6F9LB8Da5IJDy4oGfOBoBFZLgIS8"
    },
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get("trending/movie/day", options);
    return response.data;
  };
  
  export const fetchMovieByQuery = async (query) => {
    const response = await axios.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    return response.data;
  };
  
  export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`movie/${id}`, options);
    return response.data;
  };
  
  export const fetchMovieCast = async (id) => {
    const response = await axios.get(`movie/${id}/credits`, options);
    return response.data.cast;
  };
  
  export const fetchMovieReview = async (id) => {
    const response = await axios.get(`movie/${id}/reviews`, options);
    return response.data.results;
  };
  







