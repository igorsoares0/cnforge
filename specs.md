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
* **Tiers de bloco** (`free` / `pro`) — blocos pro exigem entitlement (ver §17)
* **Autenticação** (Auth.js v5 — Google OAuth + e-mail/senha com verificação)
* **Pagamentos** (Paddle Billing) com planos `individual` e `team`
* **Registry tokens** pessoais para instalar blocos pro via shadcn CLI (ver §18)
* **Times** com convites por e-mail e acesso compartilhado por assento
* **Dashboard** do usuário (billing, registry token, time)

---

## ❌ Fora do escopo (por enquanto)

* Editor visual (builder)
* Marketplace de blocos (compra/venda por terceiros)
* Versionamento avançado de blocos
* Assinaturas recorrentes (o modelo atual é compra única / one-time)

---

# 🧱 4. Arquitetura

## 4.1 Componentes do Sistema

```
[ Projeto consumidor ]
  └─ npx shadcn add @cnforge/<name>   (+ Authorization: Bearer cnf_… para blocos pro)
       └─ GET https://cnforge.dev/r/<name>
            └─ [ Next route handler ]
                 ├─ free / theme → serve registry-item (cache público)
                 └─ pro → resolve token → entitlement (Prisma/Neon)
                          ├─ ok    → serve registry-item (no-store)
                          └─ falha → 401 (aponta pra /pricing)

[ Showcase + Dashboard ]  Auth.js (Google + e-mail/senha) · Paddle (checkout/webhook) · Resend (e-mails)
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

Estado atual: 140 blocos × 8 themes (`default`, `3tchat`, `noir`, `solar`, `midnight`, `ocean`, `rose`, `forest`). Dos 140 blocos, **21 são `free`** (instaláveis sem login) e **119 são `pro`** (exigem registry token de usuário com entitlement ativo — ver §17/§18).

Categorias: hero (17), about (4), pricing (10), features (9), navbar (4), footer (9), cta (4), faq (4), testimonials (5), logos (3), stats (4), team (4), how-it-works (4), contact (5), blog (3), blogpost (3), banner (3), changelog (2), integrations (2), comparison (3), gallery (3), 404 (2), login (5), waitlist (2), careers (2), cookie-banner (2), roadmap (2), dashboard (3), onboarding (2), settings (2), notification (2), empty-state (1), profile (1), payment (1), signup (4), forgot-password (1), maintenance (1), sidebar (2).

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

O campo opcional `tier` em cada entry do `registry.json` define a monetização: `"free"` torna o bloco instalável publicamente; ausente ou `"pro"` exige entitlement. O default seguro é **pro** (`tierOf()` em `lib/registry.ts`: um bloco só é free quando explicitamente `tier: "free"`).

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

Para instalar blocos **pro**, o consumidor anexa seu registry token (gerado no dashboard) como bearer no header — formato suportado pela shadcn CLI:

```json id="2c8r5n-pro"
{
  "registries": {
    "@cnforge": {
      "url": "https://cnforge.dev/r/{name}",
      "headers": { "Authorization": "Bearer ${CNFORGE_TOKEN}" }
    }
  }
}
```

Blocos `free` e todos os themes não exigem token.

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
* `/r/[name]` — endpoint do registry shadcn-compatible (gating de blocos pro — ver §18).
* `/pricing` — planos `individual` e `team`, com checkout Paddle.
* `/login`, `/signup`, `/forgot-password`, `/reset-password`, `/verify-email` — fluxo de autenticação (route group `(auth)`).
* `/dashboard` — área logada; sub-rotas `billing`, `registry-token`, `team`. Protegida pelo `proxy.ts` (matcher `/dashboard/:path*`).
* `/invite/[token]` — aceite de convite de time.
* `/api/auth/[...nextauth]` — handlers do Auth.js.
* `/api/paddle/webhook` — recebe eventos do Paddle (fulfillment / refund).

## 16.2 Funcionalidades da página de bloco

* **Theme switcher** — pílulas com todos os themes do registry; troca via `?theme=` (URL como source-of-truth).
* **Viewport switcher** — Desktop (100%) · Tablet (768px) · Mobile (375px). Implementado via `<iframe>` com `max-width` controlado, garantindo que breakpoints `sm:`/`lg:` reajam ao tamanho real.
* **Tab Preview** — renderiza o bloco no iframe dentro de `<div className="theme-<name>">`.
* **Tab Code** — fonte TSX do bloco com syntax highlight (shiki, `github-light`/`github-dark`) e botão **Copy** (clipboard).
* **Snippet CLI** com botão **Copy** acima das tabs — formato `npx shadcn add @cnforge/<block> @cnforge/theme-<name>` quando theme ≠ default.

## 16.3 Princípio

A página de bloco serve dois objetivos: (1) **showcase** para validar visualmente blocos e themes, (2) **install path** alternativo via copy-paste do código exato que a CLI gravaria — os dois caminhos sempre entregam o mesmo arquivo.

---

# 🔐 17. Autenticação & Pagamentos

A camada comercial transforma o cnforge num registry com blocos **free** (públicos) e **pro** (atrás de paywall). Stack: **Auth.js v5 + Prisma 7 + Neon (Postgres) + Resend (e-mail) + Paddle Billing**.

## 17.1 Autenticação

* **Auth.js v5 (NextAuth)** com **estratégia JWT** de sessão (`session.strategy = "jwt"`), exigida pelo provider Credentials.
* Providers: **Google OAuth** e **Credentials** (e-mail + senha com `bcryptjs`).
* Config dividida em dois arquivos por causa do edge runtime:
  * `auth.config.ts` — base **edge-safe** (sem Prisma/bcrypt), usada pelo `proxy.ts` (middleware do Next 16, renomeado de `middleware` → `proxy`). Contém o callback `authorized` que protege `/dashboard`.
  * `auth.ts` — adiciona `PrismaAdapter` + provider Credentials (precisa de APIs Node).
* **Verificação de e-mail obrigatória**: login por Credentials retorna `null` enquanto `emailVerified` for nulo (não vaza qual fator falhou; a página de login oferece "reenviar verificação").
* **E-mails transacionais via Resend** (`lib/email.ts`): verificação, reset de senha e convite de time. Todos com `idempotencyKey`.
* **Reset de senha**: modelo `PasswordResetToken` (expira em 1h).

## 17.2 Modelo de dados (Prisma)

* **Auth.js**: `User` (com `passwordHash` opcional — null para contas OAuth-only), `Account`, `Session` (não usada em runtime com JWT, mas exigida pelo adapter), `VerificationToken`.
* **Billing**: `Purchase` (1 por transação Paddle; `plan`, `status` = `active|refunded`, `paddleTransactionId` único para idempotência).
* **Times**: `Team` (1:1 com a `Purchase` do plano team, `seatLimit` default 10), `TeamMember` (roles `owner|member`), `TeamInvite` (status `pending|accepted|revoked`, token único, expira).
* **Registry tokens**: `RegistryToken` (ver §18).

## 17.3 Planos & Pagamentos (Paddle)

* Dois planos (`Plan` enum): **`individual`** e **`team`**. Modelo de compra **one-time** (não recorrente).
* `lib/paddle.ts` mapeia Paddle price id → plano (`planForPrice`); Paddle SDK construído lazy, ambiente sandbox/production por env.
* **Webhook** (`/api/paddle/webhook`): verifica assinatura com o **raw body** + `PADDLE_WEBHOOK_SECRET`.
  * `transaction.completed` → `fulfillTransaction`: cria a `Purchase` (idempotente por `paddleTransactionId`); se plano = `team`, cria `Team` + `TeamMember` owner. O `userId` vem do `customData` da transação.
  * `adjustment.created` / `adjustment.updated` com `status: "approved"` e `action` `refund`/`chargeback` → `revokeForAdjustment`: marca a `Purchase` como `refunded`. (Paddle Billing não emite `transaction.refunded`; refunds chegam como adjustments.)

## 17.4 Entitlements (`lib/entitlements.ts`)

`getAccess(userId)` retorna acesso pro se o usuário tem uma `Purchase` `individual` ativa **ou** é membro de um time cuja purchase está ativa. Como o gating só conta purchases `active`, marcar uma purchase como `refunded` revoga o acesso do comprador **e** de todos os membros do time de uma vez. `isEntitled(userId)` é o atalho booleano usado pelo endpoint do registry.

---

# 🎟️ 18. Registry Tokens & Gating de blocos pro

## 18.1 Tokens

* `RegistryToken` é um **PAT** (personal access token) para autenticar a shadcn CLI ao instalar blocos pro.
* `lib/registry-token.ts`:
  * Formato: prefixo `cnf_` + 24 bytes aleatórios (base64url).
  * Persiste **apenas o hash SHA-256** (token de alta entropia ⇒ hash rápido é seguro e indexável); o plaintext é mostrado **uma única vez** na criação.
  * `createRegistryToken` substitui qualquer token existente do usuário (transação delete+create) — um token ativo por usuário.
  * `resolveRegistryToken` → `userId` (ou null); atualiza `lastUsedAt` em best-effort sem bloquear a resposta.
* Gerenciado em `/dashboard/registry-token`.

## 18.2 Gating no endpoint `/r/[name]`

Ordem de avaliação no route handler:

1. **Themes** (`theme-*`) → sempre livres.
2. Bloco inexistente → `404`.
3. Bloco **`pro`** sem autorização → `401` com mensagem instruindo a adicionar o token ou comprar em `/pricing`.
4. Caso contrário → serve o `registry-item` JSON.

Autorização (`isAuthorized`): extrai o bearer do header `Authorization`, resolve via `resolveRegistryToken`, e confirma `isEntitled`.

**Cache**: blocos free e themes usam `public, max-age=60, s-maxage=300`; blocos pro usam **`private, no-store`** (conteúdo gated por usuário não pode entrar em cache compartilhado).

## 18.3 CLI própria — descontinuada

`cli/cnforge.mjs` agora só imprime um aviso de deprecação: o cnforge é distribuído **exclusivamente** como shadcn registry, consumido pela CLI oficial. Não há ferramenta própria (mantém RNF-01).

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
