import React, { useState, useEffect } from "react";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
//canvas scripts
import { Raincanvas } from "../canvasScripts/raincanvas";
import { Starcanvas } from "../canvasScripts/starcanvas";
import { Fireflies } from "../canvasScripts/fireflies";
import { Snowcanvas } from "../canvasScripts/snowcanvas";

const ViewControls = () => {
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
    } else {
      if (justmounted) return;
      rain.pause();
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
      <div className="timecontrols">
        <h5>
          Time
          <FontAwesomeIcon icon={faClock} style={{ marginLeft: ".5rem" }} />
        </h5>
        <ul>
          <li className="sunrise">
            <button>Sunrise</button>
          </li>
          <li className="morning">
            <button>Morning</button>
          </li>
          <li className="midday">
            <button>Midday</button>
          </li>
          <li className="night">
            <button>Night</button>
          </li>
        </ul>
      </div>
      <button className="freezetime">Freeze Time</button>
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
    </div>
  );
};
export default ViewControls;
