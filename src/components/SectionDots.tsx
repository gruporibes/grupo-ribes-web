"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Início" },
  { id: "services", label: "Serviços" },
  { id: "solutions", label: "Soluções" },
  { id: "models", label: "Modelos" },
  { id: "tech", label: "Tecnologias" },
  { id: "cases", label: "Estudos de Caso" },
  { id: "contact", label: "Contato" },
];

export function SectionDots() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    // Se for o início, rola até o topo zero (sem deixar vão)
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Barra de progresso mobile */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-zinc-900/50 z-50 lg:hidden">
        <div
          className="h-full bg-brand transition-all duration-150 ease-out shadow-[0_0_8px_#E2C5AA]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Indicadores laterais desktop */}
      <nav
        aria-label="Navegação por seções"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4 pointer-events-auto"
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              aria-label={`Ir para ${section.label}`}
              className="group relative flex items-center justify-end w-7 h-7 cursor-pointer outline-none"
            >
              <span className="absolute right-9 whitespace-nowrap text-xs font-mono uppercase tracking-wider transition-all duration-200 opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 bg-zinc-900/90 border border-zinc-800 text-brand py-1 px-2.5 rounded shadow-lg backdrop-blur-sm pointer-events-none">
                {section.label}
              </span>

              <div className="relative flex items-center justify-center">
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-6 bg-brand shadow-[0_0_12px_rgba(226,197,170,0.5)]"
                      : "w-2 h-2 bg-zinc-700 group-hover:bg-zinc-400 group-hover:scale-125"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </nav>
    </>
  );
}
