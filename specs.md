# 📐 Shadcn Forge — Spec-Driven Development (SDD)

Este documento define as **especificações formais** do projeto *Shadcn Forge* (registry: `@cnforge`), seguindo uma abordagem de **Spec-Driven Development**.

O objetivo é garantir consistência, escalabilidade e clareza antes da implementação.

---

# 🧠 1. Visão do Produto

## 📌 Problema

Desenvolvedores perdem tempo criando UI repetitiva ou copiando blocos inconsistentes de diferentes fontes.

---

## 💡 Solução

Um **shadcn registry** que permite:

* instalar blocos de UI prontos via `npx shadcn add @cnforge/<block>`
* trocar a paleta visual instalando um theme (também via shadcn CLI)
* integrar rapidamente em projetos React/Next.js

---

## 🎯 Objetivo Principal

> Permitir que desenvolvedores adicionem blocos de UI com um único comando da CLI oficial do shadcn.

---

# 👤 2. Usuário-Alvo

### Primário:

* Desenvolvedores React / Next.js
* Criadores de SaaS
* Freelancers

### Secundário:

* UI designers com conhecimento técnico

---

# ⚙️ 3. Escopo (MVP)

## ✅ Incluído

* Registry HTTP no schema oficial shadcn (`registry:block`, `registry:file`)
* Múltiplos themes (paletas) instaláveis separadamente
* Showcase web com Preview/Code, viewport switcher e copy do snippet de install

---

## ❌ Fora do escopo (por enquanto)

* Editor visual (builder)
* Marketplace de blocos
* Sistema de autenticação
* Versionamento avançado

---

# 🧱 4. Arquitetura

## 4.1 Componentes do Sistema

```
[ Projeto consumidor ]
  └─ npx shadcn add @cnforge/<name>
       └─ GET https://cnforge.dev/r/<name>
            └─ [ Next route handler ] → [ Registry (JSON + TSX/CSS files) ]
```

---

## 4.2 Princípios

* Código é **copiado**, não importado como lib
* Blocos são **standalone TSX** usando tokens semânticos do shadcn
* Themes são **CSS files** escopados por classe (`.theme-<name>`) — uma paleta serve todos os blocos
* Sem CSS-in-JS, sem runtime de tema — só CSS vars

---

# 📦 5. Especificação do Registry

## 5.1 Estrutura de Diretórios

```
registry/
  ├── registry.json     # Índice interno (themes: string[], blocks: [...])
  ├── <block>.tsx       # Um arquivo por bloco (tokens semânticos)
  └── themes/
        ├── default.css
        ├── noir.css
        ├── solar.css
        └── ...         # Um arquivo CSS por theme: .theme-<name> { vars }
```

O endpoint HTTP fica em `app/r/[name]/route.ts` e serve cada item no schema `registry-item.json` do shadcn.

Estado atual: 54 blocos × 8 themes (`default`, `3tchat`, `noir`, `solar`, `midnight`, `ocean`, `rose`, `forest`).

Categorias: hero (6), about (3), pricing (3), features (3), navbar (3), footer (3), cta (3), faq (3), testimonials (3), logos (2), stats (2), team (2), how-it-works (2), contact (2), blog (2), banner (2), changelog (1), integrations (1), comparison (1), gallery (1), 404 (1), login (1), waitlist (1), careers (1), cookie-banner (1), roadmap (1).

---

## 5.2 Convenções

* Nome do bloco: `kebab-case` (`hero-1`)
* Nome do theme: `lowercase` (sem hífen quando possível)
* Arquivo do bloco: `registry/<name>.tsx`
* Arquivo do theme: `registry/themes/<name>.css`

---

## 5.3 Requisitos de Bloco

Cada bloco DEVE:

* exportar um componente React default
* usar **apenas tokens semânticos** do shadcn (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, `bg-muted`) + extensões cnforge (`bg-quote`, `text-quote-mark`, `text-success`) — sem cores hard-coded de paleta
* usar Tailwind CSS
* declarar `dependencies` (pacotes npm) e `registryDependencies` (shadcn primitives) em `registry.json`
* **ser responsivo** (ver §5.4)

Cores hard-coded permitidas em casos universais não-temáticos: avatares de demonstração (`bg-emerald-500`, etc.), traffic-lights de janela de código (`bg-red-400/amber-400/emerald-400`).

## 5.4 Responsividade (obrigatório)

Todo bloco DEVE renderizar bem em qualquer largura entre **375px** (mobile) e desktop.

Regras:

* **Mobile-first**: classes base (sem prefixo) devem assumir mobile. Breakpoints `sm:` `md:` `lg:` adicionam progressivamente.
* **Sem overflow horizontal** em 375px. Use `flex-wrap`, `grid-cols-1`, `min-w-0`, ou `overflow-x-auto` em conteúdo intencionalmente largo.
* **Tipografia escalonada**: títulos hero usam padrão `text-5xl sm:text-6xl` (ou similar). Nunca fixe um `text-7xl` sem fallback menor.
* **Layouts split** (ex.: `lg:grid-cols-2`) começam empilhados no mobile.
* **Toques**: alvos clicáveis ≥ 40px (botões, ícones) — herdado dos primitives shadcn quando usados sem override agressivo de altura.

