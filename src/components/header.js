import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header class="header">
    <div class="headerdiv">
        <Link to="/">
            <img src="../Schriftzug_neu.png" alt="FinanzKompass" class="headerimg"></img>
        </Link>
        <div>
            <nav>
                <ul class="navilist">
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
