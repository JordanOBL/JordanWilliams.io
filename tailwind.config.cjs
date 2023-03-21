const { isWhiteSpaceLike } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                cursorBlink: {
                    '0%': {
                        opacity: 0,
                    },
                },
                colorFade: {
                    '0%': {
                        opacity: 0,
                    },
                    
                },
            },
        },
    },
    plugins: [],
};
