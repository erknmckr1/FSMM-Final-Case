/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors:{
        secondary:'#FFE818',
        title:'#DECDCE'
      },
      fontFamily:{
        dancing:["Dancing Script", "cursive"],
        open:["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

