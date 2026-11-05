# project.config.md

Única parte específica do projeto. As regras em `rules/` são genéricas e consultam este arquivo.
Preencher uma vez por projeto. Campos vazios = perguntar antes de assumir.

## Stack

- Framework: React + TypeScript
- Estilo: Tailwind CSS (padrão). Outro: registrar aqui e adaptar as regras de classe.
- i18n: <biblioteca | nenhuma>
- Gerenciador de pacotes: <npm | pnpm | yarn>

## Alias de import

- `@/` -> `src/`
- <outros aliases>

## Estrutura de pastas

- Convenção: <por feature | atômica | por camada>
- Componentes de feature: `src/features/<feature>/`
- Componentes compartilhados: `src/components/`
- Hooks compartilhados: `src/hooks/`

## Onde isso mora

Tabela consultada pelo agente antes de criar qualquer arquivo. Tipo fora da tabela = perguntar.

| Tipo de código | Pasta |
|---|---|
| Componente de feature | `src/features/<feature>/` |
| Componente compartilhado | `src/components/` |
| Hook de feature | `src/features/<feature>/` |
| Hook compartilhado | `src/hooks/` |
| Service (API, storage) | `src/features/<feature>/` ou `src/services/` |
| Mapper | `src/features/<feature>/` |
| Constantes | `src/features/<feature>/` ou `src/constants/` |
| Tipos de domínio | `src/types/` |
| Pasta compartilhada entre features | `src/shared/` |

## Sufixos extras registrados

- <nenhum> (ex.: `.store.ts`, `.api.ts`)

## Contagem de linhas

- Limite: alvo 120, máximo 150
- Contar: <arquivo inteiro | sem imports/comentários/linhas em branco>

## Tratamento de erro

Destino do erro por camada. Camada ou caso não listado = perguntar.

- Service: propaga
- Hook: registra com <logger do projeto>
- UI: mostra mensagem via <toast/componente do projeto>
- Mensagens ao usuário: sempre de <i18n | arquivo de mensagens>, nunca inventadas

## Segurança

Campo vazio = o agente para e pergunta antes de implementar.

### Autenticação (obrigatório preencher quando houver login)

- Existe login neste projeto: <sim | não>
- Origem da sessão: <backend próprio | serviço terceiro (Supabase, Firebase, Auth0...) | nenhum>
- Armazenamento do token: <cookie httpOnly definido pelo backend | token em memória + refresh em cookie httpOnly | gerenciado pelo SDK do serviço | não se aplica>
- Proibido em qualquer caso: token em `localStorage` / `sessionStorage`
- Fluxo de renovação: <descrição curta | não se aplica>

### Ferramentas padrão (trocáveis)

- Sanitizador de HTML: DOMPurify
- Validador de schema: zod

### Variáveis de ambiente

- Prefixo público do bundler: <VITE_ | NEXT_PUBLIC_ | REACT_APP_>
- Origem das URLs de API: <variável de ambiente `<NOME>`>
- Exemplo versionado: `.env.example`

### Backend

- Autorização verificada no backend: <sim | não | desconhecido>

## Verificação

Comandos que o agente roda antes de dizer "pronto". Comando vazio = reportar "não verificado".

- Lint: <comando | não se aplica>
- Typecheck: <comando | não se aplica>
- Test: <comando | não se aplica>
- Build: <comando | não se aplica>

## Contexto do agente

- map: `.agents/map.md`
- learnings: `.agents/learnings.md`
- Idioma das respostas: português
- Idioma de código, comentários, nomes de arquivo e commits: inglês
- Idioma dos textos da interface: <definido pelo i18n do projeto>
- Explicação "Como funciona" por padrão: <não | sim>

## Tipos de domínio (local canônico)

- Caminho: `src/types/`
- Exemplos: `User`, `Order`

## Design system

Seção que a regra `design-system.md` e a skill `use-design-system` consultam.
Campo essencial vazio = tratar como "sem design system" (skill, fluxo B).

- Existe design system neste projeto: <sim | não>
- Abordagem de estilo: Tailwind CSS (padrão)
- Versão do Tailwind: <3.x | 4.x>
- Onde os tokens são declarados: <tailwind.config.* (v3) | bloco @theme no CSS (v4)>
- Tokens: <path>
- Componentes base: <path>
- Tamanho-base do root: 100% (1rem = 16px por padrão do navegador). Não fixar em px.

### Breakpoints (mobile-first)

Padrão do Tailwind. Ajustar se o projeto sobrescreve.

| Prefixo | Largura mínima |
|---|---|
| (nenhum) | 0 |
| sm | 40rem |
| md | 48rem |
| lg | 64rem |
| xl | 80rem |
| 2xl | 96rem |

### Mapa tipográfico (classe -> rem)

Padrão do Tailwind. A coluna "Uso" define onde a classe é permitida. "não usar" = proibida no projeto.

| Classe | font-size | line-height | Uso |
|---|---|---|---|
| text-xs | 0.75rem | 1rem | meta, rótulo auxiliar |
| text-sm | 0.875rem | 1.25rem | legenda, texto secundário |
| text-base | 1rem | 1.5rem | corpo, h5, h6 |
| text-lg | 1.125rem | 1.75rem | h4 (base), destaque de corpo |
| text-xl | 1.25rem | 1.75rem | h3 (base), h4 (md) |
| text-2xl | 1.5rem | 2rem | h2 (base), h3 (md) |
| text-3xl | 1.875rem | 2.25rem | h1 (base), h2 (md) |
| text-4xl | 2.25rem | 2.5rem | h1 (md), h2 (lg) |
| text-5xl | 3rem | 1 | h1 (lg) |
| text-6xl | 3.75rem | 1 | <não usar | definir> |
| text-7xl | 4.5rem | 1 | <não usar | definir> |
| text-8xl | 6rem | 1 | <não usar | definir> |
| text-9xl | 8rem | 1 | <não usar | definir> |

### Escala responsiva por papel

Padrão inicial. Mobile-first: da base para cima.

| Papel | Elemento | base | md | lg |
|---|---|---|---|---|
| Título da página | h1 | text-3xl | text-4xl | text-5xl |
| Título de seção | h2 | text-2xl | text-3xl | text-4xl |
| Subseção | h3 | text-xl | text-2xl | text-2xl |
| Subtítulo menor | h4 | text-lg | text-xl | text-xl |
| Cabeçalho mínimo | h5, h6 | text-base | text-base | text-base |
| Corpo | p | text-base | text-base | text-base |
| Legenda / secundário | small, figcaption | text-sm | text-sm | text-sm |
| Meta / rótulo auxiliar | span, time | text-xs | text-xs | text-xs |

O nível do heading vem da estrutura do HTML. O tamanho vem do papel.

### Tokens semânticos

- Cores: <primary, secondary, danger, success, warning, neutros, texto, fundo, borda>
- Espaçamento permitido: <escala do projeto>
- Raio: <tokens>
- Sombra: <tokens>
- Tema: <claro | escuro | ambos>
- Fonte: <família e pesos>

## Whitelist (lista fechada)

Qualquer item fora da lista exige pedido explícito.

### Ícones permitidos

- Biblioteca: <lucide-react | outra>
- Permitidos: <close, menu, chevron-down, ...>

### Variantes de Badge permitidas

- <success | warning | error | info>
- Uso permitido apenas com dado real (status, contagem)

### Componentes base permitidos

- <Button, Input, Modal, ...>

## Exceções

- <regra> -> <motivo>
