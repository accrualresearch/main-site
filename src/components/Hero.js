import * as React from "react"
import "./Hero.css"

const Hero = () => (
  <div className="hero-container">
    <div className="inner-container">
      <div
        className="hero-column hero-item"
        style={{
          flexBasis: "75%",
        }}
      >
        <h2>Next Level Blockchain Products</h2>
      </div>

      <div className="hero-column">
        <div className="hero-item">
          <h2>Consulting</h2>
        </div>

        <div className="hero-item">
          <h2>Data Driven Analysis</h2>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
