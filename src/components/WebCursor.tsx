import { useEffect, useCallback, useRef } from "react";

const WebCursor = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createWebEffect = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "60");
    svg.setAttribute("height", "60");
    svg.style.position = "fixed";
    svg.style.left = `${x - 30}px`;
    svg.style.top = `${y - 30}px`;
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "9999";
    svg.classList.add("web-click");

    const lines = 8;
    for (let i = 0; i < lines; i++) {
      const angle = (i * 360) / lines;
      const rad = (angle * Math.PI) / 180;
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", "30");
      line.setAttribute("y1", "30");
      line.setAttribute("x2", String(30 + Math.cos(rad) * 28));
      line.setAttribute("y2", String(30 + Math.sin(rad) * 28));
      line.setAttribute("stroke", "hsl(355, 85%, 52%)");
      line.setAttribute("stroke-width", "1.5");
      line.setAttribute("opacity", "0.7");
      svg.appendChild(line);
    }

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "30");
    circle.setAttribute("cy", "30");
    circle.setAttribute("r", "4");
    circle.setAttribute("fill", "hsl(355, 85%, 52%)");
    circle.setAttribute("opacity", "0.8");
    svg.appendChild(circle);

    containerRef.current.appendChild(svg);
    setTimeout(() => svg.remove(), 600);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => createWebEffect(e.clientX, e.clientY);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [createWebEffect]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default WebCursor;