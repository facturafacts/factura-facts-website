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
          dark: '#1a1a2e',
          beige: '#d4c4a8',
          gold: '#c9b037',
          'gold-hover': '#b89d2f',
          cream: '#faf9f6',
          'cream-dark': '#f5f3ef',
          text: '#1a1a1a',
          'text-light': '#4a4a4a',
          'text-muted': '#6b6b6b',
          hairline: '#e5e5e5',
        }
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        'card': '0 4px 6px -1px rgba(0,0,0,0.03), 0 2px 4px -1px rgba(0,0,0,0.02)',
        'elevated': '0 10px 15px -3px rgba(0,0,0,0.04), 0 4px 6px -2px rgba(0,0,0,0.02)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}