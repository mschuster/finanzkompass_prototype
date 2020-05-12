import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <div className="headerdiv">
        <Link to="/">
            <img src="../Schriftzug_neu.png" alt="FinanzKompass" className="headerimg"/>
            <img src="../Logo_neu.png" alt="FinanzKompass" className="headerlogo"/>
        </Link>
        <div>
            <nav>
                <ul className="navilist">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
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
