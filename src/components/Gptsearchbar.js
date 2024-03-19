import React from 'react';
import { BACKGROUND_IMAGE } from '../utils/constants';
import { useRef } from 'react';
import openai from '../utils/openai';
import {API_OPTIONS} from '../utils/constants';
import {addMovieResults} from '../utils/gptslice';
import { UseDispatch, useDispatch } from 'react-redux';

const Gptsearchbar = () => {
  const name = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async(movies) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movies +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
      const movieData = await data.json();
      return movieData.results;
  }
  const handleSearch = async() => {
    const textSearch = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    name.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: textSearch }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);
    if(!gptResults.choices) {
      return;
    }
    const movieResults = gptResults.choices?.[0]?.message?.content;
    const  promiseArray = movieResults.split(', ').map(async(movies) => searchMovieTMDB(movies))
    const movieresults  = await Promise.all(promiseArray);
    
    dispatch(addMovieResults({movieNames: movieResults, movieResults: movieresults}))
  }
  return (
    <div>
      <div>
      <form  className="bg-black absolute p-12 my-36 w-1/2 mx-auto right-0 left-0 grid grid-cols-12" onSubmit={(e) => {e.preventDefault();}}>
          <input ref={name} type="text"  placeholder="Search for Movies" className="p-2 m-2 col-span-9 w-full mr-2" />
          <button className='bg-red-700 col-span-3 ml-5 rounded-lg' onClick={handleSearch}>Search</button>
        </form>
      </div>
        
    </div>
  )
}

export default Gptsearchbar;