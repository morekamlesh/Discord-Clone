/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        notoscan: ["gg sans", "Noto Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        abcscan: [ "ABC Ginto Nord", "Noto Sans", "Helvetica Neue", "Helvetica"]
      },
      colors: {
        skyblue:"#404eed",
        greyback:"#23272a",
        lightgray:"#f6f6f6",
      },
    },
  },
  plugins: [],
};
