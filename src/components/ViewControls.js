import React, { useState, useEffect } from "react";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
//canvas scripts
import { Raincanvas } from "../canvasScripts/raincanvas";

const ViewControls = () => {
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    var test = Raincanvas();
    if (isRaining) {
      console.log("raining");
      test.init();
      test.start();
    } else {
      test.pause();
    }

    return () => {
      test.pause();
    };
  }, [isRaining]);

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
          <li className="normal">
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
          <li className="snow">
            <button>Snow</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ViewControls;
