import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Prototyp für Finanzkompass Görlitz.</p>

    Wir sind persönlich für Sie da:
    <br/><br/>
    <h3>telefonisch unter: 03581/ 41 22 00</h3>

    falls diese Rufnummer einmal nicht erreichbar sein sollte,<br/>
    wählen Sie bitte: 03581/ 40 26 37<br/><br/>
    auf unserem Anruf"beantworter" können Sie eine Rückruf-Bitte hinterlassen.*

    <h3>in unseren Geschäftsräumen in Görlitz, Elisabethstraße 18</h3>

    Sprechtag ohne Voranmeldung:<br/>
    Dienstag           10:00 - 19:00 Uhr<br/><br/>  


    ...und jederzeit nach vorheriger Vereinbarung.<br/><br/> 

    Hausbesuche auf Wunsch.

    <br/><br/> 

    <p> * eine Rückruf-Bitte verstehen wir als Einwilligung zur telefonischen 
    Ansprache (dass wir Sie anrufen dürfen). Falls Sie nicht angerufen werden möchten, 
    hinterlassen Sie bitte keine Nachricht. weitere Informationen siehe unter Datenschutz
    </p>

  </Layout>
)

export default IndexPage
