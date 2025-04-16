import React, { useEffect, useRef, useState } from "react";

const CursorEffect = () => {
  const cursorRef = useRef(null);
  const [opacity, setOpacity] = useState(1); // Inicialmente visible

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const intervalId = setInterval(() => {
      setOpacity((prevOpacity) => (prevOpacity === 1 ? 0.3 : 1)); // Cambia entre 1 y 0.3
    }, 1500); // Ajusta la velocidad del parpadeo (1500ms = 1.5 segundos)

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-neon"
      style={{
        position: "fixed",
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(218, 218, 218, 0.350) 0%, rgba(0, 255, 255, 0) 80%)",
        zIndex: "1",
        transition: "opacity 1s ease-in-out", 
        opacity: opacity,
      }}
    />
  );
};

export default CursorEffect;