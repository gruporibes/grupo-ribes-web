// 1. Headline dividida para permitir o destaque visual sem duplicar texto
const headlinePrefix = "Desenvolvimento de Software Sob Medida, Suporte 24/7 &";
const headlineHighlight = "APIs para Automação de ERPs.";
const fullHeadline = `${headlinePrefix} ${headlineHighlight}`;

export const siteConfig = {
  name: "Grupo Ribes",
  // A descrição geral agora herda automaticamente a headline oficial:
  description: `${fullHeadline} Soluções de engenharia para agilizar processos e garantir estabilidade operacional.`,

  navItems: [
    { label: "Serviços", href: "#services" },
    { label: "Soluções", href: "#solutions" },
    { label: "Modelos", href: "#models" },
    { label: "Stack", href: "#tech" },
  ],

  hero: {
    headline: {
      prefix: headlinePrefix,
      highlight: headlineHighlight,
      full: fullHeadline,
    },
    subheadline:
      "Construímos sistemas web do zero, conectamos seu ERP a novas ferramentas via APIs dedicadas e cuidamos da sustentação operacional da sua empresa com suporte proativo.",
    ctaPrimary: "Solicitar Proposta",
    ctaSecondary: "Conhecer Nossos Serviços",
  },

  metrics: [
    { value: "99.9%", label: "Disponibilidade com SLA Garantido" },
    { value: "0-to-1", label: "Criação de Softwares do Zero ao Deploy" },
    { value: "< 15 min", label: "Resposta Rápida para Chamados Críticos" },
    { value: "100%", label: "Integrações e APIs Seguras" },
  ],

  // Os 3 serviços centralizados aqui (100% DRY):
  services: [
    {
      id: "srv-01",
      title: "Desenvolvimento Sob Medida",
      subtitle: "Sistemas Web, Portais & Aplicativos",
      description:
        "Desenhamos e programamos softwares e painéis administrativos do zero, perfeitamente integrados à rotina da sua equipe para eliminar gargalos e planilhas paralelas.",
      tags: [
        "Sistemas Web",
        "Painéis Administrativos",
        "Portais Internos",
        "MVPs",
      ],
    },
    {
      id: "srv-02",
      title: "Suporte & Sustentação 24/7",
      subtitle: "Garantia de Estabilidade & Continuidade",
      description:
        "Monitoramento contínuo, correção imediata de falhas, backups automáticos e atualizações de segurança para sistemas que não podem parar de funcionar.",
      tags: ["Monitoramento 24/7", "SLA Rápido", "Correção de Bugs", "Backups"],
    },
    {
      id: "srv-03",
      title: "APIs & Automação de ERPs",
      subtitle: "Integração de Dados & Eficiência Operacional",
      description:
        "Desenvolvemos APIs seguras para integrar seu ERP existente com plataformas web, WhatsApp, emissores de contratos ou bancos de dados externos, acabando com tarefas manuais.",
      tags: [
        "Criação de APIs",
        "Integração de ERPs",
        "Webhooks",
        "Automação de Rotinas",
      ],
    },
  ],
  contact: {
    email: "afonso.gruporibes@gmail.com",
    phone: "(15) 99607-4400",
    whatsappNumber: "5515996074400",
    whatsappMessage:
      "Olá! Gostaria de conversar com a liderança técnica do Grupo Ribes sobre um projeto.",
    responseTime: "Resposta em até 2 horas úteis",
    location: "Sorocaba, SP • Atendimento Nacional",
  },
};
