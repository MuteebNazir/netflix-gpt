
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  if(!movies) return null;
  console.log(movies);
    return (
    <div > <h1>{title}</h1>
      <div className=" flex overflow-x-scroll scrollbar-hide scroll-smooth">
       
        <div className="flex">
          {movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div> 
    </div>
  );
};

export default MovieList;
