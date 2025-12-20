/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3BB77E',
        primaryDark: '#2A9D6F',
        primaryLight: '#5FD99F',
        primaryButton: '#DEF9EC',
        secondary: '#FDC040',
        secondaryDark: '#F5A623',
        secondaryLight: '#FFD670',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sourceCode: ['Source Code Pro', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(10%)' }
        }
      },
      animation: {
        marquee: 'marquee 2s ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
};
