# NP Hub — Site institucional

Site one-page da NP Hub, marketing, tecnologia e automação para o mercado imobiliário.

> **Pensamos o problema. Criamos o caminho.**

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animações)
- Lenis (smooth scroll)
- react-hook-form + zod (formulário de contato)
- next/font (Inter + Playfair Display)

## Como rodar

```bash
cd site
npm install
npm run dev
```

Abra <http://localhost:3000>.

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
site/
├─ app/                    # App Router (layout, page, metadata, sitemap, robots)
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ globals.css          # tokens da marca + utilitários
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
│  ├─ BrandSymbol.tsx      # símbolo da marca (animado)
│  ├─ Loader.tsx           # loader inicial
│  ├─ SmoothScroll.tsx     # integração com Lenis
│  ├─ MagneticButton.tsx   # botão magnético
│  ├─ EditorialHeader.tsx  # cabeçalho editorial por seção
│  ├─ WordReveal.tsx       # revelação tipográfica por palavra
│  ├─ ContactForm.tsx      # formulário de convite
│  └─ sections/
│     ├─ Hero.tsx
│     ├─ Manifesto.tsx
│     ├─ Capabilities.tsx
│     ├─ Method.tsx
│     ├─ ForWho.tsx
│     ├─ Principles.tsx
│     ├─ Contact.tsx
│     └─ Footer.tsx
├─ lib/
│  └─ schemas.ts           # validação zod do formulário
└─ public/
   ├─ logo.svg
   └─ noise.svg            # textura de papel
```

## Tokens da marca

Definidos em `app/globals.css` como CSS variables:

| Token              | Valor       | Uso                              |
| ------------------ | ----------- | -------------------------------- |
| `--cream`          | `#F5F1E8`   | fundo principal                  |
| `--cream-dark`     | `#EBE6D7`   | seções alternadas                |
| `--graphite`       | `#1F1F1F`   | tipografia principal             |
| `--graphite-soft`  | `#4A4A4A`   | textos secundários               |
| `--olive`          | `#6B7A3F`   | acento principal                 |
| `--olive-soft`     | `#8A9658`   | hover states                     |
| `--navy`           | `#1E3A5F`   | linhas e detalhes                |
| `--brown`          | `#5C4632`   | acento quente, raro              |

## Formulário

A submissão do formulário está **mockada** (delay de 900ms, depois sucesso). Para conectar com Resend, edite `components/ContactForm.tsx` (função `onSubmit`) e adicione uma API route em `app/api/contact/route.ts` chamando o SDK do Resend.

## Acessibilidade & performance

- `prefers-reduced-motion` desabilita animações decorativas
- Tipografia fluida com `clamp()` em todos os títulos
- next/font auto-hospedado (zero layout shift)
- Estados de foco visíveis com outline em verde oliva
- Touch targets ≥ 44px em mobile

## Licença

© 2026 NP Hub. Todos os direitos reservados.
