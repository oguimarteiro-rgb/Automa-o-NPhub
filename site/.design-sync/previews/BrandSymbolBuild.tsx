import { BrandSymbolBuild } from "np-hub-site";

// Freeze framer entrance animations to their final (fully built-in) state.
(window as any).NPHub?.__setPreviewMode?.();

export function BuiltMark() {
  return (
    <div style={{ padding: 32, background: "var(--cream)", display: "flex", justifyContent: "center" }}>
      <BrandSymbolBuild size={160} />
    </div>
  );
}

export function OnDark() {
  return (
    <div style={{ padding: 32, background: "var(--graphite)", display: "flex", justifyContent: "center" }}>
      <BrandSymbolBuild size={140} />
    </div>
  );
}
