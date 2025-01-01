/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%,50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out backwards 1s",
      },
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
