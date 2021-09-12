import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Raleway"],
  overrideStyles: () => ({
    img: {
      marginBottom: 0
    },
    ul: {
      marginBottom: 0
    },
    li: {
      marginBottom: 0
    }
  })
})

export default typography
