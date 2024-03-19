
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import {useSelector} from "react-redux";
import GptContainer from "./GptContainer.js";

const Browse = () => {
  const isGptSearch = useSelector((store) =>  store.gpt.gptSearchView);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {isGptSearch ? <GptContainer /> : <>
      <MainContainer />
      <SecondaryContainer />
      </>}
      
    </div>
  )
}

export default Browse