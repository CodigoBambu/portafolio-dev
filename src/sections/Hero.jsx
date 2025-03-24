import { div, header } from "framer-motion/client";
import { section } from "framer-motion/m";
import Navbar from "../components/MenuNav";
import Button from "../components/Button";
import React from "react";

const Hero = () => {
  const handleClick = () => {
    console.log("¡Botón clickeado en Hero!");
  };
  return (
    <header id="hero" className="relative z-10">
      <section className="relative z-10">
        <Navbar />
        <div className="flex items-center justify-center content-center z-20 hover:scale-[1.05] transition-all duration-500">
          <span className="inline-block border-transparent text-shadow z-20 text-[#141418] font-extrabold backdrop-blur-md bg-gray-500/50 hover:bg-gray-800/50 cursor-pointer hover:text-white transition-all duration-500 px-3 py-1 text-sm rounded-full border mt-24 box-shadow">
            &lt; Frontend Developer /&gt;
          </span>
        </div>
        <h1 className="flex z-20 text-5xl mt-10 font-extrabold text-shadow mb-6 tracking-tight items-center content-center justify-center relative">
          Alex Moncada
        </h1>
        <h2 className="flex z-20 font-extrabold text-shadow mb-6 tracking-tight items-center content-center justify-center relative">
          Creando Experiencias Digitales
        </h2>
        <p className="text-center z-20 text-[#141418] text-shadow font-semibold max-w-4xl relative">
          Construyo aplicaciones web modernas con tecnología de punta y diseño
          de píxeles perfectos
        </p>
        <div className="flex flex-col justify-center items-center mt-5 gap-4">
          <Button
            text="Proyectos"
            onClick={handleClick}
            href="https://www.google.com"
            className="btn text-[#141418] text-shadow z-20 box-shadow items-center justify-center content-center bg-transparent w-48"
          />
          <Button
            text="Contáctame"
            onClick={handleClick}
            href="https://www.google.com"
            className="btn text-[#141418] text-shadow z-20 box-shadow items-center justify-center content-center bg-transparent"
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
