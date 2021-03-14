module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'dfc': '1069px',
        // => @media (min-width: 1069px) { ... }
      },
      colors: {
        'dfc-dark': "#141618",
        'dfc-light': "#D4D4D4"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
