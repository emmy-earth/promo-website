/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,js}",
    "./_layouts/**/*.{html,js}",
    "./**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        emmy: {
          green: '#34D399',
          'light-green': '#A7F3D0',
          dark: '#111827',
          'light-gray': '#F9FAFB',
          gray: '#F3F4F6',
          text: '#374151',
          'text-light': '#6B7280',
          orange: '#F2CBAE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
