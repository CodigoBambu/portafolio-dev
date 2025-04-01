import React, { useEffect, useRef } from "react";

const CursorEffect = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
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
          "radial-gradient(circle, rgba(218, 218, 218, 0.350) 0%, rgba(0, 255, 255, 0) 70%)",
      }}
    />
  );
};

export default CursorEffect;
