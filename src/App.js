import React from "react";
//importing components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Landscape from "./components/Landscape";
import Footer from "./components/Footer";
import SongIframe from "./components/SongIframe";
import { PlaylistContextProvider } from "./contexts/PlaylistContextProvider";
import { SongContextProvider } from "./contexts/SongContextProvider";
import "./App.css";

function App() {
  return (
    <PlaylistContextProvider>
      <SongContextProvider>
        <div className="App">
          <Sidebar />
          <Header />
          <Landscape />
          <Footer />
          <SongIframe />
        </div>
      </SongContextProvider>
    </PlaylistContextProvider>
  );
}

export default App;
