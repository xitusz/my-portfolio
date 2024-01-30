/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "color-#ffba05": "#ffba05",
      "color-#ffdc84": "#ffdc84",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
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
      backgroundImage: {
        background2: "url(./assets/images/background2.jpg)",
      },
      boxShadow: {
        black: "0 4px 8px 0 black",
      },
      width: {
        "30%": "30%",
        "35%": "35%",
        "460px": "460px",
      },
      minWidth: {
        "460px": "460px",
      },
      maxWidth: {
        "460px": "460px",
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
