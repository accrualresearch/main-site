import * as React from "react"
import "./Hero.css"
import JobRoll from './JobRoll'
import ContactForm from "./ContactForm"

const Container = ({ children, bg, text }) => (
  <div className="hero-container" style={{
    backgroundColor: bg,
    color: text
  }}>
    <div className="inner-container">{children}</div>
  </div>
)


export const Hero = () => (
  <Container text="white">
    <div className="hero-column column-1 hero-item">
      <h1>Next Level Blockchain Products</h1>
    </div>

    <div className="hero-column column-2">
      <div style={{height: "50%", paddingBottom: "5px"}}>
        <div className="hero-item" style={{height: "100%", alignItems: "flex-end"}}>
          <h2>Consulting</h2>
        </div>
      </div>

      <div style={{height: "50%", paddingTop: "5px"}}>
        <div className="hero-item" style={{height: "100%", alignItems: "flex-end"}}>
          <h2>Data Driven Analysis</h2>
        </div>
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
    <ContactForm />
  </Container>
)

