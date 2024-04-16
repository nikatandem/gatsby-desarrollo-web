// Header.js

import React from "react"
import { Link } from "gatsby"
import "../styles.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
