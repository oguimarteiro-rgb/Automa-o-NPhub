import { MagneticButton } from "np-hub-site";

// Freeze framer entrance/spring animations to their rested state for capture.
(window as any).NPHub?.__setPreviewMode?.();

export function PrimaryCTA() {
  return (
    <div style={{ padding: 32, background: "var(--cream)" }}>
      <MagneticButton className="bg-graphite px-9 py-5 text-cream">
        <span className="text-[0.95rem] font-medium tracking-[0.16em]">
          COMEÇAR A CONVERSA
        </span>
      </MagneticButton>
    </div>
  );
}

export function WithArrow() {
  return (
    <div style={{ padding: 32, background: "var(--cream)" }}>
      <MagneticButton className="bg-graphite px-9 py-5 text-cream">
        <span className="flex items-center gap-3 text-[0.95rem] font-medium tracking-[0.16em]">
          VER O MÉTODO
          <span aria-hidden>→</span>
        </span>
      </MagneticButton>
    </div>
  );
}

export function Secondary() {
  return (
    <div style={{ padding: 32, background: "var(--cream)" }}>
      <MagneticButton className="bg-cream-dark px-8 py-4 text-graphite">
        <span className="text-[0.95rem] font-medium tracking-[0.16em]">
          SAIBA MAIS
        </span>
      </MagneticButton>
    </div>
  );
}

export function OnDark() {
  return (
    <div style={{ padding: 32, background: "var(--graphite)" }}>
      <MagneticButton className="bg-olive px-9 py-5 text-cream">
        <span className="text-[0.95rem] font-medium tracking-[0.16em]">
          FALE COM A GENTE
        </span>
      </MagneticButton>
    </div>
  );
}
