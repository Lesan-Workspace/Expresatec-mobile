/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-expresatec": "#ff0000",
        "orange-yanbal": "#DC582A",
        "gray-yanbal": "#D7DBDD",
        "gray-secondary": "#4B5563",
      },
    },
  },
  plugins: [],
}

