/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "color-#ccc": "#ccc",
      "color-#282A2C": "#282A2C",
      "color-#212529": "#212529",
      "color-#e38f4e": "#e38f4e",
      "color-#ffba05": "#ffba05",
      "color-#ffdc84": "#ffdc84",
      "color-#5c4200": "#5c4200",
      "color-#c45911": "#c45911",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "1.1rem": "1.1rem",
      "1.2rem": "1.2rem",
      "6.25rem": "6.25rem",
      "8rem": "8rem",
    },
    extend: {
      boxShadow: {
        black: "0 4px 8px 0 black",
      },
      width: {
        "30%": "30%",
        "35%": "35%",
      },
      minWidth: {
        "30%": "30%",
      },
      lineHeight: {
        "0.3rem": "0.3rem",
        "0.5rem": "0.5rem",
        "1.6rem": "1.6rem",
      },
    },
  },
  plugins: [],
};
