import Typography from "typography"

const typography = new Typography({
  baseFontSize: "2.5rem",
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Raleway"],
  scaleRatio: 3,
  overrideStyles: () => ({
    "img,ul,li": {
      marginBottom: 0
    },
  })
})

export default typography
