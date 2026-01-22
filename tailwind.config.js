/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1e3a8a',
          900: '#0b1e3b', // Deep GGE Blue
          950: '#051126', // Darker Background
        },
        accent: {
          orange: '#f59e0b', // Machinery Orange
          red: '#E63946',    // EMPHZ Brand Red
          blue: '#3b82f6',   // Light Blue highlight
          teal: '#00C2CB',   // Brand Teal
        },
        slate: {
          850: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
      backgroundImage: {
        'blue-radial': 'radial-gradient(circle at center, #1e3a8a 0%, #0b1e3b 100%)',
        'mesh': "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        'hex-pattern': "url('https://www.transparenttextures.com/patterns/hexellence.png')",
      }
    }
  },
  plugins: [],
}