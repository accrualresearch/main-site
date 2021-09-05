import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { Hero, AboutHero, PulseBotHero, ChainPulseHero, ConsultingHero, CareersHero, ContactHero } from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <Hero />
    <AboutHero />
    <PulseBotHero />
    <ChainPulseHero />
    <ConsultingHero />
    <CareersHero />
    <ContactHero />

  </Layout>
)

export default IndexPage
