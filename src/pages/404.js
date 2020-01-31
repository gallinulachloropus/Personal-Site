import React from "react"

import { Link } from 'gatsby'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <section className="notfound">
    <SEO title="404: Not found" />
    <h1>Not Found.</h1>
    <p>This page doesn't exist or has been relocated...</p>
    <small>I am sorry.</small>
  </section>
)

export default NotFoundPage
