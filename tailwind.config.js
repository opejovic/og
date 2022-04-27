module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        aktifo: ["Aktifo-B", "sans-serif"],
        "aktifo-semibold": ["Aktifo-Semibold", "sans-serif"],
        "aktifo-book": ["Aktifo-Book", "sans-serif", "serif"],
        mono: ["Roboto Mono", "mono"]
      },
      fontSize: {
        nav: "18px",
        landing: "80px"
      },
      letterSpacing: {
        nav: "-0.05em"
      },
      screens: {
        dfc: "1069px",
        og: "1200px"
        // => @media (min-width: 1069px) { ... }
      },
      colors: {
        "dfc-dark": "#141618",
        "dfc-light": "#EBE8DF",
        "dfc-purple": "#7000C9",
        "dfc-lavender": "#DEB4FF",
        "og-lightgray": "#F6F9FC",
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
