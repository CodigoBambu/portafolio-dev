import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <AboutMe />
    </BrowserRouter>
  );
}

export default App;
