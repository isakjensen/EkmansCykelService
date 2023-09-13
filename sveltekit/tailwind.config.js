/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins']
            },
            colors: {
                "theme-purple": "#362560"
            }
        },
    },
    plugins: [],
}