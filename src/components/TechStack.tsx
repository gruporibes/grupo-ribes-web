import {
  Code2,
  Cloud,
  ShieldCheck,
  Shield,
  Lock,
  Database,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

// Ícones com proporção ampliada (w-4 h-4) e cores oficiais de cada tecnologia
function TechLogo({ name }: Readonly<{ name: string }>) {
  const iconClass =
    "w-4 h-4 shrink-0 transition-transform group-hover:scale-110";

  switch (name) {
    /* ---------------- LINGUAGENS & FRAMEWORKS ---------------- */
    case "React":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.5"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            stroke="#61DAFB"
            strokeWidth="1.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      );

    case "Next.js":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={iconClass}
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10.5"
            fill="#000"
            stroke="#333"
            strokeWidth="1"
          />
          <path
            d="M8.5 15.5V8.5l7 8.5V8.5"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M12.5 16.5h-2V9.8H8.3V8.2h6.4v1.6H12.5v6.7zm4.3-.2c.8.3 1.6.4 2.3.4 1 0 1.7-.5 1.7-1.3 0-.7-.4-1.1-1.6-1.5-1.5-.5-2.5-1.3-2.5-2.7 0-1.7 1.4-2.8 3.5-2.8.9 0 1.7.2 2.3.4l-.5 1.5c-.5-.2-1.1-.3-1.8-.3-1.1 0-1.7.5-1.7 1.1 0 .7.5 1 1.7 1.4 1.6.6 2.4 1.4 2.4 2.8 0 1.8-1.4 2.9-3.7 2.9-1 0-2-.2-2.6-.5l.5-1.4z"
            fill="#FFF"
          />
        </svg>
      );

    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M12 2l8.66 5v10L12 22 3.34 17V7L12 2z" fill="#5FA04E" />
          <path
            d="M12 4.5l6.5 3.75v7.5L12 19.5 5.5 15.75v-7.5L12 4.5z"
            fill="#18181B"
          />
          <text
            x="12"
            y="14.5"
            fontSize="7"
            fontWeight="bold"
            fill="#5FA04E"
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            JS
          </text>
        </svg>
      );

    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path
            d="M11.87 2c-4.14 0-3.87 1.8-3.87 1.8l.01 1.86h3.94v.56H6.42s-2.6.29-2.6 3.86c0 3.56 2.27 3.72 2.27 3.72h1.36v-1.92s-.07-2.29 2.25-2.29h3.87s2.17-.03 2.17-2.14V4.14S16.01 2 11.87 2zm-1.25 1.25a.8.8 0 110 1.6.8.8 0 010-1.6z"
            fill="#3776AB"
          />
          <path
            d="M12.13 22c4.14 0 3.87-1.8 3.87-1.8l-.01-1.86h-3.94v-.56h5.53s2.6-.29 2.6-3.86c0-3.56-2.27-3.72-2.27-3.72h-1.36v1.92s.07 2.29-2.25 2.29h-3.87s-2.17.03-2.17 2.14v3.31S7.99 22 12.13 22zm1.25-1.25a.8.8 0 110-1.6.8.8 0 010 1.6z"
            fill="#FFD43B"
          />
        </svg>
      );

    case "Go":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path
            d="M2 12a5 5 0 005 5c2.2 0 3.8-1.2 4.4-2.8H8.5v-1.8h5.3v4.4h-1.6l-.2-1.2A5.2 5.2 0 017 17a7 7 0 01-7-7c0-3.9 3.1-7 7-7a6.8 6.8 0 015.4 2.5L11 7A5 5 0 007 5a5 5 0 00-5 5zm11 0a6 6 0 1112 0 6 6 0 01-12 0zm10 0a4 4 0 10-8 0 4 4 0 008 0z"
            fill="#00ADD8"
          />
        </svg>
      );

    case "Flutter":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M14 2L4 12l3.5 3.5L18.5 4.5H14z" fill="#40D0FB" />
          <path
            d="M14 11.5l-4.5 4.5L14 20.5h4.5l-4.5-4.5 4.5-4.5H14z"
            fill="#02569B"
          />
        </svg>
      );

    case ".NET C#":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <circle cx="12" cy="12" r="10.5" fill="#512BD4" />
          <path
            d="M7 14.5a3 3 0 110-5 3 3 0 012 .8"
            stroke="#FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M13 9.5v5M16 9.5v5M12 11h5M12 13h5"
            stroke="#FFF"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Delphi":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          {/* Vermelho oficial Embarcadero Delphi (#EE1F35) com elmo */}
          <rect width="24" height="24" rx="4" fill="#EE1F35" />
          <path
            d="M12 5c-3.8 0-5.5 2.5-5.5 6v1.5c0 3.2 2.2 5.5 5.5 5.5s5.5-2.3 5.5-5.5V11c0-3.5-1.7-6-5.5-6zm0 1.8c2.4 0 3.6 1.8 3.6 4.2v1.2c0 2.2-1.4 3.8-3.6 3.8s-3.6-1.6-3.6-3.8v-1.2c0-2.4 1.2-4.2 3.6-4.2zm-1 3.5v4h2v-4h-2z"
            fill="#FFF"
          />
        </svg>
      );

    /* ---------------- CLOUD, DEVOPS & INFRA ---------------- */
    case "AWS":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path
            d="M6 10l1.8-3.5 1.8 3.5M6.8 9.2h1.8M12.5 6.5v7M17 7c0 3.5-2.5 4.5-2.5 4.5"
            stroke="#FFF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M3.5 16.5c5 2.8 12 2.8 17-.5"
            stroke="#FF9900"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M18.5 14.5l2 1.5-1.5 2"
            stroke="#FF9900"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );

    case "Google Cloud":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          {/* Nuvem Multicolorida Oficial do Google Cloud */}
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
            fill="#4285F4"
          />
          <circle cx="16" cy="14" r="3.2" fill="#EA4335" />
          <path
            d="M12 8a4.5 4.5 0 00-4.5 4.5H16A4.5 4.5 0 0012 8z"
            fill="#FBBC05"
          />
          <path d="M7 16h9a3 3 0 01-3 3H7v-3z" fill="#34A853" />
        </svg>
      );

    case "Azure":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          {/* Símbolo geométrico oficial do Microsoft Azure (#0089D6) */}
          <path d="M5.5 18L13 3.5l4.5 3.5-6.5 11H5.5z" fill="#0089D6" />
          <path d="M14 18l2.5-5 4.5 5H14z" fill="#0078D4" />
          <path d="M13 3.5l-7.5 14.5h5.5l6.5-11-4.5-3.5z" fill="#5EA0EF" />
        </svg>
      );

    case "Docker":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path
            d="M22.5 11.8c-.3-.2-1.5-.7-2.6-.2-.3-.5-.7-.9-1.2-1.2l-.7-.4-.3.7c-.4.8-.4 1.7-.1 2.5-1.1.7-2.7.9-4.2.9H2.8c-.4 1.3-.3 2.7.3 3.9 1 2 2.9 3.3 5.2 3.6 4.6.6 9-1.5 11.5-5.3 1.7-.2 3.1-1.3 3.5-2.9l.2-.9-.9-.3z"
            fill="#2496ED"
          />
          <path
            d="M4 12.5h1.8v1.6H4zm2.4 0h1.8v1.6H6.4zm2.4 0h1.8v1.6H8.8zm2.4 0H13v1.6h-1.8zm-4.8-2.2h1.8v1.6H6.4zm2.4 0h1.8v1.6H8.8zm2.4 0H13v1.6h-1.8zm-2.4-2.2h1.8v1.6H8.8z"
            fill="#FFF"
          />
        </svg>
      );

    case "Kubernetes":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M12 2l8.66 5v10L12 22 3.34 17V7L12 2z" fill="#326CE5" />
          <circle cx="12" cy="12" r="2.5" fill="#FFF" />
          <path
            d="M12 6.5v3M12 14.5v3M7.2 9.2l2.6 1.5M14.2 13.3l2.6 1.5M7.2 14.8l2.6-1.5M14.2 10.7l2.6-1.5"
            stroke="#FFF"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "Terraform":
      return (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <polygon
            points="3 3 9.5 6.75 9.5 14 3 10.25"
            fill="#844FBA"
            fillOpacity="0.8"
          />
          <polygon
            points="10.5 7.5 17 11.25 17 18.5 10.5 14.75"
            fill="#844FBA"
          />
          <polygon points="10.5 1 17 4.75 17 12 10.5 8.25" fill="#5C4EE5" />
        </svg>
      );

    case "CI/CD Pipelines":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F05032"
          strokeWidth="1.8"
          className={iconClass}
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2.5" fill="#F05032" />
          <circle cx="6" cy="18" r="2.5" fill="#F05032" />
          <circle cx="18" cy="9" r="2.5" fill="#F05032" />
          <path d="M6 8.5v7M8 7.5c2 1 4 2.5 7.5 1.5" strokeLinecap="round" />
        </svg>
      );

    /* ---------------- SEGURANÇA & CONFORMIDADE ---------------- */
    case "Diretrizes SOC 2":
      return (
        <Shield
          className="w-4 h-4 shrink-0 text-emerald-400"
          aria-hidden="true"
        />
      );
    case "Conformidade LGPD":
      return (
        <Lock className="w-4 h-4 shrink-0 text-brand" aria-hidden="true" />
      );
    case "Bancos Criptografados":
      return (
        <Database
          className="w-4 h-4 shrink-0 text-cyan-400"
          aria-hidden="true"
        />
      );
    case "Testes Automatizados":
      return (
        <CheckCircle2
          className="w-4 h-4 shrink-0 text-emerald-400"
          aria-hidden="true"
        />
      );
    case "Disaster Recovery":
      return (
        <RotateCcw
          className="w-4 h-4 shrink-0 text-amber-400"
          aria-hidden="true"
        />
      );

    default:
      return (
        <div className="w-2 h-2 rounded-full bg-brand" aria-hidden="true" />
      );
  }
}

