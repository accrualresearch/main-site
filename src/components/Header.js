import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../img/accrual_white.svg"

const Header = ({ siteTitle }) => {
  const styles = {
    navLink: {
      textDecoration: "none",
      color: "white",
      fontFamily: "Raleway, Arial",
      padding: 5
    }
  }
  return (
    <header style={{
      backgroundColor: "#001657",
      display: "flex",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        display: "flex",
        width: "70vw",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <img src={logo} width={200} alt={siteTitle}/>
          </Link>
        </h1>
        <span>
          <Link to="/about" style={styles.navLink}>About</Link>
          <Link to="/products" style={styles.navLink}>Products</Link>
          <Link to="/consulting" style={styles.navLink}>Consulting</Link>
          <Link to="/careers" style={styles.navLink}>Careers</Link>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </span>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
