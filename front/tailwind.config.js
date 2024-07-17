/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
      },
      screens: {
        'xs': '400px',
      },
      colors: {
        custom: {
          100: '#190701',
        },
      },
    },
  },
  plugins: [],
};