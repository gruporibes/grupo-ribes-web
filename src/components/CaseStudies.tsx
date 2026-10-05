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
          Como atuamos como braço técnico dedicado para sustentação de sistemas
          e criação de APIs de integração.
        </p>
      </div>

      {/* Card Spotlight do Caso Real */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 hover:border-brand-border transition duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-brand-muted text-brand border border-brand-border">
                Squad Dedicada • Automação & Sustentação
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Consultoria de ERPs
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
              Engenharia Dedicada para Criação de APIs e Suporte Operacional a
              ERPs
            </h3>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950 px-4 py-2 rounded-lg border border-zinc-800">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span>Operação Ativa & Parceria Contínua</span>
          </div>
        </div>

        {/* Narrativa STAR adaptada à realidade do projeto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {/* Cenário */}
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-2">
                01. O Cenário & Demanda
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Empresa especializada em soluções ERP necessitava de uma equipe
                técnica de confiança para atender demandas pontuais de
                integração e garantir a estabilidade operacional de rotinas
                críticas.
              </p>
            </div>
          </div>

          {/* Atuação Técnica */}
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-2">
                02. A Engenharia Aplicada
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Atuação como braço técnico dedicado: desenvolvimento de APIs
                customizadas para comunicação entre sistemas, manutenção
                preventiva de bancos de dados e atendimento ágil a chamados de
                sustentação.
              </p>
            </div>
          </div>

          {/* Impacto */}
          <div className="p-5 rounded-xl bg-zinc-950/60 border border-brand-border flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-wider block mb-2">
                03. O Impacto Prático
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Garantia de continuidade operacional sem interrupções, agilidade
                na entrega de integrações para clientes finais e previsibilidade
                de custos com uma squad externa especializada.
              </p>
            </div>
          </div>
        </div>

        {/* Entregáveis deste modelo */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Desenvolvimento
              Ágil de APIs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Atendimento
              Técnico Nível 2 e 3
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand" /> Estabilidade e
              Continuidade 24/7
            </span>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:underline group"
          >
            <span>Precisa de uma squad dedicada para sua operação?</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
