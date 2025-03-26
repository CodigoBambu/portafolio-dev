import React from "react";
import { Leaf } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 group text-3xl md:text-2xl">
      <Leaf className="w-10 h-25 text-[#141418] group-hover:text-gray-100 icon-shadow transition-colors duration-300 cursor-pointer md:w-8" />
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
