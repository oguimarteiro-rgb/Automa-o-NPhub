import { WordReveal } from "np-hub-site";

// Freeze framer entrance animations to their final state for static capture.
(window as any).NPHub?.__setPreviewMode?.();

export function Headline() {
  return (
    <div style={{ padding: 24, background: "var(--cream)", maxWidth: 720, fontSize: "2.75rem", fontWeight: 500, lineHeight: 1.08 }}>
      <WordReveal
        as="h1"
        text="Pensamos o problema. Criamos o caminho."
        className="font-serif text-graphite"
        highlights={{ problema: "serif-italic text-olive", caminho: "serif-italic text-olive" }}
      />
    </div>
  );
}

export function BodyLine() {
  return (
    <div style={{ padding: 24, background: "var(--cream)", maxWidth: 640, fontSize: "1.15rem", lineHeight: 1.7 }}>
      <WordReveal
        as="p"
        text="Marketing, tecnologia e automação para o mercado imobiliário."
        className="text-graphite-soft"
      />
    </div>
  );
}

export function Eyebrow() {
  return (
    <div style={{ padding: 24, background: "var(--graphite)", maxWidth: 520 }}>
      <WordReveal
        as="span"
        text="NP HUB — DESDE 2026"
        className="editorial-credit"
        wordClassName="text-[color:var(--cream)]"
      />
    </div>
  );
}
