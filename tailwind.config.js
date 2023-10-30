/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#dceae0',
        lime: 'rgb(223, 230, 192)',
        purple: 'rgb(206, 190, 190, 0.4)'
      },
    },
  },
  plugins: [],
}
