import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PlaylistContext = createContext();

export const PlaylistContextProvider = (props) => {
  //request creator;
  function makeRequest(url) {
    return axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${url}&key=${process.env.REACT_APP_YT_KEY}&part=snippet,status`
    );
  }
  const [musicList, setMusicList] = useState("");
  //live video ids
  var liveIds = ["5qap5aO4i9A", "5yx6BWlEVcY", "-5KAN9_CzSA", "7NOSDKb0HlU"];

  //fetch all video details and update the musiclist
  useEffect(() => {
    console.log("ran");
    async function getData() {
      let info = await Promise.all(
        liveIds.map((id) => {
          return makeRequest(id);
        })
      ).then((details) => {
        return details;
      });
      info = info.map((_, idx) => {
        return info[idx].data.items[0].snippet;
      });
      //gotta have 1.thumbnail 2.title 3.channel name 4.src
      info = info.map((eachVid, idx) => {
        return {
          channel: eachVid.channelTitle,
          title: eachVid.localized.title,
          thumbnail: eachVid.thumbnails.high.url,
          src: `https://www.youtube.com/embed/${liveIds[idx]}`,
        };
      });

      setMusicList(info);
    }
    getData();
    //eslint-disable-next-line
  }, []);

  const [sidebarToggled, setSidebarToggled] = useState(false);

  return (
    <PlaylistContext.Provider
      value={[sidebarToggled, setSidebarToggled, musicList, setMusicList]}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};
