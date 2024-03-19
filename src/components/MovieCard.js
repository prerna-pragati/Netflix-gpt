import { IMG_CDN } from "../utils/constants";

const MovieCard = ({imagePath}) => {
  if(!imagePath) {return;}
  return (
    <div className="w-48 pr-4">
        <img  alt="movieCard" src={IMG_CDN+ imagePath} />
    </div>
  )
}

export default MovieCard