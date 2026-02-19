import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-pretty text-xl font-semibold py-2 text-white">
        {title}
      </h1>
      <div
        className="flex overflow-x-auto overflow-y-hidden scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
        onWheel={(e) => {
          e.preventDefault();
          const el = e.currentTarget;

          el.scrollLeft += e.deltaY * 0.5;
          el.scrollLeft += e.deltaX * 1.5;
        }}
      >
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
