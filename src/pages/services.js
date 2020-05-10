import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
    <Layout>
        <SEO title="Services" />
        <div class="servicediv">
            <div class="servicetop">
                <img src="../immobilien.jpg" alt="Immobilien"></img>
                <div>
                    <h1>Immobilien</h1>
                    <p>Sie suchen ein passendes Objekt, ein Einfamilienhaus eine Eigentumswohnung, eine Doppelhaushälfte bzw. Reihenhaus, um sich Ihren Traum von den eigenen vier Wänden zu erfüllen?</p>
                    <div class="dotdiv">
                        <span id="dot1" class="dot"></span>
                        <span id="dot2" class="dot"></span>
                        <span id="dot3" class="dot"></span>
                        <span id="dot4" class="dot"></span>
                        <span id="dot5" class="dot"></span>
                    </div>
                </div>
            </div>
            <div class="servicebottom">
                <h1>Unser Service</h1>
                <p>Sie suchen ein passendes Objekt, ein Einfamilienhaus eine Eigentumswohnung, eine Doppelhaushälfte bzw. Reihenhaus, um sich Ihren Traum von den eigenen vier Wänden zu erfüllen?<br></br><br></br>
                    Oder planen Sie, ein Haus ganz nach Ihren Wünschen zu errichten und suchen dazu einen geeigneten Planer sowie ein passendes Baugrundstück?<br></br><br></br>
                    Nehmen Sie nicht das Erstbeste, nehmen Sie sich Zeit für eine so wichtige Entscheidung in Ihrem Leben. Nutzen Sie unseren Service.</p>
            </div>
        </div>
    </Layout>
);

export default Services