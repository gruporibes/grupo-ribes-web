import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCw,
  Layers,
  Server,
} from "lucide-react";
import { FlowingLines } from "@/components/FlowingLines";
import { EngagementModels } from "@/components/EngagementModels";
import { TechStack } from "@/components/TechStack";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-zinc-100 selection:bg-brand selection:text-zinc-950 overflow-hidden">
      {/* Linhas Fluidas Verticais */}
      <FlowingLines />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Headline com gradiente semântico da marca */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1]">
          Desenvolvimento de Software Sob Medida do Zero, Suporte 24/7 e{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-hover to-brand-dark">
            Evolução de Sistemas Legado.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          {siteConfig.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-brand hover:bg-brand-hover text-zinc-950 font-bold text-sm transition-all duration-200 glow-brand flex items-center justify-center gap-2 group"
          >
            <span>Schedule a Free Tech Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#models"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-brand-border text-zinc-200 font-medium text-sm transition-all duration-200 flex items-center justify-center"
          >
            Explore Engagement Models
          </Link>
        </div>
      </section>

      {/* 2. PROOF BANNER */}
      <section className="border-y border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center">
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
            Nossos Pilares de Engenharia
          </h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Construímos, mantemos e evoluímos software crítico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: BUILD */}
          <div className="relative group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-brand-border transition duration-300">
            <div className="w-12 h-12 rounded-lg bg-brand-muted border border-brand-border flex items-center justify-center text-brand mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand">
              Pilar A
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-2">BUILD</h3>
            <p className="text-sm font-medium text-zinc-400 mb-4">
              Desenvolvimento do Zero
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
          <div className="relative group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-brand-border transition duration-300">
            <div className="w-12 h-12 rounded-lg bg-brand-muted border border-brand-border flex items-center justify-center text-brand mb-6">
              <Server className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand">
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
          <div className="relative group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-brand-border transition duration-300">
            <div className="w-12 h-12 rounded-lg bg-brand-muted border border-brand-border flex items-center justify-center text-brand mb-6">
              <RefreshCw className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand">
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

      {/* 4. ROTEAMENTO DE AUDIÊNCIA DUPLA */}
      <section
        id="solutions"
        className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
            Soluções Sob Medida
          </h2>
          <p className="mt-3 text-3xl font-bold text-white">
            Qual é o momento atual do seu negócio?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Startups */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-brand-border transition">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-brand-muted text-brand text-xs font-mono mb-4 border border-brand-border">
                Early-Stage Startups
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                &ldquo;Launch an enterprise-grade MVP in months without building
                an internal dev team.&rdquo;
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-400 mt-4 mb-6">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand" /> Rápida validação de
                  hipóteses e MVP funcional
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand" /> Fractional CTO e
                  liderança técnica para captação
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand" /> Arquitetura pronta para
                  escalar
                </li>
              </ul>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Book a Product Strategy Session &rarr;
            </Link>
          </div>

          {/* Card Mid-Market */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-brand-border transition">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-zinc-800 text-zinc-300 text-xs font-mono mb-4 border border-zinc-700">
                Mid-Market Businesses
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                &ldquo;Upgrade legacy software and secure 24/7 operational peace
                of mind.&rdquo;
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-400 mt-4 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" /> Fim de
                  ferramentas lentas ou fornecedores instáveis
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" /> Automação de
                  processos e redução de riscos
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" /> Suporte crítico
                  com SLA de tempo de resposta garantido
                </li>
              </ul>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
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

      {/* 7. ESTUDO DE CASO EM DESTAQUE */}
      <CaseStudies />

      {/* 8. FORMULÁRIO DE QUALIFICAÇÃO */}
      <ContactForm />

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}
