/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E6353A',    // Base Red
          secondary: '#C9050B',  // Dark Red
          accent: '#E5F2DF',     // Zanah Light Green
          dark: '#313131',       // Mine Shaft
          text: '#0D0D0D',       // Cod Gray
          light: '#F2F2F2',      // Concrete
          surface: '#FFFFFF',
          border: '#D9D9D9',     // Alto
        }
      },
      fontFamily: {
        display: ['"Clash Grotesk Variable"', 'sans-serif'],
        body: ['"Satoshi Variable"', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['75px', { lineHeight: '1' }],
        'display-md': ['45px', { lineHeight: '1.1' }],
        'h1': ['45px', { lineHeight: '1.2' }],
        'h2': ['28px', { lineHeight: '1.2' }],
        'h3': ['22px', { lineHeight: '1.2' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        'brand-sm': '3px',
        'brand-md': '4px',
        'brand-lg': '12px',
        'brand-xl': '20px',
      },
      boxShadow: {
        'brand': '0 0 2px 2px rgba(219, 219, 219, 0.3)', // From effects radius:2, spread:2
      }
    },
  },
  plugins: [],
}