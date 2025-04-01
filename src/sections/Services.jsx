import React from "react";
import { Monitor, Palette, Code, Brain, PenTool, BookOpen } from "lucide-react";
import Logo from "../components/Logo";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Services = () => {
  const characteristics = [
    {
      id: "web-developer",
      title: "Web Developer",
      icon: (
        <Monitor className="w-30 h-8 -ml-10 group-hover:text-white text-[#141418] icon-shadow transition-colors duration-300" />
      ),
      description:
        "Me especializo en crear sitios web modernos y responsivos, utilizando tecnologías actuales para ofrecer la mejor experiencia de usuario en diferentes dispositivos.",
    },
    {
      id: "frontend-enthusiast",
      title: "Frontend Enthusiast",
      icon: (
        <Palette className="w-30 h-8 -ml-10 group-hover:text-white text-[#141418] icon-shadow transition-colors duration-300" />
      ),
      description:
        "Me apasiona el diseño y la interacción. Busco crear interfaces intuitivas, atractivas y funcionales con tecnologías como React y Tailwind CSS.",
    },
    {
      id: "clean-code-lover",
      title: "Lover of Clean Code",
      icon: (
        <Code className="w-30 h-8 -ml-10 group-hover:text-white text-[#141418] icon-shadow transition-colors duration-300" />
      ),
      description:
        "Me esfuerzo por escribir código limpio, modular y reutilizable, aplicando buenas prácticas para que sea fácil de mantener y escalar.",
    },
    {
      id: "problem-solver",
      title: "Problem Solver",
      icon: (
        <Brain className="w-30 h-8 -ml-10 group-hover:text-white text-[#141418] icon-shadow transition-colors duration-300" />
      ),
      description:
        "Disfruto enfrentar desafíos y encontrar soluciones creativas a problemas complejos, siempre buscando la mejor manera de optimizar mi código.",
    },
    {
      id: "content-creator",
      title: "Content Creator",
      icon: (
        <PenTool className="w-30 h-8 -ml-10 group-hover:text-white text-[#141418] icon-shadow transition-colors duration-300" />
      ),
      description:
        "Comparto mi aprendizaje y experiencias en programación a través de contenido educativo, ayudando a otros a mejorar sus habilidades.",
    },
    {
      id: "always-learning",
      title: "Always Learning",
      icon: (
        <BookOpen className="w-30 h-8 -ml-10 group-hover:text-white text-[#141418] icon-shadow transition-colors duration-300" />
      ),
      description:
        "Estoy en constante aprendizaje, manteniéndome actualizado con nuevas tecnologías y tendencias para mejorar mis habilidades y conocimientos.",
    },
  ];

  return (
    <section className="py-6 px-5 mb-10" id="services">
      <div className="w-full flex justify-center items-center md:w-80 cursor-pointer z-10">
        <Logo />
      </div>
      <SocialMediaLinks />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-shadow">
        {characteristics.map((char) => (
          <div
            key={char.id}
            className="p-4 border rounded-lg flex-col shadow-md backdrop-blur-2xl bg-transparent box-shadow flex items-start gap-2 
                       hover:scale-102 hover:text-white hover:shadow-lg hover:text-shadow-lg cursor-pointer transition-all duration-500 text-[#141418] group"
          >
            {char.icon}
            <div>
              <h3 className="text-lg mb-1 font-semibold">{char.title}</h3>
              <p className="text-sm font-semibold ">{char.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
