import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const nowPlayingmovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const topratedMovies = useSelector((store) => store.movies?.topratedMovies);
  // console.log(popularMovies);
  return popularMovies && (
    <div className="bg-black">
    <div className="-mt-52 pl-12 relative z-20">
      <MovieList title="Popular Movies" data={popularMovies} />
      <MovieList title="Trending Movies" data={nowPlayingmovies} />
      <MovieList title="Top Rated Movies" data={topratedMovies} />
      <MovieList title="Upcoming Movies" data={nowPlayingmovies} />
      <MovieList title="Horror Movies" data={nowPlayingmovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer