import React, { useContext } from "react";
import { PlaylistContext } from "../contexts/PlaylistContextProvider";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import EachSong from "./EachSong";
const Sidebar = () => {
  const [sidebarToggled, setSidebarToggled] = useContext(PlaylistContext);
  const [, , musicList] = useContext(PlaylistContext);

  return (
    <StyledSidebar toggled={sidebarToggled}>
      <span
        onClick={(e) => {
          e.preventDefault();
          setSidebarToggled(!sidebarToggled);
        }}
      >
        <FontAwesomeIcon icon={faTimes} style={{ color: "gray" }} />
      </span>

      <div className="songs">
        {musicList &&
          musicList.map((song) => {
            return <EachSong song={song} key={Math.random()} />;
          })}
      </div>
    </StyledSidebar>
  );
};
export default Sidebar;

const StyledSidebar = styled.div`
  .active {
    background-color: #6d8eff;
  }
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  height: 100vh;
  width: 20vw;
  overflow: hidden;
  padding: 2rem 0.5rem;
  z-index: 1000;
  transition: 0.3s ease-out;
  transform: ${(props) => {
    return props.toggled ? "translateX(0)" : "translateX(-20vw)";
  }};
  box-sizing: border-box;
  background-color: #f4f4f4;
  span {
    font-size: 2rem;
    float: right;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.5s ease;
    border: 1px solid transparent;
    :hover {
      cursor: pointer;
      border: 1px solid gray;
    }
    :active {
      transform: translateY(3px);
    }
    ::after {
      content: "";
      clear: both;
      display: block;
    }
  }
  .songs {
    margin-top: 15vh;
    font-size: 2.5rem;
  }
`;
