import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Code, Monitor, User, Home, Mail } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = {
    hero: useRef(null),
    aboutme: useRef(null),
    skills: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      checkActiveSection();
    };

    const checkActiveSection = () => {
      for (const sectionId in sectionRefs) {
        const section = sectionRefs[sectionId].current;
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      id: "inicio",
      icon: <Home />,
      link: "/#hero",
      sectionId: "hero",
    },
    {
      id: "sobre mi",
      icon: <User />,
      link: "/#aboutme",
      sectionId: "aboutme",
    },
    {
      id: "skills",
      icon: <Monitor />,
      link: "/#skills",
      sectionId: "skills",
    },
    {
      id: "proyectos",
      icon: <Code />,
      link: "/#about",
      sectionId: "about",
    },
    {
      id: "contact",
      icon: <Mail />,
      link: "/#contact",
      sectionId: "contact",
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full backdrop-blur-[2px] box-shadow flex justify-around py-4 z-100 md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-10 md:h-80 md:rounded-tl-3xl md:rounded-bl-3xl md:flex-col">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          className="flex items-center justify-center"
        >
          {React.cloneElement(item.icon, {
            className:
              item.sectionId === activeSection
                ? "w-6 h-6 text-white icon-shadow md:ml-1"
                : "w-6 h-6 text-[#141418] icon-shadow hover:scale-120 hover:text-white transition-all duration-500 md:ml-1",
          })}
        </Link>
      ))}

      {Object.keys(sectionRefs).map((sectionId) => (
        <div
          key={sectionId}
          ref={sectionRefs[sectionId]}
          id={sectionId}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1px",
            height: "1px",
          }}
        ></div>
      ))}
    </nav>
  );
};

export default Navbar;