export function TechStack() {
  const stack = [
    {
      category: "Linguagens & Frameworks",
      icon: Code2,
      description:
        "Do desenvolvimento web moderno à integração de sistemas corporativos consolidados.",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Go",
        "Flutter",
        ".NET C#",
        "Delphi",
      ],
    },
    {
      category: "Cloud, DevOps & Infra",
      icon: Cloud,
      description:
        "Infraestrutura resiliente, microsserviços conteinerizados e pipelines de entrega contínua.",
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
        "Padrões rígidos para proteção de dados, estabilidade e trilhas de auditoria.",
      items: [
        "Diretrizes SOC 2",
        "Conformidade LGPD",
        "Bancos Criptografados",
        "Testes Automatizados",
        "Disaster Recovery",
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
          Infraestrutura & Tecnologias
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Stack versátil para sistemas modernos e legados
        </p>
        <p className="mt-4 text-zinc-400 text-sm md:text-base">
          Trabalhamos com tecnologias comprovadas em produção para entregar
          performance e segurança contínua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stack.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.category}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-brand-border transition duration-300 shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-muted border border-brand-border flex items-center justify-center text-brand mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {group.category}
                </h3>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Grid de badges com ícone visual em cores originais */}
              <div className="flex flex-wrap gap-2.5 pt-6 border-t border-zinc-800/80">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="group inline-flex items-center gap-2.5 text-xs px-3.5 py-2 rounded-lg bg-zinc-900/90 text-zinc-200 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all font-mono shadow-sm"
                  >
                    <TechLogo name={tech} />
                    <span className="group-hover:text-white transition-colors">
                      {tech}
                    </span>
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
