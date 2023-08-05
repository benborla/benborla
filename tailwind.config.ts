/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "neongreen": "#dfff00"
      },
      fontFamily: {
        sourceCodePro: ['var(--font-source-code-pro)', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;

