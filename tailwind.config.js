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
      animation: {
        'drop': 'drop .3s ease-in-out',
        'fade': 'fade .2s'
      },
      keyframes: {
        drop: {
          '0%': { transform: 'translate(-5rem, 8rem)', opacity: 0},
          '100%': { transform: 'translateY(9rem, 8rem)', opacity: 1},
        },
        fade: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      }
    },
  },
  
  plugins: [],
}

