---
category: Brand
---

Build-in variant of the NP Hub mark: the circle, the paisley cutout, and the olive dot animate in sequence on mount, then rest. Used inside the initial page `Loader`, but also works standalone as an entrance animation for the logo.

## Example

```tsx
<BrandSymbolBuild size={140} />
```

## Notes

- Plays once on mount (no looping) — pair it with a splash/intro moment.
- `size` sets both width and height in px.
- For a continuously living mark instead, use `BrandSymbol`.
