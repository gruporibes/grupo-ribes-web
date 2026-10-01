import { Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactChannels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      {/* Canal E-mail */}
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-brand-border transition flex items-center gap-3.5 group"
      >
        <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-zinc-950 transition">
          <Mail className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono text-zinc-400 block uppercase">
            E-mail Corporativo
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-brand transition">
            {siteConfig.contact.email}
          </span>
        </div>
      </a>

      {/* Canal WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-brand-border transition flex items-center gap-3.5 group"
      >
        <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition">
          <Phone className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono text-zinc-400 block uppercase">
            WhatsApp Direto
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-brand transition">
            {siteConfig.contact.phone}
          </span>
        </div>
      </a>

      {/* SLA / Tempo de Resposta */}
      <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-brand">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-mono text-zinc-400 block uppercase">
            Tempo Médio de Retorno
          </span>
          <span className="text-xs font-semibold text-zinc-300">
            {siteConfig.contact.responseTime}
          </span>
        </div>
      </div>
    </div>
  );
}
