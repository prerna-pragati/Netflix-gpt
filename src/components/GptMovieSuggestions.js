import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt);
  const movieArray = movieNames && movieNames.split(', ');
  if(!movieArray) {
    return;
  }
  return (
    <div className="bg-black">
    <div className="p-4  bg-green-900 text-white bg-opacity-90">
      {
        movieArray.map((movie, index) => (
             <MovieList key={movie} title={movie} data={movieResults[index]} />
        ))
      }
    </div>
    </div>
  )
}

export default GptMovieSuggestions