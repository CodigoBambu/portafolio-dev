import React, { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100));
      } else {
        setTimeout(onLoadingComplete, 500);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative transition-transform duration-1000 ${
          progress === 100 ? "scale-150" : "scale-100"
        }`}
      >
        <Leaf
          className="w-24 h-24 transition-all duration-300"
          style={{
            color: `rgb(${Math.floor((0 * progress) / 100)}, ${Math.floor(
              (0 * progress) / 0
            )}, ${Math.floor((255 * progress) / 100)})`,
            filter: `drop-shadow(0 0 ${progress / 10}px rgb(${Math.floor(
              (255 * progress) / 100
            )}, ${Math.floor((255 * progress) / 100)}, ${Math.floor(
              (255 * progress) / 100
            )})`,
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
