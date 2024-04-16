import React from "react"
import logo from "../images/logo.jpg"
import Layout from "../components/layout"
import "../styles.css"

const IndexPage = () => {
  return (
    <Layout>
      <div className="container"> 
        <h1 className="title">Innovation Co.</h1>
        <img
          src={logo}
          alt="Logo de Mi Sitio Web"
          className="logo" 
        />
      </div>
    </Layout>
  )
}

export default IndexPage

