/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["../*.html"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/images/download.svg')",
        "hero-pattern": "url('src/images/downloadlight.svg')",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
