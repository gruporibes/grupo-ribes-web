import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
          Histórico de Entrega
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Estudo de Caso em Destaque
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Como atuamos como braço técnico dedicado para sustentação de sistemas
          e criação de APIs de integração.
        </p>
      </div>

      {/* Card Principal */}
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 md:p-12 hover:border-brand-border/60 transition duration-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

        {/* Topo do Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-brand-muted text-brand border border-brand-border">
                Squad Dedicada • Automação & Sustentação
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Consultoria de ERPs
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 max-w-3xl leading-snug">
              Engenharia Dedicada para Criação de APIs e Suporte Operacional a
              ERPs
            </h3>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-zinc-300 bg-zinc-950/80 px-4 py-2.5 rounded-xl border border-zinc-800 self-start md:self-auto">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span>Operação Ativa & Parceria Contínua</span>
          </div>
        </div>

        {/* Miolo: Texto Estratégico + Imagem Limpa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10 items-center">
          {/* Coluna da Esquerda: Narrativa STAR (7 Colunas) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition">
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-1.5">
                01. O Cenário & Demanda
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Empresa especializada em soluções ERP necessitava de uma equipe
                técnica de confiança para atender demandas pontuais de
                integração e garantir a estabilidade operacional de rotinas
                críticas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition">
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-1.5">
                02. A Engenharia Aplicada
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Atuação como braço técnico dedicado: desenvolvimento de APIs
                customizadas para comunicação entre sistemas, manutenção
                preventiva de bancos de dados e atendimento ágil a chamados de
                sustentação.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-brand-border/40 bg-linear-to-r from-brand-muted/20 to-transparent">
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-1.5">
                03. O Impacto Prático no Negócio
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Garantia de continuidade operacional sem interrupções, agilidade
                na entrega de integrações para clientes finais e previsibilidade
                de custos com uma squad externa especializada.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Imagem 100% Limpa, sem caixas de texto flutuantes (5 Colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-72 sm:h-80 md:h-85 w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group/image">
              <Image
                src="/images/case-erp.jpg"
                alt="Sistema de integração e suporte a ERPs em operação"
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover/image:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Rodapé com Entregáveis */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Desenvolvimento
              Ágil de APIs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Atendimento
              Técnico Nível 2 e 3
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand" /> Estabilidade e
              Continuidade 24/7
            </span>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:underline group"
          >
            <span>Precisa de uma squad dedicada para sua operação?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
