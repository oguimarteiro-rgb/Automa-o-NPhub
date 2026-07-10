---
category: Brand
---

The NP Hub mark — a graphite circle with a cream paisley cutout and a pulsing olive dot. A self-contained SVG (colors are baked in), so it needs no CSS. Use it as the logo mark, a quiet brand accent, or a loading indicator.

## Example

```tsx
// Living mark: slow rotation + pulsing dot (defaults)
<BrandSymbol size={160} />

// Static mark for a header or footer
<BrandSymbol size={72} animateRotation={false} pulseDot={false} />
```

## Notes

- `size` sets both width and height in px.
- Turn off `animateRotation` / `pulseDot` for a still logo.
- Palette is fixed to the brand: graphite `#1f1f1f`, cream `#f5f1e8`, olive `#6b7a3f`.
