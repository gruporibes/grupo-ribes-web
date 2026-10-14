"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import {
  Layers,
  Server,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const serviceIcons = [Layers, Server, Cpu];

const serviceVisuals = [
  {
    image: "/images/service-mvp.jpg",
    alt: "Especialistas colaborando no planejamento de software moderno",
    title: "Foco no Usuário Final",
  },
  {
    image: "/images/service-squad.jpg",
    alt: "Equipe técnica dedicada atuando na sustentação de sistemas",
    title: "Squad Dedicada & Parceria",
  },
  {
    image: "/images/service-automation.jpg",
    alt: "Automação de processos corporativos e dashboards integrados",
    title: "Eficiência Operacional & ERPs",
  },
];

const SLIDE_DURATION = 6000; // 6 segundos por slide

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // Controla a porcentagem exata (0 a 100)
  const services = siteConfig.services;

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // Atualiza a cada 50ms para um movimento suave
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % services.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, services.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setProgress(0); // Reinicia a barra na troca manual
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setProgress(0); // Reinicia a barra na troca manual
  };

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0); // Reinicia a barra na troca manual
  };

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand font-mono">
          O Que Fazemos
        </h2>
        <p className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white">
          Serviços de tecnologia para cada fase da sua empresa
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Soluções completas com engenharia dedicada, focadas em agilidade e
          pessoas.
        </p>
      </div>

      {/* Container Principal */}
      <div className="relative max-w-5xl mx-auto">
        {/* O hover agora fica apenas no card */}
        <div
          className="overflow-hidden rounded-3xl border border-brand-border/40 bg-zinc-950/70 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-xl relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const visual = serviceVisuals[index % serviceVisuals.length];
            const isActive = index === currentIndex;

            return (
              <div
                key={service.id}
                className={`transition-all duration-700 ease-in-out flex flex-col lg:flex-row gap-10 items-center justify-between ${
                  isActive
                    ? "opacity-100 translate-x-0 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none -translate-x-10"
                }`}
              >
                {/* Lado Esquerdo: Conteúdo Textual */}
                <div className="flex-1 space-y-6 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand-muted border border-brand-border flex items-center justify-center text-brand shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand block mb-2">
                      Frente Estratégica 0{index + 1} de 0{services.length}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-mono text-brand/90 mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand hover:bg-brand-hover text-zinc-950 font-bold text-xs uppercase tracking-wider transition glow-brand"
                    >
                      <span>Conversar sobre este Serviço</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Lado Direito: Imagem Minimalista */}
                <div className="w-full lg:w-95 h-72 sm:h-80 rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden relative shrink-0 group/card shadow-2xl">
                  <Image
                    src={visual.image}
                    alt={visual.alt}
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 450px"
                    priority={index === 0}
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-sm font-semibold text-white tracking-wide block">
                      {visual.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Barra de Progresso Congelável no Local Exato */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
            <div
              className="h-full bg-brand transition-[width] duration-75 ease-linear shadow-[0_0_8px_#E2C5AA]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Controles de Navegação */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div className="flex items-center gap-2.5">
            {services.map((service, idx) => (
              <button
                type="button"
                key={service.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Ir para serviço ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-brand shadow-[0_0_10px_rgba(226,197,170,0.5)]"
                    : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Serviço anterior"
              className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo serviço"
              className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
