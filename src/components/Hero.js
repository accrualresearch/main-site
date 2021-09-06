import * as React from "react"
import "./Hero.css"
import JobRoll from './JobRoll'

const Container = ({ children, bg, text }) => (
  <div className="hero-container" style={{
    backgroundColor: bg,
    color: text
  }}>
    <div className="inner-container">{children}</div>
  </div>
)

export const Hero = () => (
  <Container bg="#001657" text="white">
    <div
      className="hero-column hero-item"
      style={{
        flexBasis: "75%",
      }}
    >
      <h2>Next Level Blockchain Products</h2>
    </div>

    <div
      className="hero-column"
      style={{
        flexBasis: "25%",
      }}
    >
      <div className="hero-item">
        <h2>Consulting</h2>
      </div>

      <div className="hero-item">
        <h2>Data Driven Analysis</h2>
      </div>
    </div>
  </Container>
)

export const AboutHero = () => (
  <Container bg="black" text="white">
    <h2>About Us</h2>
  </Container>
)

export const PulseBotHero = () => (
  <Container bg="white" text="black">
    <h2>PulseBot</h2>
  </Container>
)

export const ChainPulseHero = () => (
  <Container bg="black" text="white">
    <h2>ChainPulse</h2>
  </Container>
)

export const ConsultingHero = () => (
  <Container bg="white" text="black">
    <h2>Excellent Consulting</h2>
  </Container>
)

export const CareersHero = () => (
  <Container bg="black" text="white">
    <div style={{
      flexDirection: "column"
    }}>
      <h1>
        Join Accrual Research
      </h1>
      <p>
        Looking to join the disruption?
        Are you looking to apply your unique skillset to projects operating on the frontier of the blockchain industry?
        If so, come join the disruption. Look below to see available positions.
        If none of the opening below is a good fit, we still want to hear what makes you stand out - send an email to askus@accrualresearch.com with the subject “Career”.
      </p>
      <JobRoll />
    </div>
  </Container>
)

export const ContactHero = () => (
  <Container bg="white" text="black">
    <h2>Contact</h2>
  </Container>
)

