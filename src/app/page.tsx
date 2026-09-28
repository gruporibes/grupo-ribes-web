import { EngagementModels } from "@/components/EngagementModels";
import { TechStack } from "@/components/TechStack";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw,
  Cpu,
  Layers,
  Server,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 bg-grid-pattern selection:bg-emerald-500 selection:text-zinc-950">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge Tech */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs text-zinc-300 mb-8 backdrop-blur-sm shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Long-Term Technical Growth Engine</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1]">
          Custom Software Development, 24/7 Support &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Continuous Evolution.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          {siteConfig.hero.subheadline}
        </p>

        {/* CTAs de Alto Contraste */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(52,211,153,0.3)] flex items-center justify-center gap-2 group"
          >
            <span>Schedule a Free Tech Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#models"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-medium text-sm transition-all duration-200 flex items-center justify-center"
          >
            Explore Engagement Models
          </Link>
        </div>
      </section>

      {/* 2. PROOF BANNER */}
      <section className="border-y border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs md:text-sm text-zinc-400 font-medium mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OS TRÊS PILARES OPERACIONAIS */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Nossos Pilares de Engenharia
          </h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Construímos, mantemos e evoluímos software crítico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: BUILD */}
          <div className="relative group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition duration-300">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              01. Pilar A
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">BUILD</h3>
            <p className="text-sm font-medium text-zinc-400 mb-4">
              0-to-1 Product Development
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Arquitetura, design e engenharia de aplicações web escaláveis,
              apps mobile e sistemas customizados do zero para rápida validação.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
              {[
                "Full-Stack Web",
                "Mobile Apps",
                "Microserviços",
                "MVP Ágil",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded bg-zinc-800/60 text-zinc-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2: MAINTAIN */}
          <div className="relative group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition duration-300">
            <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6">
              <Server className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
              02. Pilar B
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">
              MAINTAIN
            </h3>
            <p className="text-sm font-medium text-zinc-400 mb-4">
              Constant Support & Uptime
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Monitoramento proativo 24/7, remediação de incidentes sob SLA
              rígido, backups, disaster recovery e mitigação de
              vulnerabilidades.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
              {[
                "Monitoramento 24/7",
                "SLA Rígido",
                "Security Patching",
                "Backups & DR",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded bg-zinc-800/60 text-zinc-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 3: EVOLVE */}
          <div className="relative group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition duration-300">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
              <RefreshCw className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              03. Pilar C
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">EVOLVE</h3>
            <p className="text-sm font-medium text-zinc-400 mb-4">
              Continuous Improvement
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Refatoração contínua, migração de monólitos legados, otimização de
              custos de nuvem (AWS/GCP) e automação de entrega contínua (CI/CD).
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
              {[
                "Otimização de Custos",
                "DevOps & CI/CD",
                "Modernização Legada",
                "Refatoração",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded bg-zinc-800/60 text-zinc-300 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ROTEAMENTO DE AUDIÊNCIA DUPLA (STARTUP vs MID-MARKET) */}
      <section
        id="solutions"
        className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Soluções Sob Medida
          </h2>
          <p className="mt-3 text-3xl font-bold text-white">
            Qual é o momento atual do seu negócio?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Startups */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4">
                Early-Stage Startups
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                &ldquo;Launch an enterprise-grade MVP in months without building
                an internal dev team.&rdquo;
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-400 mt-4 mb-6">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" /> Rápida validação
                  de hipóteses e MVP funcional
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" /> Fractional CTO e
                  liderança técnica para captação de investimento
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" /> Arquitetura
                  pronta para escalar
                </li>
              </ul>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Book a Product Strategy Session &rarr;
            </Link>
          </div>

          {/* Card Mid-Market */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-teal-500/10 text-teal-400 text-xs font-medium mb-4">
                Mid-Market Businesses
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                &ldquo;Upgrade legacy software and secure 24/7 operational peace
                of mind.&rdquo;
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-400 mt-4 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" /> Fim de
                  ferramentas lentas ou mantidas por fornecedores instáveis
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" /> Automação de
                  processos operacionais e redução de custos em nuvem
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" /> Suporte
                  crítico com SLA de tempo de resposta garantido
                </li>
              </ul>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300"
            >
              Schedule a Technical Audit &rarr;
            </Link>
          </div>
        </div>
      </section>
      {/* 5. MODELOS DE ENGAJAMENTO */}
      <EngagementModels />

      {/* 6. TECH STACK & SEGURANÇA */}
      <TechStack />

      {/* 7. FORMULÁRIO DE QUALIFICAÇÃO */}
      <ContactForm />

      {/* 8. FOOTER */}
      <Footer />
    </div>
  );
}
