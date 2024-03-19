import MovieCard from "./MovieCard";

const MovieList = ({title, data}) => {
  return (
    <div>
        <h1 className="text-xl p-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
        <div className="flex">
    {
        data?.map((moviedata) => {
            return <MovieCard imagePath={moviedata.backdrop_path} key={moviedata.id} />
        }
        )
    }
    </div>
    </div>
    </div>
  )
}

export default MovieList