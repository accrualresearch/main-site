import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../img/accrual_white.svg"
import "./Header.css"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-container">
      <Link to="/" style={{padding: "5px"}}>
        <img src={logo} width={150} alt={siteTitle} />
      </Link>
      <ul>
        <li>
          <AnchorLink to="#about">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="#products">
            Products
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="#consulting">
            Consulting
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="#careers">
            Careers
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
