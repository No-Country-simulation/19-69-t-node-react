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
        "secondary-color": '#9E0303',
        "main-orange": '#e0570dfd',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        appear: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease forwards",
        slidein400: "slidein 1s ease 400ms forwards",
        slidein800: "slidein 1s ease 800ms forwards",
        appear900: "appear 1s ease 900ms forwards",
      },
    },
  },
  plugins: [],
};