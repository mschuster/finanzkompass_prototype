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
                        <Link to="/services" state={{ service: 0 }}>Versicherung</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services" state={{ service: 1 }}>Immobilien</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services" state={{ service: 2 }}>Investmentfonts</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services" state={{ service: 3 }}>Baufinanzierung</Link>
                    </li>
                    <li>
                        <img src="../Pfeil.png" />
                        <Link to="/services" state={{ service: 4 }}>Finanzberatung</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home