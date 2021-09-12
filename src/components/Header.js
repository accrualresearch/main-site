import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../img/accrual_white.svg"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header-container">
      <Link to="/" style={{padding: "5px"}}>
        <img src={logo} width={150} alt={siteTitle} />
      </Link>
      <ul>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link to="/consulting">
            Consulting
          </Link>
        </li>
        <li>
          <Link to="/careers">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
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
