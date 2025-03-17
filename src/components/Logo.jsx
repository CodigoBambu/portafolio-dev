import React from "react";

const Logo = ({ icon }) => {
  return (
    <div className="flex items-center gap-2 group">
      {icon}
      <a
        href="/"
        className="text-[#141418] font-bold group-hover:text-gray-100 text-shadow transition-colors duration-200"
      >
        CodigoBambu
      </a>
    </div>
  );
};

export default Logo;
