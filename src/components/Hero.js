import * as React from "react"
import "./Hero.css"
import heroMp4 from "../img/Hero_video.mp4"
import heroWebm from "../img/Hero_video.webm"

export const Container = ({ children, bg, text }) => (
  <div className="hero-container" style={{
    backgroundColor: bg,
    color: text
  }}>
    <div className="inner-container">{children}</div>
  </div>
)


const Grid = () => (
  <Container text="white">
    <div className="hero-column column-1 hero-item">
      <div className="row top">
        <h1>Next Level <br /> Blockchain Products</h1>
      </div>
      <div className="row middle">

      </div>
      <div className="row bottom">
        <div className="column left">
          <button>Learn More</button>
        </div>
        <div className="column middle">
          <button>Contact</button>
        </div>
        <div className="column right">
        </div>
      </div>
    </div>

    <div className="hero-column column-2">
      <div className="inner-1">
        <div className="hero-item">
          <div className="row top">

          </div>
          <div className="row middle">
            <h2>Consulting</h2>
          </div>
          <div className="row bottom">
            <button>→</button>
          </div>
        </div>
      </div>

      <div className="inner-2">
        <div className="hero-item">
          <div className="row top">

          </div>
          <div className="row middle">
            <h2>Data Driven Analysis</h2>
          </div>
          <div className="row bottom">
            <button>→</button>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

const Hero = () => (
  <>
    <section className="heroVideoSection">
      <video className="heroVideo" autoPlay muted loop>
        <source src={heroMp4} type="video/mp4" />
        <source src={heroWebm} type="video/webm" />
      </video>
      <Grid />
    </section>
  </>
)

export default Hero
