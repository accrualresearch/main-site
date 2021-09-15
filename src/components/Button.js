import * as React from "react"
import "./Button.css"

const Button = ({ children, variant }) => (
  <button className={`ar-button ${variant}`}>{children}</button>
)

export default Button
