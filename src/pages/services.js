import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const SecondPage = () => (
  <Layout>
    <SEO title="Services" />
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
    <p>unsere Leistungen.</p>
  </Layout>
)

export default SecondPage
