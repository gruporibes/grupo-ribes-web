import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.svg"
            alt="Grupo Ribes"
            width={140}
            height={51}
            className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
          />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-mono text-zinc-400">
          <Link href="#services" className="hover:text-brand transition">
            Pilares
          </Link>
          <Link href="#solutions" className="hover:text-brand transition">
            Soluções
          </Link>
          <Link href="#models" className="hover:text-brand transition">
            Modelos
          </Link>
          <Link href="#tech" className="hover:text-brand transition">
            Stack
          </Link>
          <Link href="#contact" className="hover:text-brand transition">
            Contato
          </Link>
        </div>

        <p className="text-xs text-zinc-400 font-mono">
          &copy; {new Date().getFullYear()} Grupo Ribes. Long-term technical
          growth engine.
        </p>
      </div>
    </footer>
  );
}
