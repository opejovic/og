module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Aktifo-B', 'ui-sans-serif', 'system-ui'],
        'serif': ['Aktifo-B', 'ui-serif', 'Georgia'],
      },
      fontSize: {
        nav: '18px',
        landing: '80px',
      },
      letterSpacing: {
        nav: '-0.05em'
      },
      screens: {
        'dfc': '1069px',
        // => @media (min-width: 1069px) { ... }
      },
      colors: {
        'dfc-dark': "#141618",
        'dfc-light': "#EBE8DF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
