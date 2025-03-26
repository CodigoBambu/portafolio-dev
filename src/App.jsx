import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";

function App() {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
}

export default App;
