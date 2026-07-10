import { EditorialHeader } from "np-hub-site";

// EditorialHeader reveals on scroll (whileInView) — freeze to final state.
(window as any).NPHub?.__setPreviewMode?.();

export function Masthead() {
  return (
    <div style={{ padding: 32, background: "var(--cream)", minWidth: 520 }}>
      <EditorialHeader edition="NP HUB — MÉTODO" index="Nº 001" />
      <div className="section-divider" />
    </div>
  );
}

export function SectionCredit() {
  return (
    <div style={{ padding: 32, background: "var(--cream)", minWidth: 520 }}>
      <EditorialHeader edition="MANIFESTO" index="2026" />
      <div className="section-divider" />
    </div>
  );
}
