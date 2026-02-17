import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const Browse = () => {
  
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecoundaryContainer />
      {/*
      MainContainer 
      - VideoBackground
      - VideoTitle
      - SecoundaryContainer 
      -MovieList * n
      - Cards * n
      */}
    </div>
  );
};

export default Browse;
