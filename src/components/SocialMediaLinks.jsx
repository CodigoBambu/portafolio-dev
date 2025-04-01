import React from "react";
import {
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Music2,
  AtSign,
} from "lucide-react";

const SocialMediaLinks = () => {
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
        <Instagram className="w-5 h-5 text-[#141418] icon-shadow md:w-6 md:h-6 hover:scale-120 hover:text-white transition-all duration-500" />
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
  );
};

export default SocialMediaLinks;
