import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../img/accrual.svg"
import "./Footer.css"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer-container">
      <div id="footer-links-container">
        <div className="footer-links-col" style={{
          flexBasis: "25%"
        }}>
          <Link to="/">
            <img src={logo} width={200} alt={siteTitle} />
          </Link>
        </div>
        <div className="footer-links-col">
          <AnchorLink className="footer-link-header" to="/#about">About Us →</AnchorLink>
        </div>
        <div className="footer-links-col">
          <AnchorLink className="footer-link-header" to="/#products">Product →</AnchorLink>
        </div>
        <div className="footer-links-col">
          <AnchorLink className="footer-link-header" to="/#consulting">Consulting →</AnchorLink>
        </div>
        <div className="footer-links-col">
          <AnchorLink className="footer-link-header" to="/#careers">Careers →</AnchorLink>
        </div>
        <div className="footer-links-col">
          <AnchorLink className="footer-link-header" to="/#contact">Contact →</AnchorLink>
        </div>
      </div>
      <p>© 2021, Accrual Research</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
