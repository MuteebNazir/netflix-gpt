
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

 const SecoundaryContainer = () => {

  const movies = useSelector((store) => store.movies);
   return (
     <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      {/*
        MovieList - Popular.
          MovieCard * n
        MovieList - NowPlaying.
        MovieList - Trending.
        MovieList - horror.
      */}

     </div>
   )
 }
 
 export default SecoundaryContainer;