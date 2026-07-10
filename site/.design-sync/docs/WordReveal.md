---
category: Typography
---

Reveals a line of text word by word on mount — each word rises into place with a staggered spring. The NP Hub signature for headlines and manifesto lines. Use `highlights` to accent specific words (e.g. set them in serif italic).

## Example

```tsx
// Large headline; accent two words in brand serif-italic
<WordReveal
  as="h1"
  text="Pensamos o problema. Criamos o caminho."
  className="font-serif text-[clamp(2rem,5vw,4rem)] leading-tight text-graphite"
  highlights={{ problema: "serif-italic text-olive", caminho: "serif-italic text-olive" }}
/>

// Body reveal
<WordReveal as="p" text="Marketing, tecnologia e automação." className="text-graphite-soft" />
```

## Notes

- `text` is required. `as` picks the tag (`h1`–`h3`, `p`, `span`; default `span`).
- `highlights` maps a lowercase word → extra classes applied to that word only.
- `delay` / `stagger` (seconds) tune the entrance timing.
