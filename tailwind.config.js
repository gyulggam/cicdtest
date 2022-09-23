/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.25rem',
        md: '2.5rem',
        lg: '10rem',
        xl: '12rem',
      }
    },
    extend: {
      colors: {
        'bg-yellow': '#fffce2',
        'bg-gray': '#f7f7fc',
        'bg-pink': '#ff3e48',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
