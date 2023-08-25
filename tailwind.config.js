/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#5EA304;',
        'primary-red': '#AD4C4C',
        'primary-grey': '#4E4D4D',
        'primary-light-grey': '#696969',
        'primary-very-light-grey': '#C9C9C9',
        'primary-mid-grey': '#A5A5A5'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'Roboto']
      },
    },
  },
  plugins: [],
}

