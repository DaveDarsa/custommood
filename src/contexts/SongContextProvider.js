import React, { useState, createContext } from "react";

export const CurrentSongcontext = createContext();

export const SongContextProvider = (props) => {
  const [currentSong, setCurrentSong] = useState("");
  return (
    <CurrentSongcontext.Provider value={[currentSong, setCurrentSong]}>
      {props.children}
    </CurrentSongcontext.Provider>
  );
};
