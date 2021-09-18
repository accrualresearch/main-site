import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../img/accrual.svg"
import "./Footer.css"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram, faLinkedin, faFacebook, faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons"

const Footer = ({ siteTitle }) => {
  const { componentsJson: data } = useStaticQuery(graphql`
    query FooterQuery {
      componentsJson {
        twitter {
          active
          link
        }
        telegram {
          active
          link
        }
        linkedin {
          active
          link
        }
        facebook {
          active
          link
        }
        youtube {
          active
          link
        }
        twitch {
          active
          link
        }
      }
    }
  `)

  function showCookiePrefs() {
    if(!window.CookieThough) {
      return;
    }
    window.CookieThough.show()
  }
  return (
    <footer>
      <div className="footer-container">
        <div id="footer-links-container">
          <div className="footer-links-col" style={{
            flexBasis: "25%",
          }}>
            <Link to="/">
              <img src={logo} width={200} alt={siteTitle} />
            </Link>
          </div>
          <div className="footer-links-col">
            <AnchorLink className="footer-link-header" to="/#about">About Us →</AnchorLink>
            <AnchorLink className="footer-link-header" to="/#products">Product →</AnchorLink>
            <AnchorLink className="footer-link-header" to="/#consulting">Consulting →</AnchorLink>
          </div>
          <div className="footer-links-col">
            <AnchorLink className="footer-link-header" to="/#careers">Careers →</AnchorLink>
            <AnchorLink className="footer-link-header" to="/#contact">Contact →</AnchorLink>
          </div>
          <div className="footer-links-col">
            <a className="footer-link-header" style={{cursor: "pointer"}} onClick={showCookiePrefs}>Cookie Preferences →</a>
          </div>
          <div className="footer-links-col">
            {data.twitter.active ?
              <Link className="footer-link-header" to={data.twitter.link}>
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </Link>
            : null}
            {data.telegram.active ?
              <Link className="footer-link-header" to={data.telegram.link}>
                <FontAwesomeIcon icon={faTelegram} /> Telegram
              </Link>
            : null}
            {data.linkedin.active ?
              <Link className="footer-link-header" to={data.linkedin.link}>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Link>
            : null}
            {data.facebook.active ?
              <Link className="footer-link-header" to={data.facebook.link}>
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </Link>
            : null}
            {data.youtube.active ?
              <Link className="footer-link-header" to={data.youtube.link}>
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </Link>
            : null}
            {data.twitch.active ?
              <Link className="footer-link-header" to={data.twitch.link}>
                <FontAwesomeIcon icon={faTwitch} /> Twitch
              </Link>
            : null}
          </div>
        </div>
        <p>© 2021, Accrual Research</p>
      </div>
    </footer>
  )
}

export default Footer


