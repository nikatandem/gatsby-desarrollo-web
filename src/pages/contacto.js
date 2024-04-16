import React from "react"
import Layout from "../components/layout"
import "../styles.css"
const Contacto = () => {
  return (
    <Layout>
      <section style={sectionStyles}>
    <div style={ContainerStyles}>
      <h1 style={titleStyles}>Contacta con Innovation Co</h1>
      <p style={paragraphStyles}>¡Estamos encantados de escucharte!</p>
      <p style={paragraphStyles}>Para cualquier pregunta, comentario o solicitud de servicio, no dudes en ponerte en contacto con nosotros a través de los siguientes medios:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <strong>Teléfono:</strong> +123 456 789
        </li>
        <li>
          <strong>Correo electrónico:</strong> info@innovationco.com
        </li>
        <li>
          <strong>Dirección:</strong> Calle Principal, Madrid, España
        </li>
      </ul>
      <p>¡Esperamos saber de ti pronto!</p>
    </div>
    </section>
    </Layout>
  )
}
const sectionStyles = {
  textAlign: "center",
  padding: "50px",
}

const titleStyles = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "30px",
}

const subtitleStyles = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: "20px",
}

const paragraphStyles = {
  fontSize: "1.2rem",
  lineHeight: "1.6",
}

const ContainerStyles = {
  marginBottom: "40px",
}


export default Contacto