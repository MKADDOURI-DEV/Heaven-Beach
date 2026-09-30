/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#6e7d96',
          500: '#485569',
          600: '#334155',
          700: '#1e293b',
          800: '#16223a',
          900: '#0d1729',
          950: '#070d1a',
        },
        ocean: {
          50: '#eff9ff',
          100: '#def2ff',
          200: '#b6e7ff',
          300: '#75d5ff',
          400: '#2cc0ff',
          500: '#02a3e8',
          600: '#0082c4',
          700: '#0067a0',
          800: '#055785',
          900: '#0a496e',
        },
        sand: {
          50: '#fbf8f3',
          100: '#f5ede0',
          200: '#e9d7b8',
          300: '#ddbf90',
          400: '#d2a968',
          500: '#c8924a',
          600: '#b07a3a',
          700: '#8f5f30',
          800: '#744d2c',
          900: '#5f3f26',
        },
        gold: {
          50: '#fbf7ed',
          100: '#f6edcf',
          200: '#ecd99c',
          300: '#e2c46b',
          400: '#d4ad3f',
          500: '#bf9430',
          600: '#a37828',
          700: '#835b24',
          800: '#6d4a22',
          900: '#5b3e20',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.9s ease-out forwards',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
