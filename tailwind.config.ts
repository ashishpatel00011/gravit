import type { Config } from "tailwindcss";
import rtl from 'tailwindcss-rtl';
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1AB8B3",
      },
      transitionProperty: {
        'height': 'height',
      },
      fontFamily: {
        aktiv: ['var(--font-aktiv)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },plugins: [rtl()],

};


export default config;
