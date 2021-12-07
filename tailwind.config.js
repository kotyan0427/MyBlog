const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        cardGrid: "repeat(auto-fit,minmax(240px,1fr))",
        cardResGrid: "repeat(2,1fr)",
      },
      flexGrow: {
        flexGrow2: 2,
      },
      flex: {
        flex2: 2,
      },
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      cursor: ["hover"],
    },
  },
  plugins: [],
};
