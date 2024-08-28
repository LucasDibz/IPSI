/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Arial'],
    },
    extend: {
      colors: {
        ipsi: '#F9EBD1',
        background: 'var(--color-background)',
        heading: 'var(--color-heading)',
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-out': 'slide-out 0.25s ease-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100vw)', display: 'none' },
          '100%': { transform: 'translateX(0)', display: 'block' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)', display: 'block' },
          '100%': { transform: 'translateX(100vw)', display: 'none' },
        },
      },
    },
  },
  plugins: [],
};
