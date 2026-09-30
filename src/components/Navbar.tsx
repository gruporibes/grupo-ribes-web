import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Oficial */}
        <Link href="/" className="flex items-center group py-2">
          <Image
            src="/logo.svg"
            alt="Grupo Ribes"
            width={160}
            height={58}
            className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Links de navegação com token 'brand' */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand transition-colors font-medium text-xs tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botão com tokens semânticos */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="px-5 py-2.5 text-xs font-bold text-zinc-950 bg-brand hover:bg-brand-hover transition-all rounded-md glow-brand"
          >
            Solicitar Proposta
          </Link>
        </div>
      </div>
    </header>
  );
}
