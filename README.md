# Portfólio Pessoal — Raphael Muller

Uma landing page de apresentação pessoal desenvolvida com **Next.js**, com o objetivo de centralizar minhas informações de perfil, habilidades técnicas e formas de contato de maneira simples e visualmente atrativa.

---

## Motivação

Este projeto nasceu do desejo de ter uma presença online autêntica que refletisse não apenas minhas habilidades técnicas, mas também a minha personalidade. As histórias em quadrinhos sempre foram uma fonte de inspiração para mim — a narrativa visual, os personagens marcantes e o estilo artístico único me acompanham até hoje. Por isso, toda a interface foi construída com uma **temática de HQs e estilo Batman**, transformando cada seção em um "capítulo" de uma história.

---

## Objetivo

O propósito desta aplicação é ser uma **landing page estática e performática**, sem complexidade desnecessária. Ela serve como cartão de visitas digital, apresentando:

- Minha identidade e trajetória como desenvolvedor.
- Minhas principais tecnologias e habilidades (o "Cinto de Utilidades").
- Projetos que desenvolvi.
- Canais de contato direto.

---

## Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| [Next.js](https://nextjs.org/) | Framework principal (App Router, renderização estática) |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para maior segurança no código |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária e responsiva |
| [Framer Motion](https://www.framer.com/motion/) | Animações e transições de entrada |
| [React Slick](https://react-slick.neostack.com/) | Carrossel de habilidades |
| [React Icons](https://react-icons.github.io/react-icons/) / [Iconify](https://iconify.design/) | Ícones das tecnologias |
| [Formspree](https://formspree.io/) | Envio de formulário de contato sem backend próprio |
| [Vercel](https://vercel.com/) | Hospedagem e deploy contínuo |

---

## Estrutura do Projeto

```
app/
├── components/        # Componentes reutilizáveis da interface
│   └── ui/            # Componentes visuais (ActionBadge, Carrossel, Skyline, etc.)
├── constants/         # Dados estáticos e imutáveis (projetos, skills, links, etc.)
├── sections/          # Seções da landing page (Hero, About, Skills, Projects, Contact)
│   └── hooks/         # Hooks customizados com lógica de formulário
├── globals.css        # Estilos globais e tokens do design system
├── layout.tsx         # Layout raiz da aplicação
└── page.tsx           # Página principal
public/                # Imagens e assets estáticos
```

---

## Seções da Landing Page

1. **Hero** — Apresentação inicial com nome, título e navegação rápida.
2. **Capítulo 1: Origem** — Breve bio, foto do workspace e estatísticas.
3. **Capítulo 2: O Arsenal Tecnológico** — Carrossel interativo com as tecnologias dominadas.
4. **Capítulo 3: Missões Concluídas** — Cards dos projetos desenvolvidos.
5. **Contato** — Formulário de contato e links para redes sociais.

---

## Como Executar Localmente

**Pré-requisitos:** Node.js 18+ e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/RaphaMuller/Portifolio.git
cd Portifolio

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um arquivo .env.local na raiz com:
NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/SEU_ID_AQUI

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

---

## Variáveis de Ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_URL` | URL do endpoint do Formspree para o formulário de contato |

> **Nota:** O arquivo `.env.local` não é versionado (está no `.gitignore`). Em produção, configure esta variável diretamente no painel da Vercel em **Settings → Environment Variables**.

---

## Deploy

O projeto está hospedado na **Vercel** com deploy contínuo configurado. Qualquer push para a branch `main` aciona automaticamente um novo build e deploy.

URL de produção: [portifolio-sable-tau.vercel.app](https://portifolio-sable-tau.vercel.app)

---

## Licença

Este projeto é de uso pessoal. O código pode ser consultado livremente como referência, mas não é destinado à redistribuição ou uso comercial.
