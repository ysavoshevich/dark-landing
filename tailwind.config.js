module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#4452FE",
        secondary: "#02E4C0",
        darkBlue: "#112D57",
        darkBlack: "#181818",
        mediumBlack: "#1E1E1E",
        lightBlack: "#343434",
      },
      container: {
        center: true,
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
