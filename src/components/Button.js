import * as React from "react"
import "./Button.css"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Button = ({ children, variant, link, color }) => (
  <AnchorLink to={link}>
    <button className={`ar-button ${variant} ${color}`}>
      {children}
    </button>
  </AnchorLink>
)

export default Button
