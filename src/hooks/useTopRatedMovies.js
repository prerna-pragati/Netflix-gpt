import { useDispatch } from "react-redux";
import {addtopratedMovies} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    async function  fetchTopRatedMovies() {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
            const topratedMoviesData = await data.json();
            dispatch(addtopratedMovies(topratedMoviesData?.results))
    }
    useEffect(() => {
        fetchTopRatedMovies();
    },[])
}
export default useTopRatedMovies;