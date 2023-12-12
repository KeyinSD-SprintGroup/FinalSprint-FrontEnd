/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "avion-blue": "#3762B6",
        "avion-yellow": "#DFDB72",
        "avion-green": "#8FC687",
        "avion-red": "#E58484",
      },
      fontFamily: {
        Koulen: ["Koulen", "cursive"],
        Gupter: ["Gupter", "serif"],
        "Loved by the King": ['"Loved by the King"', "cursive"],
        "Material Icons": ['"Material Icons"', "normal"],
      },
    },
  },
  plugins: [],
};
