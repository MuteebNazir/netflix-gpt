import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const Browse = () => {

  useNowPlayingMovies();
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
