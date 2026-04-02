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
          primary: '#09402C',    // Extracted from VariableID:1:56
          secondary: '#037353',  // Shorter variable shade
          accent: '#A6A182',     // Muted gold/khaki
          dark: '#0D0D0D',       // VariableID:1:29
          light: '#EDEFED',      // Background shade
          surface: '#FFFFFF',    // VariableID:1:4
        },
        alfa: {
          green: {
            50: '#E5F2DF',
            500: '#038C65',
            700: '#075942',
            900: '#09402C',
          }
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