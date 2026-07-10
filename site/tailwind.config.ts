import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "var(--cream)",
          dark: "var(--cream-dark)",
        },
        graphite: {
          DEFAULT: "var(--graphite)",
          soft: "var(--graphite-soft)",
        },
        olive: {
          DEFAULT: "var(--olive)",
          soft: "var(--olive-soft)",
        },
        navy: "var(--navy)",
        brown: "var(--brown)",
      },
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

export default config;
