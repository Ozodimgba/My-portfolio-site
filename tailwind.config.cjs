/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '17': '17deg',
      },
     fontFamily: {
        generalReg: ["GeneralSans-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
