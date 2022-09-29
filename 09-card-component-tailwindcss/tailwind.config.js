/** @type {import('tailwindcss').Config} */
module.exports = {
  // Using content property to providethe path for the html files
  content: ["./*html"],
  // Using extend property to set custom color & font
  theme: {
    extend: {
      colors: {
        "custom-blue": "#00BAFF",
        "custom-purple": "#6336FA"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    }
  },
  plugins: []
}
