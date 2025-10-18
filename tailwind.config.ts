import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nus: {
          orange: "#EF7C00",
          "orange-dark": "#d66d00",
          blue: "#003D7C",
          "dark-blue": "#002855",
          "light-blue": "#0066CC",
          gray: "#6C757D",
          "light-gray": "#F8F9FA",
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'Arial', 'sans-serif'],
        lato: ['var(--font-lato)', 'Lato', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
