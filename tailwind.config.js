/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(153, 195, 190)',
        lime: 'rgb(223, 230, 192)',
        purple: 'rgb(181, 151, 193)',
        beige: 'rgb(248, 233, 216, 0.9)',
        grey: 'rgb(59, 56, 82)',
      },
      fontFamily: {
        karla: ['Karla', 'sans'],
      },
      zIndex: {
        'minus1': '-1',
      },
    },
  plugins: [],
  }
}
