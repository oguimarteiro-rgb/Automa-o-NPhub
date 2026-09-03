# NP Hub — brand conventions

NP Hub is a marketing, technology & automation company for the real-estate market. The
look is **editorial and calm**: a warm cream paper canvas, near-black graphite
type, an olive accent, and a serif/sans pairing (Playfair Display headlines,
Inter body). Signature move: reveal a headline word-by-word with one or two words
set in **serif italic olive**.

## Setup — link one stylesheet

Components read their styling from `styles.css` (it `@import`s the tokens, the
self-hosted fonts, and `_ds_bundle.css`). Link it once at the app root:

```html
<link rel="stylesheet" href="styles.css">
```

There is **no provider/context to wrap** — components render styled as soon as
`styles.css` is present. Fonts (Inter, Playfair Display) ship with the bundle;
don't add Google Fonts links.

## Styling idiom — Tailwind + brand tokens

Style with **Tailwind utility classes** built on the brand tokens, plus a few
named editorial classes. Never invent hex values — use the token classes/vars.

**Color tokens** (as `bg-*` / `text-*` / `border-*`, or `var(--*)`):

| Token | Var | Use |
|---|---|---|
| `cream` / `cream-dark` | `--cream` / `--cream-dark` | page background, light surfaces |
| `graphite` / `graphite-soft` | `--graphite` / `--graphite-soft` | primary text, dark surfaces / muted text |
| `olive` / `olive-soft` | `--olive` / `--olive-soft` | the accent — highlights, CTAs, focus |
| `navy` | `--navy` | dividers, rare deep accent |
| `brown` | `--brown` | rare warm accent |

**Type**: `font-serif` (Playfair Display — headlines, `serif-italic` for accented
words) and `font-sans` (Inter — body, default). Premium easing: `ease-premium`
(`cubic-bezier(.16,1,.3,1)`).

**Named editorial classes** (in the shipped CSS):

- `serif-italic` — Playfair italic, for accented words in a headline.
- `editorial-credit` — small tracked uppercase caption/eyebrow (mastheads, labels).
- `section-divider` — thin navy hairline rule between sections.
- `drop-cap` — magazine drop-cap on a paragraph's first letter.
- `paper-texture` — subtle paper-grain overlay (adds a `::before`; put on a
  `position:relative` block).
- `magnetic-btn` — applied automatically by `MagneticButton` (hover fill); style
  the button's background/padding/text via `className`.

## Where the truth lives

Read `styles.css` and its imports (`tokens/`, `_ds_bundle.css`) before styling,
and the per-component `<Name>.prompt.md` for usage. Components are on
`window.NPHub`.

## One idiomatic build

```tsx
<section className="paper-texture relative bg-cream px-8 py-28">
  <EditorialHeader edition="NP HUB — MÉTODO" index="Nº 001" />
  <div className="section-divider" />
  <div style={{ fontSize: "2.75rem", fontWeight: 500, lineHeight: 1.1 }}>
    <WordReveal
      as="h1"
      text="Pensamos o problema. Criamos o caminho."
      className="font-serif text-graphite"
      highlights={{ problema: "serif-italic text-olive", caminho: "serif-italic text-olive" }}
    />
  </div>
  <MagneticButton className="mt-10 bg-graphite px-9 py-5 text-cream">
    <span className="text-[0.95rem] font-medium tracking-[0.16em]">COMEÇAR A CONVERSA</span>
  </MagneticButton>
</section>
```

Note: arbitrary Tailwind values (e.g. `text-[2.75rem]`) only exist if the app
already uses them — for one-off sizes, use inline styles as above; for brand
styling, use the token classes, which always resolve.
