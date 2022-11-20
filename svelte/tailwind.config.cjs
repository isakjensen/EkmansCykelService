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
    },
  },
  plugins: [],
}
