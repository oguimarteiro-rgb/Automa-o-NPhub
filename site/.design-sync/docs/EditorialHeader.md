---
category: Typography
---

A two-column editorial credit row: an edition label on the left, an index on the right, both in the tracked uppercase `.editorial-credit` style. Sits above a section as a magazine-style masthead. Reveals on scroll into view.

## Example

```tsx
<EditorialHeader edition="NP HUB — MÉTODO" index="Nº 001" />
```

## Notes

- Both `edition` and `index` are required strings; keep them short (they render as small, tracked caps).
- Pair with a `.section-divider` beneath it for the full editorial masthead.
