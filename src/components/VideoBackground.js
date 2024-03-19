import useBackgroundMovie from "../hooks/useBackgroundMovie";
import {  useSelector } from "react-redux";

const VideoBackground = ({id}) => {
  const mainmoviePlaying = useSelector((store) => store.movies?.trailerVideo);
  useBackgroundMovie(id);
  return (
    <div className="w-full aspect-video"> 
      <iframe width="560"  className="w-full aspect-video"
      src={"https://www.youtube.com/embed/" + mainmoviePlaying?.key + "?autoplay=1&mute=1"}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow='autoplay'>
      </iframe>
    </div>
  )
}

export default VideoBackground