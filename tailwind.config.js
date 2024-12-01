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
      opaqueBlueBorder: "rgba(135, 192, 234, 0.33)",
    },
    fontFamily: {
      sans: ['"public/fonts/Linotte"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        cards: "0px 0px 6.67px 1.01px rgba(135, 192, 234, 0.33)",
      },
      keyframes: {
        progress: {
          from: { strokeDashoffset: "144" },
          to: { strokeDashoffset: "calc(144 - (144 * 75) / 100)" },
        },
        show: {
          from: { opacity: 0, transform: "translateY(-20px" },
          to: { opacity: 1, transform: "translateY(0" },
        },
      },
      transitionDuration: {
        450: "450ms",
      },
      animation: {
        progress: "progress 1s ease",
        show: "show 0.3s ease-int-out",
      },
    },
  },
  plugins: [],
};
