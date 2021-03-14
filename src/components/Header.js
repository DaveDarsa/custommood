import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";

import { StyledHeader } from "./styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader className="header">
      <h1 className="title">Custom Mood</h1>
      <div className="landscapecontrols">
        <h4>Landscape Controls</h4>
        <div className="controls">
          <div className="timecontrols">
            <h5>
              Time
              <FontAwesomeIcon icon={faClock} style={{ marginLeft: ".5rem" }} />
            </h5>
            <ul>
              <li className="sun">
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
              <li className="rain">
                <button>Rain</button>
              </li>
              <li className="snow">
                <button>Snow</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
