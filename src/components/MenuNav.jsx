import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Monitor, User, Home, Mail } from "lucide-react";

const Navbar = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    {
      id: "inicio",
      icon: <Home />,
      link: "/",
      sectionId: "hero",
      tooltip: "Inicio",
    },
    {
      id: "sobre mi",
      icon: <User />,
      link: "/aboutme",
      sectionId: "aboutme",
      tooltip: "Sobre mí",
    },
    {
      id: "skills",
      icon: <Monitor />,
      link: "/skills",
      sectionId: "skills",
      tooltip: "Habilidades",
    },
    {
      id: "proyectos",
      icon: <Code />,
      link: "/about",
      sectionId: "about",
      tooltip: "Proyectos",
    },
    {
      id: "contact",
      icon: <Mail />,
      link: "/contact",
      sectionId: "contact",
      tooltip: "Contacto",
    },
  ];

  const handleLinkClick = (sectionId, path) => {
    setActiveSection(sectionId);
    onNavigate(path);
  };

  return (
    <nav className="fixed bottom-0 w-full backdrop-blur-[2px] box-shadow flex justify-around py-4 z-100 md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-10 md:h-80 md:rounded-tl-3xl md:rounded-bl-3xl md:flex-col">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className="flex items-center justify-center"
          title={item.tooltip}
          onClick={() => handleLinkClick(item.sectionId, item.link)}
        >
          {React.cloneElement(item.icon, {
            className:
              item.sectionId === activeSection
                ? "w-6 h-6 text-white icon-shadow md:ml-1 cursor-pointer"
                : "w-6 h-6 text-[#141418] icon-shadow hover:scale-120 hover:text-white transition-all duration-500 md:ml-1 cursor-pointer",
          })}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
