/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        2: "2 1 0%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
