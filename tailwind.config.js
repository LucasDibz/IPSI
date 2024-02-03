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
      },
    },
  },
  plugins: [],
};
