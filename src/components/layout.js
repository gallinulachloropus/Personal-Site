import React from "react"

import Header from './header'
import './style.css'

const Layout = ({ children }) => {

  return (
    <div id="id">
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}


export default Layout
