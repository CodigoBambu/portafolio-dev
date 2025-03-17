import { div, section } from "framer-motion/client";
import { Youtube, Instagram } from "lucide-react";
import React from "react";

const AboutMe = () => {

    const socialMedia = [
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5 text-[#141418] group-hover:text-gray-100 icon-shadow" />,
      link: "https://www.youtube.com",
      id: "1",
    },

    {
        name: "Instagram",
        icon: <Instagram className="w-5 h-5 text-[#141418] group-hover:text-gray-100 icon-shadow" />,
        link: "https://www.youtube.com",
        id: "1",
      },
    ]

  return (
    <section>
      <div className="flex-col justify-center items-center content-center text-center p-3 m-3">
        <p className="text-[#141418] text-shadow font-bold">
          Soy un desarrollador <strong className="text-white">Frontend </strong>
          apasionado por la{" "}
          <strong className="text-white">tecnología y el diseño web.</strong> Me
          encanta construir{" "}
          <strong className="text-white">
            experiencias digitales atractivas y funcionales.{" "}
          </strong>
          Además, comparto mi conocimiento en{" "}
          <strong className="text-white">"CódigoBambu"</strong> , donde creo
          contenido educativo sobre{" "}
          <strong className="text-white">programación y desarrollo web.</strong>
        </p>
      </div>
      <div>
        {socialMedia.map((item, id) => {
            return (
                <a
                key={id}
                href={item.link}
                className="text-[#141418] text-shadow font-bold hover:text-gray-100 transition-colors duration-300 flex items-center gap-2 group"
                >
                {item.icon}
                {item.name}
                </a>
            );º
        })}
      </div>
    </section>
  );
};

export default AboutMe;
