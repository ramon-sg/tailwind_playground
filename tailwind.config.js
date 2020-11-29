const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
