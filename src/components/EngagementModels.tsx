import { Users, Rocket, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const models = [
  {
    icon: Users,
    badge: "Mais Flexível",
    title: "Dedicated Engineering Pod",
    subtitle: "Extensão técnica interna",
    description:
      "Squad de engenharia de software full-time ou fracionada, atuando como o braço de tecnologia oficial da sua empresa.",
    features: [
      "Desenvolvedores sênior dedicados",
      "Alinhamento direto aos ritos ágeis da empresa",
      "Escala rápida de capacidade produtiva",
      "Sem custos de recrutamento ou encargos CLT/RH",
    ],
  },
  {
    icon: Rocket,
    badge: "Mais Popular para MVPs",
    title: "Fixed-Scope Build Project",
    subtitle: "0-to-1 com escopo e prazo fechados",
    description:
      "Desenvolvimento estruturado do zero para produtos digitais bem definidos, focado em velocidade de entrega para o mercado.",
    features: [
      "Discovery e arquitetura completa",
      "Prazo e orçamento 100% previsíveis",
      "Entrega de código com documentação e testes",
      "Transição gradual ou onboarding da sua equipe",
    ],
  },
  {
    icon: Clock,
    badge: "Estabilidade Operacional",
    title: "Monthly Support & Retainer",
    subtitle: "Sustentação contínua sob demanda",
    description:
      "Pacote mensal flexível de horas para suporte crítico, resolução rápida de incidentes, updates de segurança e evolução contínua.",
    features: [
      "SLA garantido de resposta rápida",
      "Patches preventivos de segurança",
      "Otimização e redução de faturas de cloud",
      "Horas utilizáveis para novas features",
    ],
  },
];

export function EngagementModels() {
  return (
    <section
      id="models"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
          Transparência Comercial
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Modelos de Parceria & Engajamento
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Como trabalhamos para eliminar atritos e acelerar a entrega técnica.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {models.map((model) => {
          const Icon = model.icon;
          return (
            <div
              key={model.title}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-emerald-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {model.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {model.title}
                </h3>
                <p className="text-xs font-mono text-emerald-400 mb-4">
                  {model.subtitle}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {model.description}
                </p>

                <div className="space-y-2.5 pt-6 border-t border-zinc-800">
                  {model.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/80">
                <Link
                  href="#contact"
                  className="block text-center w-full py-2.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-semibold transition"
                >
                  Consultar Disponibilidade
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
