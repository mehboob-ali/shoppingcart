/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
 
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        'teal-light' :  '#DDF7F8',
        'teal-med' : '#9AB8BA',
        'teal-dark' : '#064a4d',
        'teal-text' : '#OB1516',
      },
      
    },
  },
  plugins: [],
}
