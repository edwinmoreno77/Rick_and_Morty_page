/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'cursive': ['"Brush Script MT"', '"Comic Sans MS"', '"Pacifico"', '"Dancing Script"', 'cursive'],
            },
        },
    },
    plugins: [],
}
