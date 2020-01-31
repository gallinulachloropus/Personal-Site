import React from 'react'
import { Link } from 'gatsby'

import "./style.css"

const Menu = () => {
    return (
        <nav>
            <Link to="/work/">
                Portfolio <span role="img" aria-label="Portfolio">📂 </span>
            </Link>

            <a href="https://drive.google.com/open?id=1UVQ6OBchuqFUMXov3-oLMnZen7drfq5I">Resume <span role="img" aria-label="Resume">📄 </span> </a>

            <a href="mailto:n.parker31@outlook.com">Contact <span role="img" aria-label="E-Mail">📧 </span></a>
        </nav>
    )
}

export default Menu
