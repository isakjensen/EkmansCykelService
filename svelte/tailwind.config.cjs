/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.svelte',
    './src/lib/*.svelte',
    './src/lib/*/*.svelte'
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto Condensed"],
    },
    extend: {
      colors: {
        "theme-purple": "#362560"
      }
    },
  },
  plugins: [],
}
