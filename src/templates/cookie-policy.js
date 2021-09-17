import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import "./cookie-policy.css"

export const CookiePolicyPageTemplate = ({
  intro,
  why,
  essential,
  functional,
  analytics
}) => (
  <>
    <div className="container">
      <div className="inner">
        <div>
          <h1>{intro.heading}</h1>
        </div>
        <div>
          <p>{intro.text}</p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="inner">
        <div>
          <h1>{why.heading}</h1>
        </div>
        <div>
          <p>{why.text}</p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="inner">
        <div>
          <ol>
            <li>Essential: {essential.text}</li>
            <li>Functional: {functional.text}</li>
            <li>Analytics: {analytics.text}</li>
          </ol>
        </div>
      </div>
    </div>
  </>
)

CookiePolicyPageTemplate.propTypes = {
  into: PropTypes.object,
  why: PropTypes.object,
  essential: PropTypes.object,
  functional: PropTypes.object,
  analytics: PropTypes.object,
}

const CookiePolicyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout headerPosition="sticky" bg="white">
      <SEO title="Cookie Policy"/>
      <CookiePolicyPageTemplate
        intro={frontmatter.intro}
        why={frontmatter.why}
        essential={frontmatter.essential}
        functional={frontmatter.functional}
        analytics={frontmatter.analytics}
      />
    </Layout>
  )
}

CookiePolicyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CookiePolicyPage

export const pageQuery = graphql`
  query CookiePolicyPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "cookie-policy" } }) {
      frontmatter {
        intro {
          heading
          text
        }
        why {
          heading
          text
        }
        essential {
          text
        }
        functional {
          text
        }
        analytics {
          text
        }
      }
    }
  }
`
