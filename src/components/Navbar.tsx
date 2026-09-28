import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-white group"
        >
          <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition">
            <Terminal className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-lg">
            GRUPO <span className="text-zinc-400 font-light">RIBES</span>
          </span>
        </Link>

        {/* Links de navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Principal de Alto Contraste */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition rounded-md shadow-sm"
          >
            Falar com Engenharia
          </Link>
        </div>
      </div>
    </header>
  );
}
