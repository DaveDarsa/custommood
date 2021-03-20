import React from "react";
//importing components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Landscape from "./components/Landscape";
import Footer from "./components/Footer";
import { PlaylistContextProvider } from "./contexts/PlaylistContextProvider";
import "./App.css";

function App() {
  return (
    <PlaylistContextProvider>
      <div className="App">
        <Sidebar />
        <Header />
        <Landscape />
        <Footer />
      </div>
    </PlaylistContextProvider>
  );
}

export default App;
