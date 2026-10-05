import { Users, Rocket, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const models = [
  {
    icon: Rocket,
    badge: "MAIS PROCURADO",
    title: "Projeto de Escopo Fechado",
    subtitle: "Automações e novos sistemas com prazo e custo definidos",
    description:
      "Desenvolvimento estruturado de soluções pontuais — como automações de ERP, integrações ou softwares sob medida — com cronograma claro e orçamento 100% previsível do início à entrega.",
    features: [
      "Mapeamento detalhado dos processos e necessidades",
      "Prazo e investimento 100% previsíveis (sem surpresas)",
      "Conexão com seu ERP, bancos de dados ou planilhas atuais",
      "Treinamento da sua equipe e homologação assistida",
    ],
  },
  {
    icon: Clock,
    badge: "ESTABILIDADE OPERACIONAL",
    title: "Sustentação e Suporte Contínuo",
    subtitle: "Manutenção proativa para sua operação nunca parar",
    description:
      "Pacote mensal de horas técnicas para manter seus sistemas, integrações e ERP sempre estáveis, com resposta imediata para emergências e pequenas melhorias contínuas.",
    features: [
      "SLA garantido de resposta rápida (< 15 min para chamados críticos)",
      "Manutenção preventiva e correção ágil de falhas",
      "Banco de horas para melhorias e novas automações",
      "Monitoramento contínuo para evitar paradas na operação",
    ],
  },
  {
    icon: Users,
    badge: "PARCEIRO ESTRATÉGICO",
    title: "Braço de Tecnologia Dedicado",
    subtitle: "Sua equipe técnica sob demanda, sem encargos de CLT",
    description:
      "Atuamos como o setor de tecnologia da sua empresa. Um time técnico sênior totalmente alinhado às demandas da sua diretoria, garantindo evolução contínua dos seus sistemas.",
    features: [
      "Profissionais sênior focados no dia a dia da sua empresa",
      "Atendimento direto às demandas da diretoria e gerência",
      "Zero custos com recrutamento, RH ou encargos trabalhistas",
      "Flexibilidade para acelerar ou pausar conforme sua demanda",
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
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
          Transparência Comercial
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Modelos de Parceria & Contratação
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
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-brand-border transition duration-300 shadow-lg"
            >
              <div>
                {/* 1. Header: Ícone e Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-brand-muted border border-brand-border flex items-center justify-center text-brand">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800/90 text-zinc-300 border border-zinc-700/80">
                    {model.badge}
                  </span>
                </div>

                {/* 2. Bloco Título + Subtítulo com altura padronizada */}
                <div className="lg:min-h-19 mb-3">
                  <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">
                    {model.title}
                  </h3>
                  <p className="text-xs font-mono text-brand leading-relaxed">
                    {model.subtitle}
                  </p>
                </div>

                {/* 3. Descrição com altura padronizada para alinhar a linha divisória */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 lg:min-h-27.5">
                  {model.description}
                </p>
              </div>

              {/* 4. Checklist de Benefícios com altura padronizada */}
              <div className="pt-6 border-t border-zinc-800 flex-1 flex flex-col justify-start">
                <div className="space-y-3.5 lg:min-h-48.75">
                  {model.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 text-xs text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Botão de Ação Alinhado ao Fundo */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80">
                <Link
                  href="#contact"
                  className="block text-center w-full py-3 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:text-brand text-zinc-100 text-xs font-semibold transition-colors duration-200"
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
