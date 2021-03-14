module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Aktifo', 'ui-sans-serif', 'system-ui'],
        'serif': ['Aktifo', 'ui-serif', 'Georgia'],
      },
      fontSize: {
        nav: '18px'
      },
      letterSpacing: {
        nav: '-0.07em'
      },
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
