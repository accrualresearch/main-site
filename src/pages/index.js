import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <div style={{
      backgroundColor: "black",
      width: "100%",
      height: "200px",
      color: "white",
      display: "flex"
    }}>
      <h2>About Us</h2>
    </div>

    <div style={{
      backgroundColor: "white",
      width: "100%",
      height: "200px",
      color: "black",
      display: "flex"
    }}>
      <h2>PulseBot</h2>
    </div>

    <div style={{
      backgroundColor: "black",
      width: "100%",
      height: "200px",
      color: "white",
      display: "flex"
    }}>
      <h2>ChainPulse</h2>
    </div>

    <div style={{
      backgroundColor: "white",
      width: "100%",
      height: "200px",
      color: "black",
      display: "flex"
    }}>
      <h2>Excellent Consulting</h2>
    </div>

    <div style={{
      backgroundColor: "black",
      width: "100%",
      height: "200px",
      color: "white",
      display: "flex"
    }}>
      <h2>Careers</h2>
    </div>

    <div style={{
      backgroundColor: "white",
      width: "100%",
      height: "200px",
      color: "black",
      display: "flex"
    }}>
      <h2>Contact</h2>
    </div>

  </Layout>
)

export default IndexPage
