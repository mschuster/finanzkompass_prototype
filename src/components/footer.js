import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle, menuLinks }) => (
    <footer class="footer">
        <div class="footerdiv">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    </footer>
)

export default Footer