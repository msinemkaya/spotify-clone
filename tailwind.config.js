/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": "'Roboto', sans-serif",
      },
      colors: {
        'base': '#121212',
        'highlight': '#1a1a1a',
        'elevated-highlight': '#2a2a2a',
        'elevated-base': '#242424',
        'panel': '#282828',
        'panel-heading': '#b3b3b3'
      },
      width: {
        '90': '22.5rem'
      }
    },
  },
  plugins: [],
}

