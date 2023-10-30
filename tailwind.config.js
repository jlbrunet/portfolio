/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'rgb(220, 234, 224, 0.6)',
        lime: 'rgb(223, 230, 192, 0.6)',
        purple: 'rgb(206, 190, 190, 0.6)',
        blue: 'rgb(204, 219, 220, 0.6)'
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
