/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      smd: "700px",
      md: "768px",
      lg: "976px",
      vlg: "1200px",
      xl: "1440px",
    },
    colors: {
      blue: "#2A4566",
      lightBlue: "#87C0EA",
      white: "#FFFFFF",
      opaqueWhite: "rgba(255, 255, 255, 0.2)",
      pink: "#E37792",
      podcastGray: "rgba(42, 69, 102, 0.22)",
      gray: "#F3F5F7",
      lightGray: "#D7D7D7",
      opaqueBlueBorder: "rgba(135, 192, 234, 0.33)",
      opaqueLightBlue: "rgba(146, 202, 255, 0.46)",
    },
    fontFamily: {
      sans: ['"public/fonts/Linotte"', "sans-serif"],
    },
    extend: {
      stroke: {
        circleBlue: "#92CAFF",
        lightCircleBlue: "#3D5E80",
      },
      boxShadow: {
        cards: "0px 0px 6.67px 1.01px rgba(135, 192, 234, 0.33)",
      },
      keyframes: {
        progressCircle1: {
          "0%": { strokeDashoffset: "292.273" },
          "100%": { strokeDashoffset: "262.5457" },
        },
        progressCircle2: {
          "0%": { strokeDashoffset: "292.273" },
          "100%": { strokeDashoffset: "102.2956" },
        },
        progressCircle3: {
          "0%": { strokeDashoffset: "292.273" },
          "100%": { strokeDashoffset: "116.9092" },
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
        progressCircle1: "progressCircle1 2s forwards",
        progressCircle2: "progressCircle2 2s forwards",
        progressCircle3: "progressCircle3 2s forwards",
        progress: "progress 1s ease",
        show: "show 0.3s ease-int-out",
      },
    },
  },
  plugins: [],
};
