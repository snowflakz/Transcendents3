/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#C2D0E3',
          200: '#9BB3D2',
          300: '#7496C1',
          400: '#4D79AF',
          500: '#3D639E',
          600: '#304F7E',
          700: '#263C5F',
          800: '#1B2B5E', // Updated to match logo navy blue
          900: '#131B2C',
        },
        secondary: {
          50: '#F1F8EE',
          100: '#E3F1DD',
          200: '#C7E3BB',
          300: '#ABD599',
          400: '#8FC777',
          500: '#609D31', // Updated to match logo green
          600: '#4D7E27',
          700: '#3A5E1D',
          800: '#263F13',
          900: '#131F0A',
        },
        neutral: {
          50: '#F5F6F5',
          100: '#EBECED',
          200: '#D1D5D9',
          300: '#B7BDC5',
          400: '#9DA6B1',
          500: '#848F9D',
          600: '#6B7789',
          700: '#556072',
          800: '#404859',
          900: '#2B303F',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};