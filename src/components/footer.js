import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle, menuLinks }) => (
    <footer className="footer">
        <div className="footerdiv">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    </footer>
)

export default Footer