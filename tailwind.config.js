/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCC21",
        primary2: "#FF963C",
        primary3: "#EA6C00",
        secondary: "#8FE9D0",
        grey: "#414141",
        grey2: "#777777",
        grey3: "#2E2E2E",
      },
    },
    boxShadow: {
      md: "0px 3px 6px rgba(0, 0, 0, 0.160784)",
    },
    container: {
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1024px",
        xl: "1140px",
      },
      padding: "1rem",
      center: true,
    },
  },
  plugins: [],
};
