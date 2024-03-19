import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants';

const GptContainer = () => {
  return (
    <div>
         <div  className="absolute -z-10">
        <img src={BACKGROUND_IMAGE} alt="Logo" />
      </div>
        <Gptsearchbar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptContainer