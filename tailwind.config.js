/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "JetBrains Mono",
      },
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00FF99",
          hover: "#00e187",
        },
      },
    },
  },
  plugins: [],
};