Validação: o preview do showcase tem switcher Desktop/Tablet/Mobile (iframe) — todo bloco precisa passar visualmente nas três larguras antes de entrar no registry.

---

# ⚡ 6. CLI

## 6.1 Distribuição

cnforge **não tem CLI própria**. É um shadcn registry consumido pela CLI oficial (`npx shadcn`).

## 6.2 Setup do consumidor

Adicione ao `components.json` do projeto:

```json id="2c8r5n"
{
  "registries": {
    "@cnforge": { "url": "https://cnforge.dev/r/{name}" }
  }
}
```

## 6.3 Comandos

```bash id="3c8r5n"
# Instala um bloco em components/blocks/<name>.tsx
npx shadcn add @cnforge/<block>

# Instala um theme em app/themes/<name>.css (importar manualmente em globals.css)
npx shadcn add @cnforge/theme-<name>

# Em um comando só
npx shadcn add @cnforge/<block> @cnforge/theme-<name>
```

## 6.4 Output

* **Blocos**: `<aliases.components>/<block>.tsx` — convenção padrão do shadcn CLI quando não há `target` explícito (geralmente `components/<block>.tsx`).
* **Themes**: `app/themes/<name>.css` com `.theme-<name> { --background: ...; ... }` — target explícito no JSON. O usuário importa no `globals.css` e aplica a classe no elemento desejado (`<body className="theme-noir">` ou escopado).

## 6.5 Erros

A CLI oficial trata bloco/theme inexistente (HTTP 404), falha de rede, conflito de arquivo. O endpoint `/r/<name>` retorna 404 quando o item não existe no registry.

---

# 🎨 7. Sistema de Themes

## 7.1 Definição

Um **theme** é uma paleta visual identificada por nome (`default`, `noir`, `solar`, `3tchat`, `midnight`). Themes são **CSS files** escopados por classe (`.theme-<name>`) — definidos em `registry/themes/<name>.css` mapeando para:

* **CSS vars do shadcn** (`--background`, `--foreground`, `--card`, `--card-foreground`, `--border`, `--muted`, `--muted-foreground`, `--primary`, `--primary-foreground`)
* **Extensões cnforge** (`--quote`, `--quote-border`, `--quote-foreground`, `--quote-mark`, `--success`, `--title-weight`, `--title-leading`, `--sparkline-fill-opacity`)

As extensões existem porque o vocabulário shadcn padrão não cobre accent secundário (quote/halo), deltas positivos e variações tipográficas por theme.

## 7.2 Transversalidade (propriedade emergente)

Themes são **transversais por construção**: como cada bloco usa apenas tokens semânticos, trocar a classe `.theme-<name>` no escopo de renderização aplica a paleta correspondente a todos os blocos automaticamente — sem N arquivos por bloco.

Quando um theme novo é adicionado:

* criar `registry/themes/<novo>.css` definindo `.theme-<novo>` com todas as vars (shadcn + cnforge)
* adicionar o nome em `registry.json` (`themes: [...]`)
* importar no `app/globals.css`

Todos os blocos existentes passam a suportar o novo theme automaticamente.

## 7.3 Regras

* **Um arquivo por bloco**: a marcação JSX é única; cores vêm de tokens em runtime via CSS var.
* **Sem cores hard-coded de paleta**: blocos usam `bg-background`, `text-foreground`, etc. — não `bg-zinc-950` nem `text-amber-900`.
* **Mesma API de props**: temas não alteram props.
* **Theme files standalone**: cada `themes/<name>.css` define todas as vars (shadcn + cnforge) sem depender de outro arquivo.
* **Variações tipográficas via var**: `--title-weight`, `--title-leading` aplicados inline (`style={{ fontWeight: 'var(--title-weight, 700)' }}`) — não `font-extrabold` hard-coded.

## 7.4 Anti-patterns

* cores Tailwind hard-coded de paleta no JSX (`bg-zinc-950`, `text-blue-500`) ❌ (exceção: avatares de demo e traffic-lights universais)
* condicionar JSX em theme name ❌ (theme é runtime)
* mudar API de props entre themes ❌
* adicionar uma var custom sem incluí-la nos 5 themes ❌
* depender de CSS global do projeto consumidor além do shadcn padrão ❌

---

# 🧪 8. Requisitos Funcionais

## RF-01: Instalar bloco

* Usuário pode instalar um bloco via `npx shadcn add @cnforge/<name>`

---

## RF-02: Instalar theme

* Usuário pode instalar um theme via `npx shadcn add @cnforge/theme-<name>` e ativar aplicando a classe `.theme-<name>`

---

## RF-03: Criar arquivos locais

* Sistema cria os arquivos no projeto do usuário (componentes em `components/blocks/`, themes em `app/themes/`)

---

## RF-04: Schema oficial

* `/r/<name>` retorna JSON válido conforme `https://ui.shadcn.com/schema/registry-item.json`

---

# 🚫 9. Requisitos Não Funcionais

## RNF-01: Simplicidade

