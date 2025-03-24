import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <AboutMe />
      <Skills />
    </BrowserRouter>
  );
}

export default App;
