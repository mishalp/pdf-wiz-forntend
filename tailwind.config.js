/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'agbalumo': ['Agbalumo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'primary': '#ffffff',
        'secondary': '#59656f',
        'tertiary': '#d7cdcc'
      },
    },
  },
  
  plugins: [],
}

