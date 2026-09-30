"use client";

import { useState } from "react";
import { MessageCircle, X, ChevronLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const [isMinimized, setIsMinimized] = useState(false);

  const whatsappNumber = siteConfig.contact?.whatsappNumber || "5511999999999";
  const whatsappMessage =
    siteConfig.contact?.whatsappMessage ||
    "Olá! Gostaria de conversar com a liderança técnica do Grupo Ribes sobre um projeto.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // ESTADO 1: MINIMIZADO (Apenas o ícone circular flutuante + botão discreto para re-expandir)
  if (isMinimized) {
    return (
      <aside
        aria-label="Atendimento rápido"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      >
        {/* Botão sutil para re-expandir */}
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          aria-label="Expandir botão de WhatsApp"
          title="Expandir texto"
          className="p-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition shadow-lg backdrop-blur-md"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Ícone Circular do WhatsApp (abre a conversa direto) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
          title="Conversar no WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900/95 hover:bg-zinc-800 border border-zinc-700/80 hover:border-brand-border text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:text-brand transition-colors" />
          <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
        </a>
      </aside>
    );
  }

  // ESTADO 2: EXPANDIDO (Pílula com texto + botão X para minimizar)
  return (
    <aside
      aria-label="Atendimento rápido"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/95 hover:bg-zinc-800 border border-zinc-700/80 hover:border-brand-border text-white shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-brand transition-colors" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
        </div>

        <span className="text-xs font-semibold text-zinc-200 group-hover:text-brand transition-colors">
          WhatsApp
        </span>
      </a>

      {/* Botão X para minimizar */}
      <button
        type="button"
        onClick={() => setIsMinimized(true)}
        aria-label="Minimizar botão de WhatsApp"
        title="Minimizar"
        className="p-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
