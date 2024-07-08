/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './assets/**/*.{css,scss,sass}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
  ],
  theme: {
    fontFamily: {
      logo: ['"Permanent Marker"'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundImage: {
        'green-stroke': 'url("/public/assets/images/green-stroke.png")',
        'dot': 'url("/public/assets/images/dot.svg")',
      },
      colors: {
        primary: '#43ddce',
        secondary: '#ff5256',
        'gray-border-primary': 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        'rubik': ['"Rubik Mono One"', 'sans-serif'],
      }
    },
  },
  plugins: [
  ],
}
