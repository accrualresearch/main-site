import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Raleway"],
  overrideStyles: () => ({
    "img,ul,li": {
      marginBottom: 0
    },
    "h1": {
      fontWeight: 900,
      fontSize: "60px"
    },
    "h2": {
      fontWeight: 900,
      fontSize: "40px"
    }
  })
})

export default typography
