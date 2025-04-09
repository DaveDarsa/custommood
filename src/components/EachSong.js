import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentSongcontext } from "../contexts/SongContextProvider";
const EachSong = (props) => {
  const [currentSong, setCurrentSong] = useContext(CurrentSongcontext);
  const { title, channel, thumbnail, src } = props.song;
  return (
    <StyledSong
      className={currentSong === src ? "active" : ""}
      onClick={() => {
        setCurrentSong(src);
      }}
    >
      <div className="songimg">
        <img src={thumbnail} alt="" />
      </div>

      <div className="details">
        <h4>{title}</h4>
        <p>{channel}</p>
      </div>
    </StyledSong>
  );
};
export default EachSong;

const StyledSong = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
  padding: 0 1rem;
  :hover {
    cursor: pointer;

  }

  .details {
    flex-basis: 40%;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 1.5rem;
      font-weight: 800;
      width: 100%;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: pre-wrap;
      overflow: hidden;
    }
    p {
      transform: translateY(-2rem);
      font-weight: 600;
    }
  }
  .songimg {
    width: 45%;
    overflow: hidden;
  }
  img {
    object-fit: cover;
    width: 100%;
    margin: -10% 0;
    display: block;
  }
`;
