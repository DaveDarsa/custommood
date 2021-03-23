import React, { useState, useEffect, useContext, useRef } from "react";
//contexts
import { PlaylistContext } from "../contexts/PlaylistContextProvider";
import { CurrentSongcontext } from "../contexts/SongContextProvider";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
//audio imports
import day from "./sounds/DAYSOUNDbetter.mp3";
import night from "./sounds/NIGHTSOUND.mp3";
import rainsound from "./sounds/RAINSOUND.mp3";
//canvas scripts
import { Raincanvas } from "../canvasScripts/raincanvas";
import { Starcanvas } from "../canvasScripts/starcanvas";
import { Fireflies } from "../canvasScripts/fireflies";
import { Snowcanvas } from "../canvasScripts/snowcanvas";
//util
import { useInterval } from "../utils/useInterval";

const ViewControls = () => {
  //sidebar controls
  const [sidebarToggled, setSidebarToggled] = useContext(PlaylistContext);
  //pausing the player
  const [, setCurrentSong] = useContext(CurrentSongcontext);
  //daytime for sounds
  const [daytime, setDaytime] = useState(true);

  //audio refs
  const daysoundref = useRef();
  const nightsoundref = useRef();
  const rainsoundref = useRef();

  useInterval(() => {
    setDaytime(!daytime);
  }, 75000);
  useEffect(() => {
    if (daytime) {
      daysoundref.current.play();
    } else {
      nightsoundref.current.play();
    }
  }, [daytime]);
  //handling canvases
  const [isRaining, setIsRaining] = useState(false);
  const [rain, setRain] = useState("");
  const [snow, setSnow] = useState("");
  const [isSnowing, setIsSnowing] = useState(false);
  const [justmounted, setJustmounted] = useState(true);

  //night sky and fireflies
  useEffect(() => {
    var stars = Starcanvas();
    stars.start();
    var fireflies = Fireflies();
    fireflies.start();
  }, [justmounted]);

  //initialize rain/snow script
  useEffect(() => {
    setTimeout(() => {
      if (rain === "") {
        setRain(Raincanvas());
      }
      if (snow === "") {
        setSnow(Snowcanvas());
      }
      setJustmounted(false);
    }, 200);
  }, [rain, isRaining, snow, isSnowing]);
  //toggle rain
  useEffect(() => {
    if (isRaining) {
      rain.start();
      rainsoundref.current.play();
    } else {
      if (justmounted) return;
      rain.pause();
      rainsoundref.current.pause();
    } //eslint-disable-next-line
  }, [isRaining]);

  //toggle snow
  useEffect(() => {
    console.log("snow");
    if (isSnowing) {
      snow.start();
    } else {
      if (justmounted) return;
      snow.pause();
    } //eslint-disable-next-line
  }, [isSnowing]);

  return (
    <div className="controls">
      <div className="weathercontrols">
        <h5>
          Weather
          <FontAwesomeIcon
            icon={faCloudSunRain}
            style={{ marginLeft: ".5rem" }}
            color="#4C6EF5"
          />
        </h5>
        <ul>
          <li
            className="normal"
            onClick={(e) => {
              e.preventDefault();
              setIsRaining(false);
              setIsSnowing(false);
            }}
          >
            <button>Normal</button>
          </li>
          <li
            onClick={(e) => {
              e.stopPropagation();
              setIsRaining(!isRaining);
            }}
            className="rain"
          >
            <button>Rain</button>
          </li>
          <li
            className="snow"
            onClick={(e) => {
              e.stopPropagation();
              setIsSnowing(!isSnowing);
            }}
          >
            <button>Snow</button>
          </li>
        </ul>
      </div>
      <div className="playercontrols">
        <h5>
          Music
          <FontAwesomeIcon
            size="1x"
            icon={faMusic}
            color="white"
            style={{ marginLeft: ".5rem" }}
          />
        </h5>
        <ul>
          <li>
            <button
              className="toggler"
              onClick={(e) => {
                e.preventDefault();
                setSidebarToggled(!sidebarToggled);
              }}
            >
              Toggle Player
            </button>
          </li>
          <li>
            <button
              className="toggler"
              onClick={(e) => {
                e.preventDefault();
                setCurrentSong("");
              }}
            >
              Pause Player
            </button>
          </li>
        </ul>
      </div>
      <audio src={day} ref={daysoundref}></audio>
      <audio src={night} ref={nightsoundref}></audio>
      <audio src={rainsound} ref={rainsoundref}></audio>
    </div>
  );
};
export default ViewControls;
