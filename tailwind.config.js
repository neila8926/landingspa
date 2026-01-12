/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D7566', // Sage Green
        secondary: '#D4C4A8', // Warm Sand
        background: '#F9F8F6', // Off-white/Cream
        surface: '#FFFFFF', // White
        textDark: '#2C3333', // Deep Charcoal
        textLight: '#6B7280', // Muted Gray
        accent: '#EBE3D5', // Light Beige
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      textShadow: {
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)', // Softer shadow
        lg: '0 2px 10px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  // plugins: [require('tailwind-scrollbar-hide')],
}
