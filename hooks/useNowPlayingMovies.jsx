import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constants";
import { addNowPlayingMovies } from "../src/utils/moviesSlice";

const useNowPlayingMovies = () => {
  //* Fetch data from TMDB API and update the Store

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
