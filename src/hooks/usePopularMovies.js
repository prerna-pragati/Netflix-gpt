import { useDispatch } from "react-redux";
import {addPopularMovies} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    async function  fetchPopularMovies() {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
            const popularMovieData = await data.json();
            console.log(popularMovieData);
            dispatch(addPopularMovies(popularMovieData?.results))
    }
    useEffect(() => {
        fetchPopularMovies();
    }, [])
}
export default usePopularMovies;