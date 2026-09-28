import { Terminal } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 font-bold tracking-tight text-white">
          <div className="p-1 rounded bg-zinc-900 border border-zinc-800">
            <Terminal className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-sm">
            GRUPO <span className="text-zinc-400 font-light">RIBES</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <Link href="#services" className="hover:text-white transition">
            Pilares
          </Link>
          <Link href="#solutions" className="hover:text-white transition">
            Soluções
          </Link>
          <Link href="#models" className="hover:text-white transition">
            Modelos
          </Link>
          <Link href="#tech" className="hover:text-white transition">
            Stack
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contato
          </Link>
        </div>

        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} Grupo Ribes. Long-term technical
          growth engine.
        </p>
      </div>
    </footer>
  );
}
