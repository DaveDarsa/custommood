import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
//importing components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Landscape from "./components/Landscape";
import Footer from "./components/Footer";
import SongIframe from "./components/SongIframe";
import { PlaylistContextProvider } from "./contexts/PlaylistContextProvider";
import { SongContextProvider } from "./contexts/SongContextProvider";
import "./App.css";
//audio imports
import day from "./components/sounds/DAYSOUNDbetter.mp3";
import night from "./components/sounds/NIGHTSOUND.mp3";

// //util
// import { useInterval } from "../utils/useInterval";

function App() {
  //daytime for sounds
  const [daytime, setDaytime] = useState(true);
  //audio refs
  const daysoundref = useRef();
  const nightsoundref = useRef();
  const [ambiance, setAmbiance] = useState(false);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setDaytime(!daytime);
    daysoundref.current.pause();
    daysoundref.current.currentTime = 0;
    nightsoundref.current.pause();
    nightsoundref.current.currentTime = 0;
  }, 75000);

  useEffect(() => {
    if (ambiance) {
      let soundToPlay = daytime ? daysoundref : nightsoundref;
      soundToPlay.current.play();
    } else {
      // daysoundref.current.pause();
      // daysoundref.current.currentTime = 0;
      // nightsoundref.current.pause();
      // nightsoundref.current.currentTime = 0;
    }
  }, [ambiance, daytime]);

  return (
    <PlaylistContextProvider>
      <SongContextProvider>
        <div className="App">
          <Sidebar />
          <Header ambiance={ambiance} setAmbiance={setAmbiance} />
          <Landscape />
          <Footer />
          <SongIframe />
          <audio src={day} ref={daysoundref}></audio>
          <audio src={night} ref={nightsoundref}></audio>
        </div>
      </SongContextProvider>
    </PlaylistContextProvider>
  );
}

export default App;
