import Darkmode from './src/components/Navbar/DarkMode';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
          primary: "#D4A017",      // or principal du logo
          secondary: "#8B6914",    // or foncé / bronze

          neutral: {
            50:  '#fafaf7',
            100: '#f5f0e8',
            200: '#e8dcc8',
            300: '#d4c4a0',
            400: '#b8a070',
            500: '#8B7A50',
            600: '#6B5C35',
            700: '#4A3F24',
            800: '#2E2618',
            900: '#1A1508',
            950: '#0D0A04',
          },

          accent: {
            50:  "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#F5C842",   // or clair du logo
            500: "#D4A017",   // or principal
            600: "#B8860B",
            700: "#8B6914",   // bronze
            800: "#6B5010",
            900: "#4A370A",
          },
        },
      fontFamily: {
      serifAlt: ['"DM Serif Display"', 'serif'],
    },
      container:{
        center: true,
        padding:{
          default:"1rem",
          sm:" 3rem"
        }
      }
    },
  },
  plugins: [],
}