"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // em milissegundos (ex: 150 para cascata)
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Readonly<RevealProps>) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Uma vez visível, não anima de novo para não incomodar
        }
      },
      {
        threshold: 0.1, // Dispara assim que 10% do elemento entrar na tela
        rootMargin: "0px 0px -40px 0px", // Margem segura inferior
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0";

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-8";
      case "down":
        return "opacity-0 -translate-y-8";
      case "left":
        return "opacity-0 translate-x-8";
      case "right":
        return "opacity-0 -translate-x-8";
      case "none":
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "800ms",
      }}
      className={`transition-all ease-out will-change-[transform,opacity] ${getTransformStyle()} ${className}`}
    >
      {children}
    </div>
  );
}
