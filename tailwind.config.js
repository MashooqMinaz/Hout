/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'EB-Garamond': ['EB Garamond', 'serif'],
        'Josefin-Sans': ['Josefin Sans', 'sans-serif'],
        'Open-Sans': ['Open Sans', 'sans-serif']
      },
      colors:{
        'custom-gray-text': '#8B8B8B',
        'custom-black-text': '#1D1D1D',

      }
    },
  },
  plugins: [],
}
