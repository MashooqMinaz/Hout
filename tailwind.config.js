/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'EB-Garamond': ['EB Garamond', 'serif'],
        'Josefin-Sans': ['Josefin Sans', 'sans-serif'],
        'Open-Sans': ['Open Sans', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors:{
        'custom-secondary-color': '#FFB23F',
        'custom-gray-text': '#8B8B8B',
        'custom-black-text': '#1D1D1D',
        'custom-green-text': '#0E7763',
        'custom-green': '#16A085',
        'custom-light-gray': '#D9D9D9',
        'primary-color': '#FFF',
        'secondary-color': '#9DB97B',
        'pic-background-color': 'rgb(247,248,250)',
        'h4-text-color': '#CAC8CE',
        'h1-text-color': '#79848a'
      }
    },
  },
  plugins: [],
}
