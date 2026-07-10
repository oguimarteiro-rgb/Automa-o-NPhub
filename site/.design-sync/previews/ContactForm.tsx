import { ContactForm } from "np-hub-site";

// Freeze framer entrance animations to their final state for capture.
(window as any).NPHub?.__setPreviewMode?.();

export function Form() {
  return (
    <div style={{ padding: 40, background: "var(--cream)", minWidth: 760 }}>
      <ContactForm />
    </div>
  );
}
