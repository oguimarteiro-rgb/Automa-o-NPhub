import { BrandSymbol } from "np-hub-site";

// Freeze framer entrance animations to their final state for static capture.
(window as any).NPHub?.__setPreviewMode?.();

export function Mark() {
  return (
    <div style={{ padding: 32, background: "var(--cream)", display: "flex", justifyContent: "center" }}>
      <BrandSymbol size={200} />
    </div>
  );
}

export function StaticLogo() {
  return (
    <div style={{ padding: 32, background: "var(--cream)", display: "flex", justifyContent: "center" }}>
      <BrandSymbol size={120} animateRotation={false} pulseDot={false} />
    </div>
  );
}

export function OnDark() {
  return (
    <div style={{ padding: 32, background: "var(--graphite)", display: "flex", justifyContent: "center" }}>
      <BrandSymbol size={120} animateRotation={false} pulseDot={false} />
    </div>
  );
}

export function Small() {
  return (
    <div style={{ padding: 24, background: "var(--cream)", display: "flex", alignItems: "center", gap: 16 }}>
      <BrandSymbol size={48} animateRotation={false} pulseDot={false} />
      <span className="font-serif text-graphite" style={{ fontSize: "1.5rem" }}>NP Hub</span>
    </div>
  );
}
