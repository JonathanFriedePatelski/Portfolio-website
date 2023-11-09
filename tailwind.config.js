/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/views/*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Playpen Sans', 'Inter']
      },
      colors: {
        primary: '#14b8a6',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
  },
  plugins: [],
}

