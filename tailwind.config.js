/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#2A4566",
      lightBlue: "#87C0EA",
      white: "#FFFFFF",
      opaqueWhite: "rgba(255, 255, 255, 0.2)",
      pink: "#E37792",
      gray: "#F3F5F7",
      lightGray: "#D7D7D7",
    },
    fontFamily: {
      sans: ['"public/fonts/Linotte"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
