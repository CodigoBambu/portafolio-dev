import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Code, Monitor, User, Home, Mail, Leaf } from "lucide-react"; 
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? "py-3 backdrop-blur-[5px] box-shadow" : "py-5 "
  }`;

  const navItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const menuItems = [
    {
      name: "Home",
      icon: (
        <Home className="w-5 h-5 text-[#141418] group-hover:text-gray-100 icon-shadow" />
      ),
      link: "/",
    },
    {
      name: "Projects",
      icon: (
        <Code className="w-5 h-5 text-[#141418] group-hover:text-gray-100 icon-shadow" />
      ),
      link: "/#projects",
    },
    {
      name: "Skills",
      icon: (
        <Monitor className="w-5 h-5 text-[#141418] group-hover:text-gray-100 icon-shadow" />
      ),
      link: "/#skills",
    },
    {
      name: "About",
      icon: (
        <User className="w-5 h-5 text-[#141418] group-hover:text-gray-100 icon-shadow" />
      ),
      link: "/#about",
    },
    {
      name: "Contact",
      icon: (
        <Mail className="w-5 h-5 text-[#141418] group-hover:text-gray-100 icon-shadow" />
      ),
      link: "/#contact",
    },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center w-full px-4">
        <Logo
          icon={
            <Leaf className="w-6 h-6 text-[#141418] group-hover:text-gray-100 icon-shadow transition-colors duration-300 cursor-pointer" />
          }
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={item.link}
                className="text-[#141418] text-shadow font-extrabold hover:text-gray-100 transition-colors duration-300 flex items-center gap-2 group"
              >
                {item.icon}
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className=" text-[#141418]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-7 h-7 icon-shadow text-[#1414118] font-extrabold" /> : <Menu className="w-7 h-7 icon-shadow" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            height: "auto",
            opacity: 1,
            transition: {
              duration: 0.5,
              staggerChildren: 0.1,
            },
          },
          closed: {
            height: 0,
            opacity: 0,
            transition: {
              duration: 0.5,
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        className="md:hidden overflow-hidden text-[#141418] text-shadow font-extrabold backdrop-blur-[5px]"
      >
        <div className="flex flex-col items-center px-4 py-2 space-y-4">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={navItemVariants}
              className="flex flex-col items-center"
            >
              <a
                href={item.link}
                className="py-4 flex items-center gap-2 group"
                onClick={() => setIsOpen(false)}
              >
                {React.cloneElement(item.icon, {
                  className: "w-6 h-6 group-hover:text-blue-500 icon-shadow text-[#1414118] ",
                })}
                <span>{item.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
