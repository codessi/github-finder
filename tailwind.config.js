/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}", './public/index.html'],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: ['dark'],
  // },

  plugins: [require('daisyui')],
}
