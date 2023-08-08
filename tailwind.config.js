const { default: plugin } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "#1e1e1e",
        card: "#404040",
        textWhite: "#DBDBDB",
        gradientOrange: "#FFAF4D",
        gradientRed: "#FF328E"
      },
      fontFamily: {
        sans: ['Noto Sans', 'Arial']
      },
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  plugins: [
  ],
}

