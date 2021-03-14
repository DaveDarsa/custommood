import React from "react";
//importing components
import Header from "./components/Header";
import Landscape from "./components/Landscape";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Landscape />
      <Footer />
    </div>
  );
}

export default App;
