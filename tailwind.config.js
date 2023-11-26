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
        blueLight: 'rgb(153, 195, 190, 0.4)',
        blueMedium: 'rgb(153, 195, 190, 0.6)',
        violet: 'rgb(59, 56, 82)',
        lime: 'rgb(223, 230, 192)',
        purple: 'rgb(181, 151, 193, 0.4)',
      },
      borderRadius: {
        custom1: '40% 60% 60% 30% / 70% 50% 50% 30%',
        custom2: '40% 60% 70% 40% / 70% 60% 50% 40%',
        custom3: '60% 50% 60% 50% / 60% 50% 70% 60%',
        custom4: '30% 40% 40% 30% / 40% 40% 30% 30%',
        custom5: '20% 20% 20% 20%',
      },
      keyframes: {
        down: {
          '0%, 40%': {transform: 'translateY(0)'},
          '20%': {transform: 'translateY(1rem)'}
        },
        spark: {
          '0%': {width: '0.5em'},
          '35%': {width: '2.5em'},
        },
        revealin: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
        revealout: {
          '0%': {opacity: 1},
          '100%': {opacity: 0}
        },
      },
      animation: {
        'spark': 'spark 2s infinite',
        'revealin': 'revealin 0.8s ease-in-out forwards',
        'revealout': 'revealout 0.8s ease-in-out forwards'
      },
      translate: {
        center: "-50%"
      }
    },
  plugins: [],
  }
}
