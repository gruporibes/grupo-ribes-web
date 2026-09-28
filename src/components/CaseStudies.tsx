import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
          Histórico de Entrega
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Estudo de Caso em Destaque
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Como aplicamos engenharia de software para transformar fluxos manuais
          em uma operação digital escalável.
        </p>
      </div>

      {/* Card Único - Spotlight Case */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 hover:border-brand-border transition duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-brand-muted text-brand border border-brand-border">
                0-to-1 Build & Automação de Processos
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Setor Corporativo
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
              Digitalização, Governança e Centralização de Fluxos Críticos
            </h3>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950 px-4 py-2 rounded-lg border border-zinc-800">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span>Em Produção e Operação Contínua</span>
          </div>
        </div>

        {/* Narrativa STAR adaptada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {/* Situação */}
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider block mb-2">
                01. O Cenário Inicial
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                A operação dependia de planilhas dispersas, trocas informais de
                mensagens e processos manuais de validação, gerando riscos de
                inconsistência e retrabalho entre áreas.
              </p>
            </div>
          </div>

          {/* Ação */}
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-2">
                02. A Engenharia Aplicada
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Desenho e desenvolvimento de uma plataforma web dedicada, com
                arquitetura segura, perfis de acesso granulares, regras de
                negócio automatizadas e trilha de auditoria para cada ação.
              </p>
            </div>
          </div>

          {/* Resultado */}
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-brand-border flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-2">
                03. O Impacto no Negócio
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Centralização total da informação em um único ponto, eliminando
                extravios de dados e proporcionando à diretoria rastreabilidade
                e governança em tempo real.
              </p>
            </div>
          </div>
        </div>

        {/* Pilares entregues neste projeto */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Interface
              Intuitiva & Ágil
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Trilha Completa de
              Auditoria
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Estabilidade
              Operacional
            </span>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:underline group"
          >
            <span>Precisa de uma solução sob medida parecida?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
