import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/MenuNav";
import Logo from "../components/Logo";
import SocialMediaLinks from "../components/SocialMedia";
import LavaBackground from "../components/LavaBackground";

const Hero = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const textRef = useRef(null);

  const phrase1 = "Transformando ideas en";
  const phrase2 = "Experiencias Digitales";
  const typingSpeed = 100;

  useEffect(() => {
    let i = 0;
    const interval1 = setInterval(() => {
      if (i < phrase1.length) {
        setText1(phrase1.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval1);
        let j = 0;
        const interval2 = setInterval(() => {
          if (j < phrase2.length) {
            setText2(phrase2.slice(0, j + 1));
            j++;
          } else {
            clearInterval(interval2);
          }
        }, typingSpeed);
      }
    }, typingSpeed);
    return () => {
      clearInterval(interval1);
    };
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      const originalText = text.textContent;
      const chars = "!<>-_\\/[]{}—=+*^?#";

      let iterations = 0;
      const interval = setInterval(() => {
        text.textContent = text.textContent
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iterations >= originalText.length) {
          clearInterval(interval);
          text.textContent = originalText;
        }

        iterations += 1 / 3;
      }, 35);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <header id="hero" className="relative z-10 content-center md:-mt-10">
      <LavaBackground />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <Navbar />
      <motion.section
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-full flex justify-center items-center md:w-80">
          <Logo />
        </div>
        <SocialMediaLinks />
        <div className="flex items-center justify-center content-center z-20 transition-all duration-500 md:mt-10">
          <motion.span
            ref={textRef}
            className="inline-block border-transparent text-shadow z-20 text-[#141418] hover:scale-[1.05] font-extrabold backdrop-blur-md bg-gray-500/50 hover:bg-gray-800/50 cursor-pointer hover:text-white transition-all duration-500 px-3 py-1 text-sm rounded-full border mt-10 mb-6 box-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            &lt; Frontend Developer /&gt;
          </motion.span>
        </div>
        <h1 className="flex flex-col z-20 font-extrabold text-[28px] text-shadow mb-6 tracking-tight items-center justify-center relative md:text-5xl">
          <span>{text1}</span>
          <strong className="text-white">{text2}</strong>
        </h1>
        <p className="text-center z-20 text-[#141418] text-shadow font-semibold relative md:max-w-2xl md:text-center md:mx-auto">
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
      </motion.section>
    </header>
  );
};

export default Hero;
