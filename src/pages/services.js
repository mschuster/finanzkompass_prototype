import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceComponent from "../components/serviceComponent"

const content = [["0", "../versicherung.jpg", "Versicherung", "Wir beraten Sie gern. Als freier Versicherungsmakler arbeiten wir mit einer großen Anzahl von Versicherern zusammen und nutzen mehrere Vergleichsprogramme, um für Sie jeweils individuellen und passenden Versicherungsschutz aus der riesigen Auswahl am Markt zu finden.", "Neben dem Preis unterscheiden sich die Angebote der einzelnen Versicherer in einem wesentlichem Punkt - in den Bedingungen. Der Preis ist noch relativ einfach zu vergleichen, vorausgesetzt, daß tatsächlich zwei in allen Punkten identische Angebote vorliegen. Bei den Bedingungen scheiden sich die Geister. Versicherer, die sich durch Qualität hervorheben möchten, haben die allgemein gültigen Bedingungen in den letzten Jahren erheblich verbessert. Schadensursachen, die noch vor einigen Jahren als nicht versicherbar galten oder nur durch erhebliche Beitragszuschläge gezeichnet wurden, sind in zeitgemäßen Deckungskonzepten pauschal mitversichert. Welcher Nutzen ergibt sich daraus konkret? Während ein Versicherer mit hervorragenden Bedingungen einen Schaden als versichertes Risiko anerkennt, kann ein Versicherer mit herkömmlichen Bedingungen den Schaden rechtlich korrekt ablehnen. Kurios dabei erscheint, daß Top-Versicherungsschutz nicht teurer sein muß als Standard-Angebote. Ganz anders der grundsätzliche Trend in der Kfz-Versicherung. Durch die ständig steigenden Schadensaufwendungen einerseits, aber dem Bedarf nach preiswertem Versicherungsschutz andererseits, haben 1995 die Gesellschaften begonnen, diverse Bedingungen mit möglichen Rabatten zu verknüpfen. Die Folge: eine Kfz-Versicherung ohne Einschränkungen kann ein Vermögen kosten - muß es aber nicht. Besonders Vielfahrer und Neueinsteiger können erheblich sparen. Durch die Rentenreform ist die private Berufsunfähigkeitsvorsorge für alle, die nach dem 01.01.1961 geboren wurden, existenziell notwendig geworden. Denn es gibt für sie bei Berufsunfähigkeit kein Geld mehr aus der gesetzlichen Kasse. Schon wird über den notwendigen Umbau des Gesundheitssystems diskutiert. Auch das gesetzliche Umlagesystem zur Altervorsorge steht zur Disposition. Der Trend aller Expertenmeinungen: Mehr Eigenverantwortung und Eigenvorsorge. Wir beraten Sie gern. Als freier Versicherungsmakler arbeiten wir mit einer großen Anzahl von Versicherern zusammen und nutzen mehrere Vergleichsprogramme, um für Sie jeweils individuellen und passenden Versicherungsschutz aus der riesigen Auswahl am Markt zu finden."],
    ["1", "../immobilien.jpg", "Immobilien", "Sie suchen ein passendes Objekt, ein Einfamilienhaus eine Eigentumswohnung, eine Doppelhaushälfte bzw. Reihenhaus, um sich Ihren Traum von den eigenen vier Wänden zu erfüllen?", "Sie suchen ein passendes Objekt, ein Einfamilienhaus eine Eigentumswohnung, eine Doppelhaushälfte bzw. Reihenhaus, um sich Ihren Traum von den eigenen vier Wänden zu erfüllen? Oder planen Sie, ein Haus ganz nach Ihren Wünschen zu errichten und suchen dazu einen geeigneten Planer sowie ein passendes Baugrundstück? Nehmen Sie nicht das Erstbeste, nehmen Sie sich Zeit für eine so wichtige Entscheidung in Ihrem Leben. Nutzen Sie unseren Service."],
    ["2", "../investmentfonts.jpg", "Investmentfonts", "Wenn auch Sie ein Teil Ihres für langfristige Anlagen zur Verfügung stehenden Potentials in die weltweiten Kapitalärkte investieren und dabei die Hilfe von Börsen-Profis nutzen wollen, dann sind Investmentfonds eine sinnvolle Anlage.", "Wir vermitteln aus der stetig wachsenden Angebotspalette bereits seit über 10 Jahren Investmentfonds verschiedener Kapitalanlagegesellschaften. Unterschiedliche Anlageschwerpunkte und Risikoklassen der derzeit über 4000 von uns vermittelbaren Fonds bieten für jeden Kunden geeignete Anlagevarianten. Wenn auch Sie ein Teil Ihres für langfristige Anlagen zur Verfügung stehenden Potentials in die weltweiten Kapitalärkte investieren und dabei die Hilfe von Börsen-Profis nutzen wollen, dann sind Investmentfonds eine sinnvolle Anlage. Nutzen Sie jetzt die niedrigen Einstiegskurse für Folgeanlagen. Profitieren Sie von unseren Rabattmöglichkeiten bei den Ausgabeaufschlägen. Darüberhinaus bietet Ihnen die Technologie durch die Zusammenfassung der Investmentanlagen in einem Depot neben dem besseren Überblick auch einen schnelleren Anlagewechsel zwischen den Fonds."],
    ["3", "../baufinanzierung.jpg", "Baufinanzierung", "Sie wollen ein Haus bauen ? Eine Immobilie kaufen ? Oder haben Sie sich schon Ihren Wunsch erfüllt, wohnen in den eigenen vier Wänden und machen sich gerade Gedanken, wie Sie die vorhandene Finanzierung Ihren jetzigen Ansprüchen anpassen können?", "Sie wollen ein Haus bauen ? Eine Immobilie kaufen ? Oder haben Sie sich schon Ihren Wunsch erfüllt, wohnen in den eigenen vier Wänden und machen sich gerade Gedanken, wie Sie die vorhandene Finanzierung Ihren jetzigen Ansprüchen anpassen können ? Oder glauben Sie, daß Sie sich den Traum vom eigenen Haus nie verwirklichen könnten ? Warum? Sie zahlen doch auch jeden Monat Miete! Nutzen Sie das aktuell niedrige Zinsniveau, um günstig Fremdkapital für Ihre Wünsche arbeiten zu lassen. Schneller schuldenfrei, niedrigere Zinsen, geringerer Gesamtaufwand bzw. niedrigere Raten, ganz gleich was Sie vorhaben, wählen Sie uns als Ihren FINANZKOMPASS , um die Finanzierung zu finden, die zu Ihren Wünschen paßt. Nutzen Sie die Vorteile eines unabhängigen Ratgebers! PS: Auch wenn die Zinsfestschreibung noch in die nächsten Jahre reicht, lohnt es sich schon heute, sich über den weiteren Finanzierungsweg Gedanken zu machen. Bis zu 5 Jahre im Voraus können Sie sich die Zinsen für die Weiterfinanzierung sichern. Gerade bei den derzeit historisch niedrigem Zinsniveau kann eine rechtzeitige Verlängerung sinnvoll sein."],
    ["4", "../finanzberatung.jpg", "Finanzberatung", "Ganz gleich was Sie erreichen wollen, wir stehen Ihnen mit unserer Erfahrung gern zur Seite. Durch die unabhängige Auswahl günstiger Finanz-und Versicherungslösungen schaffen wir den finanziellen Spielraum, den Sie brauchen, um Ihre Ziele zu erreichen.", "Wie wird unsere Zukunft aussehen? Wie wollen Sie leben? Woher kommt das nötige Geld? Wieviel braucht man im Alter? Sollte man heute noch ein Haus bauen? Welche Versicherungen brauche ich wir wirklich? Gibt mir jemand was dazu, wenn ich spare? Wie funktioniert das? Ganz gleich was Sie erreichen wollen, wir stehen Ihnen mit unserer Erfahrung gern zur Seite. Durch die unabhängige Auswahl günstiger Finanz-und Versicherungslösungen schaffen wir den finanziellen Spielraum, den Sie brauchen, um Ihre Ziele zu erreichen. Lassen Sie uns gemeinsam darüber reden. Vieles läßt sich schneller verwirklichen als gedacht. Ganzheitliche Betreuung in allen Finanz-und Versicherungsfragen kostet bei uns keinen EURO zusätzlich. Versprochen. Denn Sie zahlen bestimmt schon genug. Für allerlei. An diverse Stellen. Die Vergütung erhalten wir von den jeweiligen Produktpartnern, für die Produkte, die Sie nach einer Beratung evt. vermittelt haben möchten."]];

const Services = ({ location }) => (
    <Layout>
        <SEO title="Services" />
        <ServiceComponent data={[content, location.state.service]} />
    </Layout>
);

export default Services