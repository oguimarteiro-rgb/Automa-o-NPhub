# NP Hub design-sync — notes

Repo-specific gotchas for future syncs. This is a Next.js 14 marketing app, NOT
a published component library — synced via the package shape in synth-entry-ish
mode with a hand-authored barrel.

## Setup facts

- **Config home / package dir**: `site/` (repo root is the git root
  `/home/oguim/Documentos/NP Hub`). All `cfg.*` paths resolve relative to the
  package dir (`site/`), even `extraFonts`/`docsDir` (the workspaceRoot — the git
  root — is only the outer *bound*, not the base). So paths are written
  `site`-relative. (Was `NP Hub/site/` before the July 2026 repo reorg that
  flattened the nested folder.)
- **Entry is a hand-authored barrel**: `.design-sync/entry.tsx` (set as
  `cfg.entry`). It exports exactly the reusable brand components — no page-locked
  sections (Hero/Manifesto/Method/…), no `SmoothScroll` (Next/Lenis behavior
  wrapper, no visual). To add/remove a synced component, edit this barrel AND
  `cfg.componentSrcMap`.
- **No dist, no published .d.ts** → props come from `cfg.dtsPropsFor` (hand-written
  per component). If a component's real props change in source, update
  `dtsPropsFor` too — it will NOT auto-track.
- **CSS is compiled by `.design-sync/build-css.mjs`** (run it before the
  converter): Tailwind (`app/globals.css`) → `.design-sync/.cache/compiled.css`
  (= `cfg.cssEntry`). It also inlines `public/noise.svg` as a data URI and
  defines `--font-inter` / `--font-playfair` (next/font sets these at runtime;
  the bundle has no Next, so they're defined here).
- **Fonts self-hosted**: `.design-sync/fonts-src/` holds Inter + Playfair Display
  (OFL) woff2 (latin + latin-ext only) + `brand-fonts.css` (= `cfg.extraFonts`),
  fetched once by `.design-sync/fonts-src/fetch-fonts.mjs`. Re-run that script
  only if the font set changes.

## Gotchas (cost real debugging — don't rediscover)

- **`.ds-sync/storybook/http-serve.mjs` was patched** to send
  `charset=utf-8` on `.js`/`.css`/`.html`. WITHOUT it, the bundle's raw-UTF-8
  regex in `WordReveal` (`/[^a-zA-ZÀ-ſ]+/`) is mis-decoded → "Range out of
  order in character class" → the whole IIFE throws → `window.NPHub` is
  undefined → `[BUNDLE_EXPORT] 7/7 not a component`. This is a fork of a staged
  script (re-copied on every re-sync by the skill's `cp -r`), so **re-apply the
  charset patch after re-staging** (or, better, upstream it). The shipped cards
  are fine (they carry `<meta charset="utf-8">`); only the synthetic smoke test
  and the local serve need it.
- **Frozen-clock entrance animations**: `package-capture.mjs` freezes the clock,
  so framer-motion entrance animations (`initial={{opacity:0}}`, `whileInView`,
  `BrandSymbolBuild`'s sequenced build) stay stuck invisible. Fix:
  `entry.tsx` exports `__setPreviewMode()` which flips
  `MotionGlobalConfig.skipAnimations = true` on the SAME framer instance the
  bundle uses. Every authored preview calls
  `(window as any).NPHub?.__setPreviewMode?.()` at module top. `__setPreviewMode`
  is NOT in `componentSrcMap`, so it ships on `window.NPHub` but gets no card and
  isn't checked by `[BUNDLE_EXPORT]`. Real designs never call it → animations
  intact in production.
- **Arbitrary Tailwind classes don't compile in previews**: the JIT only emits
  classes it finds in `app/`+`components/` (the config's content globs). Invented
  values like `text-[2.75rem]` are absent from `compiled.css`. Also Tailwind
  preflight resets `<h1>` to `font-size: inherit`. So in previews, use **inline
  styles for arbitrary sizing** ("layout glue") and reserve Tailwind classes for
  the brand vocabulary the app actually uses (`font-serif`, `serif-italic`,
  `text-olive`, `editorial-credit`, `magnetic-btn`, `bg-graphite`, `bg-olive`,
  `px-9`, `tracking-[0.16em]`, etc. — those DO exist).

## Known render warns (triaged legitimate)

- `[RENDER_THIN]` on `BrandSymbol` / `BrandSymbolBuild` floor cards: they're SVG
  marks with no text — "thin" is a false positive for pure-SVG components. (Once
  authored previews exist they grade good regardless.)
- `Loader` ships the **floor card by design** — it's a full-screen, time-driven
  page-intro overlay (self-dismisses after ~1.9s), not a static reusable block.
  Not a failure. Authorable later if desired, but capture would be
  nondeterministic (the timeout races the screenshot).

## Re-sync risks (what can silently go stale)

- **`dtsPropsFor` is hand-written** — if component props drift in source, the
  synced `.d.ts` lies. Re-check against the component source on any real change.
- **`__setPreviewMode` couples to framer-motion's `MotionGlobalConfig.skipAnimations`**
  (framer 11.18.2). A major framer bump could rename/remove it → previews go
  blank again. If entrance-animated previews render invisible after an upgrade,
  check that API first.
- **The http-serve charset patch lives in staged `.ds-sync/`** (re-copied each
  sync). If a re-sync skips the patch, `[BUNDLE_EXPORT]` fails spuriously — the
  bundle is fine, the server isn't.
- **Fonts are latin + latin-ext only.** Fine for pt-BR; other scripts would fall
  back. Re-fetch via `fetch-fonts.mjs` if the language scope widens.
- **Brand tokens/fonts were fetched from Google Fonts once.** Deterministic, but
  the fetch needs network on a fresh clone (the woff2 are committed under
  `.design-sync/fonts-src/`, so a normal re-sync does NOT re-fetch).
