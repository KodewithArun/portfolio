import { useEffect, useRef, useState } from "react";

// Creative, smooth trailing cursor with interactive effects
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailingRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trailing = trailingRef.current;
    if (!cursor || !trailing) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailingX = mouseX;
    let trailingY = mouseY;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    // Smooth trailing effect
    const animate = () => {
      trailingX += (mouseX - trailingX) * 0.18;
      trailingY += (mouseY - trailingY) * 0.18;
      trailing.style.left = trailingX + "px";
      trailing.style.top = trailingY + "px";
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", moveCursor);

    // Interactive effects
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    // Hover effect for links & buttons
    const handlePointerOver = (e) => {
      if (e.target.closest("a,button,.cursor-pointer,input,textarea,label,select")) {
        setIsHovering(true);
      }
    };
    const handlePointerOut = (e) => {
      if (e.target.closest("a,button,.cursor-pointer,input,textarea,label,select")) {
        setIsHovering(false);
      }
    };
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  // Main cursor style
  const cursorStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    width: isClicking ? 18 : isHovering ? 38 : 28,
    height: isClicking ? 18 : isHovering ? 38 : 28,
    borderRadius: "50%",
    background: isHovering ? "rgba(59,130,246,0.18)" : "rgba(0,0,0,0.12)",
    border: isHovering ? "2.5px solid #3b82f6" : "2px solid #222",
    pointerEvents: "none",
    zIndex: 9999,
    transform: "translate(-50%, -50%)",
    transition: "width 0.18s, height 0.18s, background 0.2s, border 0.2s"
  };

  // Trailing effect style
  const trailingStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    width: isClicking ? 38 : isHovering ? 54 : 44,
    height: isClicking ? 38 : isHovering ? 54 : 44,
    borderRadius: "50%",
    background: isHovering ? "rgba(59,130,246,0.10)" : "rgba(0,0,0,0.07)",
    border: "none",
    pointerEvents: "none",
    zIndex: 9998,
    transform: "translate(-50%, -50%)",
    filter: "blur(2.5px)",
    transition: "width 0.22s, height 0.22s, background 0.2s"
  };

  return (
    <>
      <div ref={trailingRef} style={trailingStyle} />
      <div ref={cursorRef} style={cursorStyle} />
    </>
  );
}
