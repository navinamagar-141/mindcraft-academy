import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0e",
        canvas: "#121212",
        surface: "#1a1a1e",
        panel: "#222226",
        silver: "#909090",
        muted: "#707070",
        line: "#2e2e33",
        offwhite: "#f0f0f0",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 60px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
