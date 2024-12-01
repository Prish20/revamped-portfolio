import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: {
          100: "#00FF00",
          DEFAULT: "#111827",
        },
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(16, 185, 129)",
        200: "2px 2px 0px 2px rgb(16, 185, 129)",
        300: "2px 2px 0px 2px rgb(16, 185, 129)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
};
export default config;
