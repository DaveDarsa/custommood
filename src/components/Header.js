import React from "react";
import { StyledHeader } from "./styles/StyledHeader";
import ViewControls from "./ViewControls";

const Header = ({ ambiance, setAmbiance }) => {
  return (
    <StyledHeader className="header">
      <h1 className="title">Custom Mood</h1>
      <div className="landscapecontrols">
        <h4>Landscape Controls</h4>
        <ViewControls ambiance={ambiance} setAmbiance={setAmbiance} />
      </div>
    </StyledHeader>
  );
};

export default Header;
