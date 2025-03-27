import React from "react";
import { motion } from "framer-motion";

const Transition = ({ onAnimationEnd }) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-[#202020] backdrop-blur-2xl z-50"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-[#474747d5] backdrop-blur-2xl z-40"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-[#838383c7] backdrop-blur-2xl z-30"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        onAnimationComplete={onAnimationEnd}
      />
    </>
  );
};

export default Transition;
