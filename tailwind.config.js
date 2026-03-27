module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/**/*.html",
    "./**/*.ejs",        // 👈 ADD THIS (important)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}