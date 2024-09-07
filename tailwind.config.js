/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e63946',  // Coral Red
        secondary: '#f1faee', // Off-White
        accent: '#a8dadc',    // Light Grayish Blue
        background: '#1d3557', // Deep Navy Blue
      },
    },
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [daisyui],
}

