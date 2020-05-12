import React from "react"
import { Link } from "gatsby"

import "../components/layout.css"

const Home = () => {
    return(
        <div className="home">
            <div className="homeleft">
                <img src="../Home_BG.jpg" />
            </div>
            <div className="homelogo">
                <img src="../Schriftzug_neu.png" />
            </div>
            <div className="homeright">
                <ul className="homelist">
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services">Versicherung</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services">Immobilien</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services">Investmentfonts</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services">Baufinanzierung</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services">Finanzberatung</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home