* zero ferramentas próprias — usar shadcn CLI oficial

---

## RNF-02: Performance

* response do registry < 100ms (cache HTTP em camada de borda)

---

## RNF-03: Compatibilidade

* React 19+
* Next.js 16+ (App Router, Turbopack)
* Tailwind CSS v4 (CSS-first config)
* shadcn/ui (preset `base-nova` — usa `@base-ui/react`)
* shadcn CLI 4.x+ (suporte a registries namespaced)

---

## RNF-04: Manutenibilidade

* estrutura previsível
* fácil adicionar novos blocos (um arquivo TSX + entry no registry.json)
* fácil adicionar novos themes (um arquivo CSS + nome no registry.json)

---

# 🧭 10. Fluxo do Usuário

```
Setup (uma vez): adicionar @cnforge em components.json
     ↓
npx shadcn add @cnforge/<block> @cnforge/theme-<name>
     ↓
arquivos copiados pro projeto → usar no código
```

---

# 📊 11. Métricas de Sucesso

* tempo de instalação < 2s
* taxa de erro baixa
* número de blocos instalados via registry
* adoção do registry em projetos externos

---

# 🚀 12. Roadmap Técnico

## Fase 1 ✓

* Registry local com 7 blocos × 5 themes (CSS vars)

---

## Fase 2 ✓

* Endpoint HTTP `/r/<name>` no schema shadcn

---

## Fase 3

* Deploy público com domínio próprio e CDN
* Documentação de setup pro consumidor

---

## Fase 4

* MCP server pra browsing/install via assistentes de IA
* Versionamento de blocos

---

# ⚠️ 13. Riscos

| Risco                                  | Mitigação                                    |
| -------------------------------------- | -------------------------------------------- |
| Tokens cnforge divergem do shadcn      | documentar extensões em §7.1                 |
| Mudança no schema da shadcn CLI        | pinar versão suportada                       |
| Baixa adoção                           | foco em qualidade dos blocos e themes        |

---

# 🎯 14. Definição de Pronto (Definition of Done)

Um bloco é considerado pronto quando:

* usa apenas tokens semânticos (sem cores hard-coded de paleta — exceto exceções §5.3)
* é responsivo (§5.4) — testado em 375px, tablet, desktop no preview do showcase
* é servido por `/r/<name>` no schema oficial shadcn `registry-item`
* pode ser instalado via `npx shadcn add @cnforge/<name>`
* funciona em um projeto Next.js standalone, sem CSS global além do reset Tailwind + import dos themes que o user escolheu

---

# 🧩 15. Extensibilidade

Sistema permite:

* **Adicionar bloco**: criar `registry/<nome>.tsx` (tokens semânticos), adicionar entry em `registry.json` (com `dependencies`, `registryDependencies`)
* **Adicionar theme**: criar `registry/themes/<nome>.css` (todas as vars shadcn + cnforge), adicionar nome em `registry.json.themes[]`, importar em `app/globals.css`
* **Adicionar var custom**: definir nos 5 themes existentes + mapear em `@theme inline` no `globals.css`

---

# 🖥️ 16. Showcase Web

O próprio Next.js do repo serve como vitrine pública dos blocos e como caminho **alternativo** de instalação (copy-paste manual, paralelo à CLI).

## 16.1 Rotas

* `/` — landing: nome, snippet de install, lista de blocos do registry, lista de themes.
* `/blocks/[slug]` — página de detalhe do bloco, com tabs **Preview** ↔ **Code**.
* `/blocks/[slug]/preview` — rota bare-bones (só o componente envolvido na classe `.theme-<name>`) usada como `src` do iframe de preview.
* `/r/[name]` — endpoint do registry shadcn-compatible.

## 16.2 Funcionalidades da página de bloco

* **Theme switcher** — pílulas com todos os themes do registry; troca via `?theme=` (URL como source-of-truth).
* **Viewport switcher** — Desktop (100%) · Tablet (768px) · Mobile (375px). Implementado via `<iframe>` com `max-width` controlado, garantindo que breakpoints `sm:`/`lg:` reajam ao tamanho real.
* **Tab Preview** — renderiza o bloco no iframe dentro de `<div className="theme-<name>">`.
* **Tab Code** — fonte TSX do bloco com syntax highlight (shiki, `github-light`/`github-dark`) e botão **Copy** (clipboard).
* **Snippet CLI** com botão **Copy** acima das tabs — formato `npx shadcn add @cnforge/<block> @cnforge/theme-<name>` quando theme ≠ default.

## 16.3 Princípio

A página de bloco serve dois objetivos: (1) **showcase** para validar visualmente blocos e themes, (2) **install path** alternativo via copy-paste do código exato que a CLI gravaria — os dois caminhos sempre entregam o mesmo arquivo.

---

# 🏁 Conclusão

Este documento define um sistema simples, mas escalável:

* Registry estruturado no schema shadcn oficial
* Distribuição via CLI oficial (sem ferramenta própria)
* Themes como CSS files transversais

---

## Próximo passo

* Deploy público do registry (Fase 3)
* Testar instalação contra projeto cliente externo
* Documentar `@cnforge` setup em README

---
