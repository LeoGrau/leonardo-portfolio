/** @type {import('tailwindcss').Config} */

import getTailwindColors from "./../leonardo-grau-portfolio/src/plugins/plugin"

getTailwindColors()

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['selector', '[class="p-dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
