import * as React from "react"
import "./Hero.css"
import heroMp4 from "../img/Hero_video.mp4"
import heroWebm from "../img/Hero_video.webm"
import HeroTiles from "../components/HeroTiles"

const Hero = () => (
  <>
    <section className="heroVideoSection">
      <video className="heroVideo" autoPlay muted loop>
        <source src={heroMp4} type="video/mp4" />
        <source src={heroWebm} type="video/webm" />
      </video>
      <HeroTiles />
    </section>
  </>
)

export default Hero
