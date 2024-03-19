import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {  useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useBackgroundMovie = (id) => {
    const dispatch = useDispatch();
    async function fetchMovieTrailer() {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
    const movieTrailer = await data.json();
    const trailerMovie = movieTrailer.results.filter((video) => {
        return video.type === "Trailer"
        });
        const trailerVideoInfo = trailerMovie.length ? trailerMovie[0] : movieTrailer[0];
        dispatch(addTrailerVideo(trailerVideoInfo));
}
useEffect(() => {
    fetchMovieTrailer();
}, [])
}
export default useBackgroundMovie;