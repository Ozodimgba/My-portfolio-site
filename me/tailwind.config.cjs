/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        generalReg: ["GeneralSans-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
