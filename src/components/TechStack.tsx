import { Code2, Cloud, ShieldCheck, Check } from "lucide-react";

export function TechStack() {
  const stack = [
    {
      category: "Linguagens & Frameworks",
      icon: Code2,
      description:
        "Tecnologias modernas e consolidadas para alta performance e escalabilidade.",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Go",
        "Flutter",
      ],
    },
    {
      category: "Cloud, DevOps & Infra",
      icon: Cloud,
      description:
        "Infraestrutura resiliente, automatizada e orientada a custo-benefício.",
      items: [
        "AWS",
        "Google Cloud",
        "Azure",
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD Pipelines",
      ],
    },
    {
      category: "Segurança & Conformidade",
      icon: ShieldCheck,
      description:
        "Padrões corporativos rígidos para proteção e integridade de dados.",
      items: [
        "Diretrizes SOC 2 Type II",
        "Conformidade LGPD & GDPR",
        "Bancos de Dados Criptografados",
        "Testes Automatizados & Static Analysis",
        "Backups Automatizados & Disaster Recovery",
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
          Infraestrutura & Segurança
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Arquitetura battle-tested e padrões corporativos
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Trabalhamos apenas com tecnologias estáveis de longo prazo e segurança
          por padrão.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stack.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.category}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {group.category}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 font-mono"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
