const { isWhiteSpaceLike } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '320px',
            md: '375px',
            lg: '425px',
            tablet: '768px',
            xl: '1024px',
            xxl: '1440px'
            
        },
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
