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
        "main-color": '#190701',
        "secondary-color": '#451a03',
        "main-orange": '#e0570dfd',
      },
    },
  },
  plugins: [],
};