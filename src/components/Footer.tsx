import { siteConfig } from "@/config/site";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
        {/* Coluna 1: Marca & Missão (Ocupa 2 colunas no desktop) */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={150}
              height={55}
              className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition"
            />
          </Link>
          <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
            Desenvolvimento de software sob medida, sustentação operacional 24/7
            e automação de processos corporativos via APIs para ERPs.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-1">
            <MapPin className="w-3.5 h-3.5 text-brand" />
            <span>{siteConfig.contact.location}</span>
          </div>
        </div>

        {/* Coluna 2: Navegação Rápida (sem o link redundante de contato) */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-200 block font-semibold">
            Navegação
          </span>
          <ul className="space-y-2 text-xs font-medium">
            <li>
              <Link
                href="#services"
                className="hover:text-brand transition-colors"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#solutions"
                className="hover:text-brand transition-colors"
              >
                Soluções
              </Link>
            </li>
            <li>
              <Link
                href="#models"
                className="hover:text-brand transition-colors"
              >
                Modelos de Parceria
              </Link>
            </li>
            <li>
              <Link href="#tech" className="hover:text-brand transition-colors">
                Stack & Segurança
              </Link>
            </li>
            <li>
              <Link
                href="#cases"
                className="hover:text-brand transition-colors"
              >
                Estudo de Caso
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Canais Oficiais de Contato */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-200 block font-semibold">
            Canais Diretos
          </span>
          <div className="space-y-2.5 text-xs">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-zinc-300 hover:text-brand transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-brand shrink-0" />
              <span className="truncate">{siteConfig.contact.email}</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-brand transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-brand shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sub-rodapé: Copyright e Voltar ao Topo */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
        <p>
          &copy; {currentYear} {siteConfig.name}. Desenvolvimento sob medida,
          integrações de ERP e suporte contínuo.
        </p>

        {/* Ação útil para o usuário: voltar suavemente ao início da página */}
        <Link
          href="#"
          className="flex items-center gap-1.5 text-zinc-400 hover:text-brand transition-colors group"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </footer>
  );
}
