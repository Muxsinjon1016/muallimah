/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ["Manrope", "sans-serif"],
        secondFamily: ["Lobster", "cursive"],
      },
      borderRadius: {
        6: "6px",
        12: "12px",
        24: "24px",
        100: "100%",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          sm: "680px",
          md: "808px",
          lg: "1064px",
          xl: "1300px",
        },
      },
    },
  },
  plugins: [],
};
