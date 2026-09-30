# Grupo Ribes • Website Oficial

> **Plataforma institucional e vitrine técnica do Grupo Ribes.**  
> Engenharia de software sob medida, sustentação operacional 24/7 e automação de processos corporativos via APIs para ERPs.

---

## 🚀 Stack Tecnológica

O projeto foi construído utilizando as tecnologias mais modernas e estáveis do ecossistema React/Web:

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estática estrita)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) com tokens semânticos de marca
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Qualidade de Código:** ESLint + SonarQube rules (Acessibilidade WCAG e Clean Code)

---

## 🏛️ Arquitetura e Estrutura de Pastas

```text
grupo-ribes-web/
├── public/                 # Favicon, assets e logo.svg oficial
├── src/
│   ├── app/
│   │   ├── globals.css     # Design System, variáveis de tema (@theme) e resets
│   │   ├── layout.tsx      # Layout mestre (Navbar, Meta Tags, Fontes)
│   │   └── page.tsx        # Homepage (Hero, Serviços, Soluções, Contato)
│   ├── components/         # Componentes modulares reutilizáveis
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FlowingLines.tsx    # Fundo vetorial fluido e dinâmico
│   │   ├── CaseStudies.tsx     # Estudo de caso em destaque
│   │   ├── EngagementModels.tsx# Modelos comerciais de parceria
│   │   ├── TechStack.tsx       # Stack e protocolos de segurança
│   │   └── ContactForm.tsx     # Formulário de qualificação e orçamento
│   └── config/
│       └── site.ts         # Single Source of Truth (SSOT) para textos e dados
├── .gitignore
├── package.json
└── README.md
```

## 🌿 Fluxo de Branches (Git Workflow)

Para garantir estabilidade e colaboração segura entre a equipe, seguimos uma estratégia simplificada baseada no GitHub Flow:
main (Produção): Contém apenas o código estável e auditado em produção. Commits diretos são bloqueados.
develop (Homologação): Branch principal de integração. É onde testamos as novas funcionalidades antes do release oficial.
feature/nome-da-tarefa: Branches temporárias de trabalho criadas a partir da develop.
code
Bash

# Criar uma nova feature a partir da develop atualizada:

git checkout develop
git pull
git checkout -b feature/minha-alteracao

# Após finalizar e testar:

git checkout develop
git merge feature/minha-alteracao
git push origin develop
🛠️ Como Executar Localmente
Pré-requisitos
Node.js 18.17+ ou superior instalado
Gerenciador de pacotes npm ou pnpm
Instalação
code
Bash

# 1. Clone o repositório

git clone https://github.com/SEU-USUARIO/grupo-ribes-web.git

# 2. Acesse a pasta do projeto

cd grupo-ribes-web

# 3. Instale as dependências

npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
Abra http://localhost:3000 no navegador para visualizar o site.
Comandos Disponíveis
npm run dev: Inicia o ambiente de desenvolvimento local.
npm run build: Compila e valida o projeto para produção.
npm run lint: Executa a checagem estática de código com o ESLint.
📬 Contato & Comunicação
E-mail: contato@gruporibes.com
WhatsApp: Atendimento direto com a liderança técnica
Site: gruporibes.com
© Grupo Ribes. Long-term technical growth engine.
