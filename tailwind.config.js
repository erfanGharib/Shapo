/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/components/**/*.{html,js,jsx}',
    './src/components/**/**/*.{html,js,jsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      maxWidth: {
        1366: '1366px'
      },
      colors: {
        gold: 'rgb(220, 177, 74)',
        black: 'rgb(2, 2, 2)',
        gray: {
          50: 'rgb(244, 245, 247)',
        },
        cyan: {
          200: 'rgb(152, 216, 202)'
        },
        orange: {
          800: 'rgb(241, 71, 5)'
        }
      }
    }
  },
}