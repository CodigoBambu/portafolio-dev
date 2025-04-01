import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import Logo from "../components/Logo";
import SocialMediaLinks from "../components/SocialMediaLinks";
import CursorEffect from "../components/CursorEfect";
import { motion } from "framer-motion";

const TailwindIcon = () => (
  <svg
    className="w-10 h-10 text-[#141418] icon-shadow"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
  </svg>
);

const AboutMe = () => {
  const skills = [
    {
      name: "HTML",
      description: "Lenguaje de marcado estándar para crear páginas web.",
      icon: <FaHtml5 className="text-4xl text-[#141418] icon-shadow" />,
    },
    {
      name: "CSS",
      description:
        "Lenguaje de hojas de estilo utilizado para diseñar la presentación de documentos HTML.",
      icon: <FaCss3Alt className="text-4xl text-[#141418] icon-shadow" />,
    },
    {
      name: "JavaScript",
      description:
        "Lenguaje de programación que permite crear contenido dinámico en las páginas web.",
      icon: <FaJsSquare className="text-4xl text-[#141418] icon-shadow" />,
    },
    {
      name: "React",
      description:
        "Biblioteca de JavaScript para construir interfaces de usuario interactivas.",
      icon: <FaReact className="text-4xl text-[#141418] icon-shadow" />,
    },
    {
      name: "Tailwind CSS",
      description:
        "Framework CSS de utilidad que permite crear diseños personalizados de forma rápida.",
      icon: <TailwindIcon />,
    },
  ];

  const [flippedSkill, setFlippedSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-black text-white min-h-screen p-8 flex flex-col">
      <CursorEffect />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full flex justify-center items-center md:w-80 cursor-pointer z-10">
          <Logo />
        </div>
        <SocialMediaLinks />
        <div className="mt-8 lg:flex z-10 lg:justify-between">
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:max-w-145 lg:text-left justify-center"
          >
            <h2 className="text-3xl font-bold text-shadow text-[#141418] hover:text-white cursor-pointer transition-all duration-500 mb-1 lg:-mb-2 text-center lg:text-left">
              Sobre Mí
            </h2>
            <p className="text-[#141418] text-shadow font-bold text-center my-5 lg:text-left">
              Soy un desarrollador{" "}
              <strong className="text-white">Frontend</strong> apasionado por la{" "}
              <strong className="text-white">
                tecnología y el diseño web.
              </strong>{" "}
              Me encanta construir{" "}
              <strong className="text-white">
                experiencias digitales atractivas y funcionales.
              </strong>{" "}
              Además, comparto mi conocimiento en{" "}
              <strong className="text-white">"CódigoBambu"</strong>, donde creo
              contenido educativo sobre{" "}
              <strong className="text-white">
                programación y desarrollo web.
              </strong>{" "}
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <h2 className="text-3xl text-[#141418] text-shadow font-bold mb-8 text-center lg:text-center hover:text-white cursor-pointer transition-all duration-500">
              Mis Habilidades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.slice(0, 4).map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="relative w-full h-40 lg:h-30 rounded-3xl bg-transparent cursor-pointer transition-all duration-500"
                  onMouseEnter={() => setFlippedSkill(skill.name)}
                  onMouseLeave={() => setFlippedSkill(null)}
                >
                  <div
                    className={`card w-full h-full transform transition-transform duration-500 ${
                      flippedSkill === skill.name ? "rotate-y-180" : ""
                    }`}
                  >
                    <div className="front absolute inset-0 flex items-center justify-center box-shadow rounded-3xl bg-transparent backface-hidden">
                      {skill.icon}
                    </div>
                    <div className="back absolute inset-0 flex flex-col items-center justify-center box-shadow bg-[#222] text-[#141418] text-shadow rounded-3xl rotate-y-180 backface-hidden">
                      <h3 className="text-xl font-extrabold">{skill.name}</h3>
                      <p className="text-l font-extrabold text-center px-4">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {skills.length > 4 && (
                <motion.div
                  key={skills[4].name}
                  variants={itemVariants}
                  className="relative w-full h-40 lg:h-30 rounded-3xl bg-transparent sm:col-span-2 flex justify-center"
                  onMouseEnter={() => setFlippedSkill(skills[4].name)}
                  onMouseLeave={() => setFlippedSkill(null)}
                >
                  <div
                    className={`card w-full h-full transform transition-transform duration-500 cursor-pointer ${
                      flippedSkill === skills[4].name ? "rotate-y-180" : ""
                    }`}
                  >
                    <div className="front absolute inset-0 flex items-center justify-center box-shadow rounded-3xl bg-transparent backface-hidden">
                      {skills[4].icon}
                    </div>
                    <div className="back absolute inset-0 flex flex-col items-center justify-center box-shadow bg-[#222] text-[#141418] text-shadow rounded-3xl rotate-y-180 backface-hidden">
                      <h3 className="text-xl font-extrabold">
                        {skills[4].name}
                      </h3>
                      <p className="text-l font-extrabold text-center px-4">
                        {skills[4].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
