/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
