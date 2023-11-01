/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: 'rgb(248, 233, 216, 0.8)',
        blue: 'rgb(153, 195, 190)',
        violet: 'rgb(59, 56, 82)',
        lime: 'rgb(223, 230, 192)',
        purple: 'rgb(181, 151, 193)',
      },
      borderRadius: {
        custom1: '40% 60% 60% 30% / 70% 50% 50% 30%',
        custom2: '40% 60% 70% 40% / 70% 60% 50% 40%',
        custom3: '60% 50% 60% 50% / 60% 50% 70% 60%',
      },
      keyframes: {
        down: {
          '0%, 40%': {transform: 'translateY(0)'},
          '20%': {transform: 'translateY(1rem)'}
        }
      },
      animation: {
        down: 'down 2s infinite'
      },
    },
  plugins: [],
  }
}
