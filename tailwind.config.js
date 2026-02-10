/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          dark: '#1a1a2e',      // Dark navy header
          beige: '#d4c4a8',     // Beige background
          gold: '#c9b037',      // Gold/yellow accent
          'gold-hover': '#b89d2f',
          cream: '#f5f0e6',     // Light cream background
          text: '#2d2d2d',      // Dark text
          'text-light': '#666666',
        }
      }
    },
  },
  plugins: [],
}