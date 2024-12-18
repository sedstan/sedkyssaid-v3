/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{svelte, html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#296EB4',     // Deep Blue
        secondary: '#FDB833',   // Bright Yelllow-Orange
        accent: '#E94F37',      // Vibrant Red-Orange
        highlight: '#B0fe76',  // Light Green
        neutral: {
          dark: '#333333',      // Dark Grey
          light: '#FFFFFF'      //White
        }
      },
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'], // Headings
        opensans: ['"Open Sans"', 'sans-serif'],      // For body text
        montserrat: ['"Montserrat"', 'sans-serif'],    // For subheaders
        playfair: ['"Playfair Display"', 'serif']     // for quotes/testimonials

      },
    },
  },
  plugins: [],
}
