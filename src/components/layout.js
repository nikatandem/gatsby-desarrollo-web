import React from "react"
import "../styles.css"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
