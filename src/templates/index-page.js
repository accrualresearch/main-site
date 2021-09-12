import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import JobRoll from '../components/JobRoll'

export const IndexPageTemplate = ({
  about,
  product1,
  product2,
  product3,
  product4,
  consulting,
  careers,
}) => (
  <div>
  </div>
)

IndexPageTemplate.propTypes = {
  about: PropTypes.object,
  product1: PropTypes.object,
  product2: PropTypes.object,
  product3: PropTypes.object,
  product4: PropTypes.object,
  consulting: PropTypes.object,
  careers: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        about={frontmatter.about}
        product1={frontmatter.product1}
        product2={frontmatter.product2}
        product3={frontmatter.product3}
        product4={frontmatter.product4}
        consulting={frontmatter.consulting}
        careers={frontmatter.careers}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        about {
          heading
          text
        }
        product1 {
          heading
          text
        }
        product2 {
          heading
          text
        }
        product3 {
          heading
          text
        }
        product4 {
          heading
          text
        }
        consulting {
          heading1
          text1
          heading2
          text2
          heading3
          text3
          heading4
          text4
        }
        careers {
          heading
          text
        }
      }
    }
  }
`
