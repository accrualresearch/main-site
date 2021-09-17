import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import "./Layout.css"

const Layout = ({ children, headerPosition, bg }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} headerPosition={headerPosition} bg={bg}/>
      <div>
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
