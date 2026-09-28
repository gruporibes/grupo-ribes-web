"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "Build from scratch",
    stage: "Idea / Concept",
    budget: "$25k - $50k",
    name: "",
    email: "",
    summary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Como combinamos no escopo: sem banco de dados complexo!
    // Podemos abrir o cliente de email ou acionar uma API route serverless.
    const subject = encodeURIComponent(
      `Novo Lead Grupo Ribes: ${formData.projectType} - ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nTipo: ${formData.projectType}\nEstágio: ${formData.stage}\nBudget Estimado: ${formData.budget}\n\nResumo:\n${formData.summary}`,
    );
    window.location.href = `mailto:contato@gruporibes.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
          Inicie sua Operação
        </h2>
        <p className="mt-3 text-3xl font-bold text-white">
          Solicitar Diagnóstico Técnico
        </p>
        <p className="mt-2 text-zinc-400 text-sm">
          Responda a 4 perguntas rápidas para direcionarmos o melhor
          especialista para seu caso.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10 backdrop-blur-sm">
        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white">
              Mensagem preparada com sucesso!
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Seu e-mail padrão foi aberto com os dados. Em breve nosso time de
              engenharia retornará o contato.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Etapa 1: Tipo de Projeto */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-3">
                1. Tipo de Demanda
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Build from scratch",
                  "Ongoing Support",
                  "Software Evolution",
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() =>
                      setFormData({ ...formData, projectType: type })
                    }
                    className={`py-3 px-4 rounded-lg text-xs font-medium border text-center transition ${
                      formData.projectType === type
                        ? "border-emerald-400 bg-emerald-500/10 text-emerald-300 font-semibold"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Etapa 2: Estágio Atual */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-3">
                2. Estágio Atual do Produto
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Idea / Concept",
                  "Existing MVP / Prototype",
                  "Legacy Platform",
                ].map((stage) => (
                  <button
                    type="button"
                    key={stage}
                    onClick={() => setFormData({ ...formData, stage })}
                    className={`py-3 px-4 rounded-lg text-xs font-medium border text-center transition ${
                      formData.stage === stage
                        ? "border-emerald-400 bg-emerald-500/10 text-emerald-300 font-semibold"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Etapa 3: Orçamento Estimado */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-3">
                3. Faixa de Orçamento Estimada
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Under $25k", "$25k - $50k", "$50k+"].map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`py-3 px-4 rounded-lg text-xs font-medium border text-center transition ${
                      formData.budget === b
                        ? "border-emerald-400 bg-emerald-500/10 text-emerald-300 font-semibold"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Etapa 4: Dados de Contato */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <label className="block text-xs font-mono uppercase text-zinc-400">
                4. Informações de Contato
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Seu nome & cargo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="email"
                  required
                  placeholder="E-mail corporativo"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
              <textarea
                rows={3}
                required
                placeholder="Breve resumo do desafio ou objetivo do software..."
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-sm transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
            >
              <span>Enviar Diagnóstico</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
