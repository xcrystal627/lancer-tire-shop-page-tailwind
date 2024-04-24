/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*.html",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        extend: {},
        screens: {
            'sp': '450px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require("tw-elements/dist/plugin.cjs"),
        require('@tailwindcss/line-clamp'),
    ],
    darkMode: "class"
}