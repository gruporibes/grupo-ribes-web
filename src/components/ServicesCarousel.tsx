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

const serviceIcons = [Layers, Server, Cpu];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const services = siteConfig.services;

  // Troca automática de card a cada 6 segundos (se não estiver com o mouse em cima)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section
      id="services"
      className="py-28 px-6 max-w-7xl mx-auto relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
          O Que Fazemos
        </h2>
        <p className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white">
          Serviços de tecnologia para cada fase da sua empresa
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Explore nossas frentes de engenharia voltadas a performance e
          automação.
        </p>
      </div>

      {/* Container Principal do Card em Destaque */}
      <div className="relative max-w-5xl mx-auto">
        {/* Janela de Visualização */}
        <div className="overflow-hidden rounded-2xl border border-brand-border bg-linear-to-b from-zinc-900/80 via-zinc-900/40 to-zinc-950 p-8 md:p-14 shadow-2xl backdrop-blur-xl relative group">
          {/* Elemento gráfico de fundo para dar calor visual */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const isActive = index === currentIndex;

            return (
              <div
                key={service.id}
                className={`transition-all duration-700 ease-in-out flex flex-col md:flex-row gap-8 items-center justify-between ${
                  isActive
                    ? "opacity-100 translate-x-0 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none -translate-x-10"
                }`}
              >
                {/* Lado Esquerdo: Conteúdo Principal */}
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-muted border border-brand-border flex items-center justify-center text-brand shadow-inner">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand block mb-2">
                      Serviço Especializado 0{index + 1} / 0{services.length}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-mono text-brand/90 mt-1.5">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-zinc-300 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-md bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand hover:bg-brand-hover text-zinc-950 font-bold text-xs uppercase tracking-wider transition glow-brand"
                    >
                      <span>Contratar este Serviço</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Lado Direito: Elemento visual de destaque / Gráfico abstrato moderno */}
                <div className="w-full md:w-72 h-64 rounded-xl border border-zinc-800 bg-zinc-950/80 p-6 flex flex-col justify-between relative overflow-hidden shrink-0 shadow-inner">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-zinc-400">
                      Grupo Ribes Engine
                    </span>
                    <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                  </div>

                  <div className="relative z-10 space-y-2">
                    <div className="text-2xl font-black text-white font-mono">
                      0{index + 1}.
                    </div>
                    <p className="text-xs text-zinc-400 font-mono leading-tight">
                      Arquitetura focada em performance, estabilidade e retorno
                      sobre o investimento.
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>STATUS: DISPONÍVEL</span>
                    <span className="text-brand">SLA ATIVO</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Barra de Progresso Animada do Carrossel */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
            <div
              key={currentIndex}
              className="h-full bg-brand"
              style={{
                animation: isPaused
                  ? "none"
                  : "progressAnimation 6s linear infinite",
                width: isPaused ? "100%" : "0%",
              }}
            />
          </div>
        </div>

        {/* Controles de Navegação (Setas Laterais e Indicadores de Bolinhas) */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Indicadores (Bolinhas) */}
          <div className="flex items-center gap-2">
            {services.map((service, idx) => (
              <button
                type="button"
                key={service.id}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>

          {/* Setas de Controle Manual */}
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

      {/* Estilo CSS customizado para a barra de progresso rodar suavemente */}
      <style jsx>{`
        @keyframes progressAnimation {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
