import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Server,
  Cpu,
} from "lucide-react";
import { FlowingLines } from "@/components/FlowingLines";
import { EngagementModels } from "@/components/EngagementModels";
import { TechStack } from "@/components/TechStack";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

// Ícones dinâmicos para cada um dos 3 serviços
const serviceIcons = [Layers, Server, Cpu];

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-zinc-100 selection:bg-brand selection:text-zinc-950 overflow-hidden">
      {/* Linhas Fluidas Verticais */}
      <FlowingLines />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Headline DRY (Lê as partes configuradas sem duplicar) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1]">
          {siteConfig.hero.headline.prefix}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-brand-hover to-brand-dark">
            {siteConfig.hero.headline.highlight}
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
            <span>{siteConfig.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-brand-border text-zinc-200 font-medium text-sm transition-all duration-200 flex items-center justify-center"
          >
            {siteConfig.hero.ctaSecondary}
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

      {/* 3. NOSSOS SERVIÇOS (Iterando sobre siteConfig.services) */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
            O Que Fazemos
          </h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Serviços de tecnologia para cada fase da sua empresa
          </p>
          <p className="mt-4 text-zinc-400 text-sm md:text-base">
            Da criação de sistemas sob medida à automação de processos manuais
            via APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="relative group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-brand-border transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-muted border border-brand-border flex items-center justify-center text-brand mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-400 mb-4 font-mono">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded bg-zinc-800/60 text-zinc-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ROTEAMENTO DE SOLUÇÕES */}
      <section
        id="solutions"
        className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800/80"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
            Soluções Sob Medida
          </h2>
          <p className="mt-3 text-3xl font-bold text-white">
            Qual é a necessidade atual da sua operação?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Startups / Novos Projetos */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-brand-border transition">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-brand-muted text-brand text-xs font-mono mb-4 border border-brand-border">
                Novos Projetos & MVPs
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                &ldquo;Construa e lance seu sistema ou plataforma em poucos
                meses com engenharia dedicada.&rdquo;
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-400 mt-4 mb-6">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand" /> Desenvolvimento ágil e
                  entregas incrementais
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand" /> Arquitetura moderna e
                  pronta para crescer
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand" /> Total propriedade do
                  código e da infraestrutura
                </li>
              </ul>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Solicitar Orçamento de Sistema &rarr;
            </Link>
          </div>

          {/* Card Empresas com ERP / Operação Existente */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col justify-between hover:border-brand-border transition">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-zinc-800 text-zinc-300 text-xs font-mono mb-4 border border-zinc-700">
                Empresas & Operações Consolidadas
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                &ldquo;Automatize processos manuais e conecte seu ERP a novas
                ferramentas via APIs.&rdquo;
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-400 mt-4 mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" /> Fim de
                  digitação manual de dados entre planilhas e ERP
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" /> APIs
                  customizadas para comunicação com terceiros
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand" /> Suporte
                  contínuo para manter tudo operando 24/7
                </li>
              </ul>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Solicitar Automação de ERP &rarr;
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

      {/* 8. FORMULÁRIO DE ORÇAMENTO */}
      <ContactForm />

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}
