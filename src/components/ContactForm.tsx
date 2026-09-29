"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormDataState {
  projectType: string;
  stage: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  summary: string;
}

interface FormErrors {
  projectType?: string;
  stage?: string;
  budget?: string;
  name?: string;
  email?: string;
  summary?: string;
}

export function ContactForm() {
  // 1. Iniciando todos os campos vazios por padrão
  const [formData, setFormData] = useState<FormDataState>({
    projectType: "",
    stage: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    summary: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // 2. Lógica de Toggle: se clicar no mesmo valor, desmarca para ""
  const handleToggle = (
    field: "projectType" | "stage" | "budget",
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value,
    }));

    // Limpa o erro do campo assim que o usuário clica
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // 3. Validação dos dados antes do envio
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.projectType) {
      newErrors.projectType = "Selecione o tipo de demanda principal.";
    }

    if (!formData.stage) {
      newErrors.stage = "Selecione o estágio atual do seu produto.";
    }

    if (!formData.budget) {
      newErrors.budget = "Selecione uma faixa de orçamento estimada.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Preencha seu nome e cargo.";
    }

    // Validação básica de formato de e-mail corporativo
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Preencha seu e-mail corporativo.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Informe um e-mail válido (ex: nome@empresa.com).";
    }

    if (!formData.summary.trim()) {
      newErrors.summary = "Descreva brevemente o desafio do projeto.";
    } else if (formData.summary.trim().length < 15) {
      newErrors.summary =
        "Por favor, detalhe um pouco mais o escopo (mínimo de 15 caracteres).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const subject = encodeURIComponent(
      `Nova Solicitação de Orçamento: ${formData.projectType} - ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Nome / Cargo: ${formData.name}\n` +
        `E-mail: ${formData.email}\n` +
        `WhatsApp / Telefone: ${formData.phone || "Não informado"}\n` +
        `Tipo de Demanda: ${formData.projectType}\n` +
        `Estágio Atual: ${formData.stage}\n` +
        `Faixa Estimada de Orçamento: ${formData.budget}\n\n` +
        `Resumo da Demanda:\n${formData.summary}`,
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
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
          Proposta Comercial
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Solicitar Orçamento de Projeto
        </p>
        <p className="mt-3 text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Selecione as características do seu projeto abaixo. Nossa liderança
          técnica analisará as necessidades e retornará com uma estimativa de
          prazo, equipe e investimento.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10 backdrop-blur-sm shadow-xl">
        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle2 className="w-14 h-14 text-brand mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">
              Solicitação preparada!
            </h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
              Seu aplicativo de e-mail foi aberto com todos os dados
              preenchidos. Basta confirmar o envio e entraremos em contato em
              até 24 horas úteis.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Etapa 1: Tipo de Demanda */}
            <div>
              <span className="block text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                1. Tipo de Demanda Principal *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Desenvolvimento do Zero (0-to-1)",
                  "Sustentação & Suporte 24/7",
                  "Evolução & Modernização",
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => handleToggle("projectType", type)}
                    className={`py-3.5 px-4 rounded-lg text-xs font-medium border text-center transition ${
                      formData.projectType === type
                        ? "border-brand bg-brand-muted text-brand font-semibold shadow-sm"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.projectType && (
                <p className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.projectType}</span>
                </p>
              )}
            </div>

            {/* Etapa 2: Estágio Atual */}
            <div>
              <span className="block text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                2. Estágio Atual do Produto / Sistema *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Ideia / Validação Inicial",
                  "MVP / Protótipo Existente",
                  "Plataforma Legada em Operação",
                ].map((stage) => (
                  <button
                    type="button"
                    key={stage}
                    onClick={() => handleToggle("stage", stage)}
                    className={`py-3.5 px-4 rounded-lg text-xs font-medium border text-center transition ${
                      formData.stage === stage
                        ? "border-brand bg-brand-muted text-brand font-semibold shadow-sm"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
              {errors.stage && (
                <p className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.stage}</span>
                </p>
              )}
            </div>

            {/* Etapa 3: Faixa de Orçamento Estimada */}
            <div>
              <span className="block text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                3. Faixa de Investimento Estimada *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Até R$ 30.000",
                  "R$ 30.000 - R$ 60.000",
                  "Acima de R$ 60.000",
                ].map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => handleToggle("budget", b)}
                    className={`py-3.5 px-4 rounded-lg text-xs font-medium border text-center transition ${
                      formData.budget === b
                        ? "border-brand bg-brand-muted text-brand font-semibold shadow-sm"
                        : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {errors.budget && (
                <p className="flex items-center gap-1.5 text-xs text-red-400 mt-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.budget}</span>
                </p>
              )}
            </div>

            {/* Etapa 4: Informações de Contato */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              <span className="block text-xs font-mono uppercase text-zinc-400 tracking-wider">
                4. Dados de Contato & Descrição
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-mono uppercase text-zinc-400 mb-1.5"
                  >
                    Nome & Cargo *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Ex: Carlos Silva (Diretor)"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name)
                        setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none transition ${
                      errors.name
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-zinc-800 focus:border-brand"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-mono uppercase text-zinc-400 mb-1.5"
                  >
                    E-mail Corporativo *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="carlos@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email)
                        setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none transition ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-zinc-800 focus:border-brand"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[11px] font-mono uppercase text-zinc-400 mb-1.5"
                  >
                    WhatsApp / Telefone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-summary"
                  className="block text-[11px] font-mono uppercase text-zinc-400 mb-1.5"
                >
                  Resumo do Desafio ou Escopo Previsto *
                </label>
                <textarea
                  id="contact-summary"
                  name="summary"
                  rows={3}
                  placeholder="Conte brevemente sobre o projeto: funcionalidades essenciais, integrações necessárias ou problemas operacionais atuais..."
                  value={formData.summary}
                  onChange={(e) => {
                    setFormData({ ...formData, summary: e.target.value });
                    if (errors.summary)
                      setErrors({ ...errors, summary: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none transition ${
                    errors.summary
                      ? "border-red-500/60 focus:border-red-500"
                      : "border-zinc-800 focus:border-brand"
                  }`}
                />
                {errors.summary && (
                  <p className="text-[11px] text-red-400 mt-1">
                    {errors.summary}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-brand hover:bg-brand-hover text-zinc-950 font-bold text-sm transition flex items-center justify-center gap-2 glow-brand"
            >
              <span>Enviar Solicitação de Orçamento</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
