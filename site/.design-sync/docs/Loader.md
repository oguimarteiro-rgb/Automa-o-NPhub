---
category: Brand
---

Full-screen brand loading overlay. Fills the viewport with the cream background, plays the `BrandSymbolBuild` mark animation with a "NP HUB · DESDE 2026" caption, then fades itself out after ~1.9s. Mount it once at the top of a page for an intro splash.

## Example

```tsx
export default function Page() {
  return (
    <>
      <Loader />
      {/* page content */}
    </>
  );
}
```

## Notes

- Takes no props and self-dismisses — it manages its own visibility and locks body scroll while shown.
- Because it's full-screen and time-driven, it's meant for page entry, not as an inline element.
