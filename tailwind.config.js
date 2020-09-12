module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: { primary: "#f3c614", secondary: "#353535" },
      height: {
        80: "20rem",
        100: "25rem",
        120: "30rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "disabled", "focus", "active"],
  },
  plugins: [],
};
