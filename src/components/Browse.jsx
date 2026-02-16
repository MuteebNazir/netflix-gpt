import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
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
