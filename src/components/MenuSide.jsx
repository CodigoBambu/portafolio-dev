import React, { useState, useEffect } from "react";
import {
  Code,
  Monitor,
  User,
  Home,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SideMenu = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    setIsOpen(false);
  };

  return (
    <div
      className="fixed h-full right-0 top-1/2 transform -translate-y-1/2 z-50 flex items-center"
      onMouseEnter={!isMobile ? () => setIsOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsOpen(false) : undefined}
      onClick={isMobile ? () => setIsOpen(!isOpen) : undefined}
    >
      <nav
        className={`fixed w-10 h-5/6 rounded-l-2xl -right-1 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } backdrop-blur-[2px] box-shadow flex flex-col justify-around py-4 md:w-10 md:h-80 md:rounded-tl-3xl md:rounded-bl-3xl`}
        onClick={() => setIsOpen(false)}
      >
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
                  ? "w-6 h-6 text-white icon-shadow cursor-pointer"
                  : "w-6 h-6 text-[#141418] icon-shadow hover:scale-120 hover:text-white transition-all duration-500 cursor-pointer",
            })}
          </button>
        ))}
      </nav>

      <button
        className={`bg-transparent cursor-pointer box-shadow h-20 rounded-l-xl shadow-lg fixed top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isOpen ? "right-[42px]" : "right-0"
        } hover:scale-110`}
      >
        {isOpen ? (
          <ChevronRight className="w-6 h-6 text-gray-800 icon-shadow" />
        ) : (
          <ChevronLeft className="w-6 h-6 text-black icon-shadow" />
        )}
      </button>
    </div>
  );
};

export default SideMenu;
