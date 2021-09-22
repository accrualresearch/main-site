import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./HeroTiles.css"
import logoWhite from "../img/accrual_white.svg"

const NavLinks = () => (
  <ul>
    <li>
      <AnchorLink to="/#about">
        About
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#products">
        Products
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#consulting">
        Consulting
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#careers">
        Careers
      </AnchorLink>
    </li>
    <li>
      <AnchorLink to="/#contact">
        Contact
      </AnchorLink>
    </li>
  </ul>
)

const HeroTiles = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log(open)
    setOpen(!open);
  }
  return (
    <div className="hero-container">
      <div className="header-row">
        <div className="header-inner">
          <div className="nav-inner">
            <div className="nav-column logo">
              <Link to="/">
                <img src={logoWhite} alt="Accrual Research" />
              </Link>
            </div>
            <div className="nav-column menu">
              <div className="nav-links">
                <NavLinks />
              </div>
              <div className="burger-icon" onClick={handleOpen}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
        </div>
        <div className={`mob-nav-overlay open-${open}`}>
          <div className="mob-nav-row top">

          </div>
          < div className="mob-nav-row bottom">
            <div className="mob-nav-column">
              <div className="mob-nav-item">
                <NavLinks handleOpen={handleOpen}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-row">
        <div className="body-inner">
          <div className="tiles-inner">
            <div className="tile-column single">
              <div className="single-inner">
                <div className="single-item">
                  <div className="single-row top">
                    <div className="top-column">
                      <h1 className="remove-margin-bottom">Next Level <br /> Blockchain Products</h1>
                    </div>
                  </div>
                  <div className="single-row middle">
                    <div className="middle-column chainpulse">
                      <div className="single-row-icon"></div>
                    </div>
                    <div className="middle-column pulsebot">
                      <div className="single-row-icon"></div>
                    </div>
                  </div>
                  <div className="single-row bottom">
                    <div className="bottom-column one">
                      <AnchorLink to="/#products">
                        <button className="tile-button outline">
                          Learn More
                        </button>
                      </AnchorLink>
                    </div>
                    <div className="bottom-column two">
                      <AnchorLink to="/#contact">
                        <button className="tile-button solid">
                          Contact
                        </button>
                      </AnchorLink>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="tile-column duo">
              <div className="duo-inner">
                <div className="duo-item consulting">
                  <div className="duo-row top">
                    <div className="duo-row-icon"></div>
                  </div>
                  <div className="duo-row bottom">
                    <AnchorLink to="/#careers">
                      <h2 className="remove-margin-bottom">Consulting →</h2>
                    </AnchorLink>
                  </div>
                </div>
                <div className="duo-item join">
                  <div className="duo-row top">
                    <div className="duo-row-icon"></div>
                  </div>
                  <div className="duo-row bottom">
                    <AnchorLink to="/#careers">
                        <h2 className="remove-margin-bottom">Join Accrual →</h2>
                    </AnchorLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-row">

      </div>
    </div>
  )
}

export default HeroTiles;
