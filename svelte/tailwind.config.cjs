/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.svelte',
    './src/lib/*.svelte',
    './src/lib/*/*.svelte'
  ],
  theme: {
    fontFamily: {
        sans: ["Poppins"],
    },
    extend: {
      colors: {
        "theme-purple": "#362560"
      }
    },
  },
  plugins: [],
}
