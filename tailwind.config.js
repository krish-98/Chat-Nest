/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "",
        background: "#FDD2BF",
        text: "#DF5E5E",
        layer: "#E98580",
      },
      flex: {
        2: "2 1 0%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
