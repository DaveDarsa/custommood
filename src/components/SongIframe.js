import React, { useContext } from "react";
import { CurrentSongcontext } from "../contexts/SongContextProvider";

const SongIframe = () => {
  const [currentSong] = useContext(CurrentSongcontext);
  return (
    <iframe
      width="0"
      height="0"
      display="none"
      loading="lazy"
      src={currentSong + "?autoplay=1"}
      frameBorder="0"
      title="SongIframe"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
export default SongIframe;
