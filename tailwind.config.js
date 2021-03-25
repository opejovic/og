module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Aktifo-B'],
        'serif': ['Aktifo-B'],
      },
      fontSize: {
        nav: '18px',
        landing: '80px'
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
        'dfc-light': "#EBE8DF",
        'dfc-purple': "#7000C9",
        'dfc-lavender': "#DEB4FF"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
