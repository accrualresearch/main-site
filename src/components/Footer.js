import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../img/accrual.svg"
import "./Footer.css"

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
          <Link className="footer-link-header" to="/about">About Us</Link>
        </div>
        <div className="footer-links-col">
          <Link className="footer-link-header" to="/products">Product</Link>


          <Link to="/products/chainpulse">ChainPulse →</Link>
          <Link to="/products/pulsebot">PulseBot →</Link>
        </div>
        <div className="footer-links-col">
          <Link className="footer-link-header" to="/consulting">Consulting</Link>

        </div>
        <div className="footer-links-col">
          <Link className="footer-link-header" to="/careers">Careers</Link>

          <Link to="/careers/it-security">IT Security →</Link>
          <Link to="/careers/software-developer">Software Developer →</Link>
        </div>
        <div className="footer-links-col">
          <Link className="footer-link-header">Links</Link>

          <Link to="https://www.twitter.com/">Twitter →</Link>
          <Link to="https://www.linkedin.com/">LinkedIn →</Link>
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
