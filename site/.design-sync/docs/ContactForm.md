---
category: Forms
---

The NP Hub contact form: four editorial underline fields (nome, empresa, email, mensagem) laid out in a two-column grid, with inline zod validation and a graphite `MagneticButton` submit. On success it swaps to a serif-italic confirmation message.

## Example

```tsx
<section className="mx-auto max-w-3xl px-6 py-24">
  <ContactForm />
</section>
```

## Notes

- Self-contained — takes no props; validation and the (mock) submit are built in. Replace the mock submit with a real endpoint (e.g. Resend) when wiring it up.
- Fields use the `.editorial-credit` labels and an underline input style; the submit reuses `MagneticButton`.
- Give it a constrained max-width container; it's designed for a centered contact section.
