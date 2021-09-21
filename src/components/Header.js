import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logoWhite from "../img/accrual_white.svg"
import logo from "../img/accrual.svg"
import "./Header.css"
import { AnchorLink } from "gatsby-plugin-anchor-links";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavLinks = ({ handleOpen, bg }) => (
  <ul className={`bg-${bg}`}>
    <li to="#about">
      <AnchorLink to="/#about" onAnchorLinkClick={handleOpen}>
        About
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#products" onAnchorLinkClick={handleOpen}>
        Products
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#consulting" onAnchorLinkClick={handleOpen}>
        Consulting
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#careers" onAnchorLinkClick={handleOpen}>
        Careers
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#contact" onAnchorLinkClick={handleOpen}>
        Contact
      </AnchorLink>
    </li>
  </ul>
)

const Header = ({ siteTitle, headerPosition, bg }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <div className="main-container" style={{
      position: headerPosition
    }}>
      <header className="header container">
        <nav className="inner">
          <div className="site-logo">
            <Link to="/">
              <img className="header-logo" src={bg === "white" ? logo : logoWhite} alt={siteTitle} />
            </Link>
          </div>
          <div className="nav-links">
            <NavLinks bg={bg}/>
          </div>
          <div className="burger-icon" onClick={handleOpen}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>


      <div className={`mobile-nav-overlay open-${open}`}>
        <div className={`mobile-nav-column open-${open}`}>

        </div>
        <div className={`mobile-nav-column open-${open}`}>
          <NavLinks handleOpen={handleOpen}/>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
