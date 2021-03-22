import React from "react";
import { StyledHeader } from "./styles/StyledHeader";
import ViewControls from "./ViewControls";

const Header = () => {
  return (
    <StyledHeader className="header">
      <h1 className="title">Custom Mood</h1>
      <div className="landscapecontrols">
        <h4>Landscape Controls</h4>
        <ViewControls />
      </div>
    </StyledHeader>
  );
};

export default Header;
