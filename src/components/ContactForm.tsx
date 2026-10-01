"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  MessageSquareShare,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { maskPhone, isValidPhone } from "@/lib/masks";
import { ContactChannels } from "@/components/ContactChannels";

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
  // Aviso não impeditivo para telefone incompleto
  const [phoneWarning, setPhoneWarning] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Alterna a seleção de botões (desmarca se clicar no mesmo)
  const handleToggle = (
    field: "projectType" | "stage" | "budget",
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // 1. Ao digitar no telefone: apenas aplica a máscara e limpa avisos
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = maskPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (phoneWarning) setPhoneWarning(null);
  };

  // 2. Ao clicar para FORA do telefone: se estiver incompleto, mostra aviso não impeditivo
  const handlePhoneBlur = () => {
    if (formData.phone.trim() && !isValidPhone(formData.phone)) {
      setPhoneWarning("O número parece incompleto, mas não impede o envio.");
    } else {
      setPhoneWarning(null);
    }
  };

  // 3. Validação individual no onBlur dos outros campos
  const handleBlurField = (field: "name" | "email" | "summary") => {
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (field === "name" && !formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: "Preencha seu nome e cargo." }));
    } else if (field === "email") {
      if (!formData.email.trim()) {
        setErrors((prev) => ({
          ...prev,
          email: "Preencha seu e-mail corporativo.",
        }));
      } else if (!emailRegex.test(formData.email)) {
        setErrors((prev) => ({
          ...prev,
          email: "Informe um e-mail válido (ex: nome@empresa.com).",
        }));
      }
    } else if (field === "summary") {
      if (!formData.summary.trim()) {
        setErrors((prev) => ({
          ...prev,
          summary: "Descreva brevemente o desafio do projeto.",
        }));
      } else if (formData.summary.trim().length < 15) {
        setErrors((prev) => ({
          ...prev,
          summary: "Detalhe um pouco mais o escopo (mínimo de 15 caracteres).",
        }));
      }
    }
  };

  // Validação geral executada na tentativa de envio
  const validateFormOnSubmit = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (!formData.projectType)
      newErrors.projectType = "Selecione o tipo de demanda principal.";
    if (!formData.stage)
      newErrors.stage = "Selecione o estágio atual do seu produto.";
    if (!formData.budget)
      newErrors.budget = "Selecione uma faixa de orçamento estimada.";
    if (!formData.name.trim()) newErrors.name = "Preencha seu nome e cargo.";

    if (!formData.email.trim()) {
      newErrors.email = "Preencha seu e-mail corporativo.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Informe um e-mail válido (ex: nome@empresa.com).";
    }

    if (!formData.summary.trim()) {
      newErrors.summary = "Descreva brevemente o desafio do projeto.";
    } else if (formData.summary.trim().length < 15) {
      newErrors.summary =
        "Detalhe um pouco mais o escopo (mínimo de 15 caracteres).";
    }

    setErrors(newErrors);
    // NOTA: O telefone NÃO entra no newErrors, permitindo o envio mesmo se estiver incompleto
    return Object.keys(newErrors).length === 0;
  };

  const buildSummaryMessage = () => {
    return (
      `*Solicitação de Orçamento - Grupo Ribes*\n\n` +
      `*Nome/Cargo:* ${formData.name}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.phone || "Não informado"}\n` +
      `*Tipo de Demanda:* ${formData.projectType}\n` +
      `*Estágio do Projeto:* ${formData.stage}\n` +
      `*Faixa de Investimento:* ${formData.budget}\n\n` +
      `*Resumo do Escopo:*\n${formData.summary}`
    );
  };

  const handleSubmitEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validateFormOnSubmit()) return;

    const subject = encodeURIComponent(
      `Nova Solicitação: ${formData.projectType} - ${formData.name}`,
    );
    const body = encodeURIComponent(buildSummaryMessage());
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleSubmitWhatsApp = () => {
    if (!validateFormOnSubmit()) return;

    const text = encodeURIComponent(buildSummaryMessage());
    window.open(
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-800/80"
    >
      <div className="text-center mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-brand">
          Proposta Comercial & Atendimento
        </h2>
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
          Solicitar Orçamento de Projeto
        </p>
        <p className="mt-3 text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Preencha os parâmetros abaixo ou entre em contato diretamente com
          nossa liderança técnica pelos canais oficiais.
        </p>
      </div>

      <ContactChannels />

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10 backdrop-blur-sm shadow-xl">
        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle2 className="w-14 h-14 text-brand mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">
              Solicitação pronta para envio!
            </h3>
            <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
              Sua mensagem foi estruturada com sucesso. Retornaremos em breve
              com a análise técnica.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs text-brand hover:underline font-mono cursor-pointer"
            >
              &larr; Enviar outra solicitação
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitEmail} className="space-y-8" noValidate>
            {/* 1. Tipo de Demanda */}
            <div>
              <span className="block text-xs font-mono uppercase text-zinc-400 mb-3 tracking-wider">
                1. Tipo de Demanda Principal *
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Desenvolvimento do Zero (0-to-1)",
                  "Sustentação & Suporte 24/7",
                  "APIs & Automação de ERPs",
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => handleToggle("projectType", type)}
                    className={`py-3.5 px-4 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
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

            {/* 2. Estágio Atual */}
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
                    className={`py-3.5 px-4 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
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

            {/* 3. Orçamento Estimado */}
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
                    className={`py-3.5 px-4 rounded-lg text-xs font-medium border text-center transition cursor-pointer ${
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

            {/* 4. Dados de Contato com Validação no onBlur */}
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
                    onBlur={() => handleBlurField("name")}
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
                    onBlur={() => handleBlurField("email")}
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
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="text-[11px] font-mono uppercase text-zinc-400"
                    >
                      WhatsApp / Telefone
                    </label>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      (Opcional)
                    </span>
                  </div>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none transition ${
                      phoneWarning
                        ? "border-amber-500/60 focus:border-amber-500"
                        : "border-zinc-800 focus:border-brand"
                    }`}
                  />
                  {phoneWarning && (
                    <p className="flex items-center gap-1 text-[11px] text-amber-400 mt-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>{phoneWarning}</span>
                    </p>
                  )}
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
                  placeholder="Conte brevemente sobre o projeto: funcionalidades essenciais, integrações com ERP necessárias ou problemas operacionais atuais..."
                  value={formData.summary}
                  onChange={(e) => {
                    setFormData({ ...formData, summary: e.target.value });
                    if (errors.summary)
                      setErrors({ ...errors, summary: undefined });
                  }}
                  onBlur={() => handleBlurField("summary")}
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

            {/* Ações de Envio */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:flex-1 py-4 rounded-lg bg-brand hover:bg-brand-hover text-zinc-950 font-bold text-sm transition flex items-center justify-center gap-2 glow-brand cursor-pointer"
              >
                <span>Enviar por E-mail</span>
                <Send className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleSubmitWhatsApp}
                className="w-full sm:flex-1 py-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-emerald-500/50 text-white font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer group"
              >
                <MessageSquareShare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Enviar pelo WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
