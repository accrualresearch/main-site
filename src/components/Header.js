import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../img/accrual_white.svg"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={logo} width={200} alt={siteTitle} />
        </Link>
      </h1>
      <span>
        <Link to="/about" className="navLink">
          About
        </Link>
        <Link to="/products" className="navLink">
          Products
        </Link>
        <Link to="/consulting" className="navLink">
          Consulting
        </Link>
        <Link to="/careers" className="navLink">
          Careers
        </Link>
        <Link to="/contact" className="navLink">
          Contact
        </Link>
      </span>
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
