/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*html"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#5267DF",
        "custom-red": "#FA5959",
        "custom-blue": "#242A45",
        "custom-grey": "#9194A2",
        "custom-white": "#f7f7f7"
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-sarif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1120px",
        xl: "1120px",
        "2xl": "1120px"
      }
    }
  },
  plugins: []
}
