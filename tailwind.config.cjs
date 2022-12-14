/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        background1: "url('./src/assets/background1.png')",
      },
      colors: {
        projeto: {
          blue: '#599DD9',
          black: '#0E0E0E',
          gray: '#676767',
          gray50: '#181818',
          textDark: '#101011',
        },
      },
      height: {
        900: '900px',
        768: '768px',
        1000: '1000px',
      }
    },
  },
  plugins: [],
}
