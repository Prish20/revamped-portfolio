import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
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
      primary: "var(--font-popins)",
    },
    extend: {
      colors: {
        primary: {
          100: "#F1554C",
          DEFAULT: "#DAECFA",
        },
        accent: {
          DEFAULT: "#F1554C",
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
  plugins: [tailwindcssAnimate],
};
export default config;
