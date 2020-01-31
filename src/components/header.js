import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Ticker from './ticker'
import './style.css'


const Header = () => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


    return (
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>
                <Ticker
                    items={['Front End Developer', 'JavaScript Developer', 'React Developer', 'Web Designer', 'Graphic Designer']}
                    duration={3500}
                />
            </h2>
        </header>
    )
}

export default Header
