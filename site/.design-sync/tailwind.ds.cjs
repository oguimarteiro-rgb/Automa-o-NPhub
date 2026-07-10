// Derived Tailwind config for the design-system CSS build. Mirrors the app's
// theme (tokens/fonts/easing) but adds the preview dir to the content scan and
// safelists the core brand utilities so the shipped _ds_bundle.css carries the
// full documented brand vocabulary — not just whatever classes the app happened
// to use. Consumed by .design-sync/build-css.mjs via `tailwindcss -c`.
const COLORS = {
  cream: { DEFAULT: "var(--cream)", dark: "var(--cream-dark)" },
  graphite: { DEFAULT: "var(--graphite)", soft: "var(--graphite-soft)" },
  olive: { DEFAULT: "var(--olive)", soft: "var(--olive-soft)" },
  navy: "var(--navy)",
  brown: "var(--brown)",
};

// Safelist the documented brand utilities across bg/text/border for every token.
const tokenNames = ["cream", "cream-dark", "graphite", "graphite-soft", "olive", "olive-soft", "navy", "brown"];
const prefixes = ["bg", "text", "border"];
const colorSafelist = tokenNames.flatMap((t) => prefixes.map((p) => `${p}-${t}`));

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./.design-sync/previews/**/*.{ts,tsx}",
  ],
  safelist: [...colorSafelist, "font-serif", "font-sans", "ease-premium"],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
