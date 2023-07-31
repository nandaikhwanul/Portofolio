/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kuning': '#FFB84C'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito' : ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}
