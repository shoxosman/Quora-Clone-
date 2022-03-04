module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        red: "#b92b27",
        lightred:"#b92b271a",
        black: "#14171A",
        midgray:"#e6e7e8",
        xlightgray: "#f7f7f8",
        lightgray: "#939598",
        xxlightgray: "#F1f2f3",
        white: "#FFFFFF",
        lightyellow:"#f9f9ef"
      },
      screens: {
        short: { raw: "(max-height: 630px)" },
        average: { raw: "(max-height: 700px)" },
      },
     
    },
  },
  plugins: [],
}
