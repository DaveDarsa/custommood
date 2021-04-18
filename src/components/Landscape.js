import React from "react";
import { StyledLandscape } from "./styles/StyledLandscape";
import bgimage from "../images/background.png";
import CustomView from "./Customview";
const Landscape = () => {
  return (
    <StyledLandscape bgimg={bgimage}>
      <div className="landscapewrap">
        <CustomView />
        <img className="bg" src={bgimage} alt="" />
      </div>
    </StyledLandscape>
  );
};
export default Landscape;
