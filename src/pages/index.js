import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Finanzkompass Prototyp</h1>
    <p>Prototyp für Finanzkompass Görlitz. Entwickelt mit Gatsby und Hosted mit netlify.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
