import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-page) / <alpha-value>)",
        canvas: "rgb(var(--color-frame) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        feature: "rgb(var(--color-feature) / <alpha-value>)",
        "frame-line": "rgb(var(--color-frame-line) / <alpha-value>)",
        silver: "rgb(var(--color-secondary) / <alpha-value>)",
        muted: "rgb(var(--color-secondary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "logo-silver": "rgb(var(--color-logo-silver) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        offwhite: "rgb(var(--color-secondary) / <alpha-value>)",
        white: "rgb(var(--color-white) / <alpha-value>)",
        black: "rgb(var(--color-black) / <alpha-value>)",
        neutral: {
          200: "rgb(var(--color-secondary) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 60px rgb(var(--color-black) / 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
