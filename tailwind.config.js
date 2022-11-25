/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./about.html",
    "./index.html",
    "./contact.html",
    "./services.html",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#845EC2",
      secondary: "#FF8066",
      textColor: "#4B4453",
    },
  },
  plugins: [],
};
