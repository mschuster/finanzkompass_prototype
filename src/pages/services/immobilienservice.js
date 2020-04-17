import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Immobileienservice = () => (
    <Layout>
        <SEO title="Immobileienservice" />
        <nav>
      <ul>
        <li>
          <Link to="/services/versicherung">Versicherung</Link>
        </li>
        <li>
          <Link to="/services/immobilienservice">Immobilienservice</Link>
        </li>
        <li>
          <Link to="/services/investmentfonds">Investmentfonds</Link>
        </li>
        <li>
          <Link to="/services/baufinanzierung">Baufinanzierung</Link>
        </li>
        <li>
          <Link to="/services/finanzberatung">Finanzberatung</Link>
        </li>
      </ul>
    </nav>

    Immobilien
    <br/><br/>

Sie suchen ein passendes Objekt, ein Einfamilienhaus eine Eigentumswohnung, eine Doppelhaushälfte bzw. Reihenhaus, um sich Ihren Traum von den eigenen vier Wänden zu erfüllen?
<br/><br/>
Oder planen Sie, ein Haus ganz nach Ihren Wünschen zu errichten und suchen dazu einen geeigneten Planer sowie ein passendes Baugrundstück?
<br/><br/>
Nehmen Sie nicht das Erstbeste, nehmen Sie sich Zeit für eine so wichtige Entscheidung in Ihrem Leben. Nutzen Sie unseren Service.
<br/><br/>
    </Layout>
    
)

export default Immobileienservice