import React, { useContext } from "react";
import { PlaylistContext } from "../contexts/PlaylistContextProvider";
import { StyledHeader } from "./styles/StyledHeader";
import ViewControls from "./ViewControls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [sidebarToggled, setSidebarToggled] = useContext(PlaylistContext);

  return (
    <StyledHeader className="header">
      <h1 className="title">Custom Mood</h1>
      <div
        className="sidetoggle"
        onClick={(e) => {
          e.preventDefault();
          setSidebarToggled(!sidebarToggled);
        }}
      >
        <FontAwesomeIcon
          size="2x"
          icon={faMusic}
          color="white"
          className="musicIcon"
          style={{ transition: ".8s ease" }}
        />
      </div>

      <div className="landscapecontrols">
        <h4>Landscape Controls</h4>
        <ViewControls />
      </div>
    </StyledHeader>
  );
};

export default Header;
