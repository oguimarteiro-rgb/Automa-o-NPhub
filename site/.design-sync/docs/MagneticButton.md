---
category: Actions
---

The NP Hub primary button. It leans toward the pointer (a subtle "magnetic" pull) and, via the `.magnetic-btn` base class, fills from the bottom with olive on hover. Compose the label (and any icon) as children.

## Example

```tsx
// Solid graphite CTA (the site's main action)
<MagneticButton className="bg-graphite px-9 py-5 text-cream">
  <span className="text-[0.95rem] font-medium tracking-[0.16em]">COMEÇAR A CONVERSA</span>
</MagneticButton>

// Lighter, less pull
<MagneticButton strength={0.2} className="bg-cream-dark px-7 py-4 text-graphite">
  Saiba mais
</MagneticButton>
```

## Notes

- Style the button with utility classes on `className` (background, padding, text color). The `.magnetic-btn` base (hover fill, layout) is applied automatically.
- `strength` (0–1, default `0.35`) controls how far it leans toward the cursor.
- Accepts native button props (`type`, `disabled`, `onClick`, …).
