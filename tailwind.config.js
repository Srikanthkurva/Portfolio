/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          50: '#f4fbff',
          100: '#ddf1ff',
          200: '#b8e3ff',
          300: '#83ceff',
          400: '#4ab0ff',
          500: '#2c8fe6',
          600: '#1d70bf',
          700: '#1c5998',
          800: '#1d4b7a',
          900: '#1c4065',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(74, 176, 255, 0.25), 0 20px 52px rgba(9, 33, 56, 0.32)',
      },
    },
  },
  plugins: [],
}

