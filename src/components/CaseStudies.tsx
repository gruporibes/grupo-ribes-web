import { TrendingUp, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Early-Stage Startup • 0-to-1 Build",
    clientType: "Fintech B2B",
    title: "Lançamento de MVP em 8 semanas e tração para Seed Round",
    situation:
      "Startup com pré-seed levantado precisava validar seu produto e chegar ao mercado antes que a pista de caixa acabasse.",
    task: "Arquitetar e desenvolver uma plataforma completa com painel web, gateway de pagamentos e conformidade com o Banco Central.",
    action:
      "Desenvolvimento ágil com Next.js, Node.js e banco de dados relacional isolado, com CI/CD diário e testes automatizados.",
    result: {
      metric: "8 Semanas",
      description:
        "Do zero ao lançamento em produção. A startup captou R$ 3.5M no Seed Round 4 meses após o lançamento.",
    },
  },
  {
    tag: "Mid-Market • Modernização & Sustentação",
    clientType: "Logística & Supply Chain",
    title: "Modernização de ERP legado e redução de 35% em custos de nuvem",
    situation:
      "Sistema crítico sofrendo quedas constantes em horários de pico, com suporte de fornecedores anteriores sem SLA definido.",
    task: "Estabilizar a operação 24/7, eliminar gargalos de concorrência no banco de dados e cortar gastos desnecessários na AWS.",
    action:
      "Migração gradual de monólito para microsserviços conteinerizados, otimização de queries pesadas e implementação de monitoramento proativo.",
    result: {
      metric: "99.98% Uptime",
      description:
        "Zero incidentes graves em 12 meses e corte imediato de 35% na fatura mensal da infraestrutura de nuvem.",
    },
  },
];

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
          Resultados Comprovados
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Impacto de negócio antes de jargões técnicos
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Como entregamos valor através do método estruturado de engenharia
          (STAR).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cases.map((cs) => (
          <div
            key={cs.title}
            className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 hover:border-zinc-700 transition"
          >
            <div>
              {/* Header do Card */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-emerald-400 border border-zinc-700/60">
                  {cs.tag}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {cs.clientType}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-6 leading-snug">
                {cs.title}
              </h3>

              {/* Grid Método STAR */}
              <div className="space-y-4 text-xs text-zinc-300">
                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                  <span className="font-mono font-bold text-zinc-400 uppercase text-[10px] block mb-1">
                    [S] Situação & Desafio
                  </span>
                  <p className="text-zinc-400">{cs.situation}</p>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                  <span className="font-mono font-bold text-zinc-400 uppercase text-[10px] block mb-1">
                    [T & A] Tarefa & Engenharia Executada
                  </span>
                  <p className="text-zinc-400">{cs.action}</p>
                </div>
              </div>
            </div>

            {/* Destaque do Resultado [R] */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-2xl font-black text-emerald-400 block tracking-tight">
                  {cs.result.metric}
                </span>
                <span className="text-xs text-zinc-400 max-w-xs block mt-0.5">
                  {cs.result.description}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
