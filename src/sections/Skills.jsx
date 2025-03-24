import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

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

const Skills = () => {
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

  const [expandedSkill, setExpandedSkill] = useState(null);

  const handleMouseEnter = (skillName) => {
    setExpandedSkill(skillName);
  };

  const handleMouseLeave = () => {
    setExpandedSkill(null);
  };

  return (
    <section className="bg-black text-[#141418] text-shadow py-18" id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-4 border box-shadow backdrop-blur-2xl rounded-md transition-height duration-300 overflow-hidden ${
                expandedSkill === skill.name ? "h-50 w-65" : "h-24 w-65"
              } flex flex-col items-center`}
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-center mb-2">{skill.icon}</div>
              <h3 className="text-xl font-extrabold text-center">
                {skill.name}
              </h3>
              <p className="mt-2 text-center font-bold">
                {expandedSkill === skill.name && skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
