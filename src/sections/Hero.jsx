import { div, header } from "framer-motion/client";
import { section } from "framer-motion/m";
import {
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Music2,
  AtSign,
} from "lucide-react";
import Navbar from "../components/MenuNav";
import Logo from "../components/Logo";
import React from "react";

const Hero = () => {
  const handleClick = () => {
    console.log("¡Botón clickeado en Hero!");
  };
  const socialMedia = [
    {
      id: "linkedin",
      icon: (
        <Linkedin className="w-5 h-5 text-[#141418] icon-shadow md:w-6 md:h-6 hover:scale-120 hover:text-white transition-all duration-500" />
      ),
      link: "https://www.linkedin.com/in/alexmoncadap/",
    },
    {
      id: "github",
      icon: (
        <Github className="w-5 h-5 text-[#141418] icon-shadow md:w-6 md:h-6 hover:scale-120 hover:text-white transition-all duration-500" />
      ),
      link: "#",
    },
    {
      id: "youtube",
      icon: (
        <Youtube className="w-5 h-5 text-[#141418] icon-shadow md:w-6 md:h-6 hover:scale-120 hover:text-white transition-all duration-500" />
      ),
      link: "#",
    },
    {
      id: "instagram",
      icon: (
        <Instagram className="w-5 h-5 text-[#141418]e icon-shadow md:w-6 md:h-6 hover:scale-120 hover:text-white transition-all duration-500" />
      ),
      link: "#",
    },
    {
      id: "tiktok",
      icon: (
        <Music2 className="w-5 h-5 text-[#141418] icon-shadow md:w-6 md:h-6 hover:scale-120 hover:text-white transition-all duration-500" />
      ),
      link: "#",
    },
    {
      id: "treads",
      icon: (
        <AtSign className="w-5 h-5 text-[#141418] icon-shadow md:w-6 md:h-6 hover:scale-120 hover:text-white transition-all duration-500" />
      ),
      link: "#",
    },
  ];
  return (
    <header id="hero" className="relative z-10">
      <section className="relative z-10">
        <Navbar />
        <div className="w-full flex justify-center items-center md:w-80">
          <Logo />
        </div>
        <div className="flex justify-center items-center -mt-5 space-x-5 md:justify-end md:mr-13 md:-mt-15 ">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-center content-center z-20 transition-all duration-500 md:mt-10">
          <span className="inline-block border-transparent text-shadow z-20 text-[#141418] hover:scale-[1.05] font-extrabold backdrop-blur-md bg-gray-500/50 hover:bg-gray-800/50 cursor-pointer hover:text-white transition-all duration-500 px-3 py-1 text-sm rounded-full border mt-10 mb-6 box-shadow">
            &lt; Frontend Developer /&gt;
          </span>
        </div>
        <h1 className="flex flex-col z-20 font-extrabold text-[28px] text-shadow mb-6 tracking-tight items-center justify-center relative md:text-5xl">
          <span>Transformando ideas en</span>
          <strong className="text-white">Experiencia Digitales</strong>
        </h1>
        <p className="text-center z-20 text-[#141418] text-shadow font-semibold max-w-4xl relative md:max-w-2xl md:text-center md:mx-auto">
          Construyo aplicaciones
          <strong className="text-white"> Web Modernas </strong>con{" "}
          <strong className="text-white">Tecnología de Punta</strong> y diseño
          de <strong className="text-white">Píxeles Perfectos.</strong>
        </p>
        <div className="h-25 flex items-center justify-center">
          <button className="button relative min-w-50 min-h-10 inline-flex font-sans text-2xl items-center justify-center uppercase text-center tracking-[1.3px] font-bold text-gray-800 bg-[#22222228] hover:bg-[#22222291] backdrop-blur-2xl border-none rounded-full box-shadow text-shadow hover:text-white transition-all duration-500 cursor-pointer outline-none p-2">
            Submit
          </button>
        </div>
      </section>
    </header>
  );
};

export default Hero;
