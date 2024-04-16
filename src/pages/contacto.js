import React from "react"
import Layout from "../components/layout"
import "../styles.css"
const Contacto = () => {
  return (
    <Layout>
    <div style={{ textAlign: "center" }}>
      <h1>Contacta con Innovation Co</h1>
      <p>¡Estamos encantados de escucharte!</p>
      <p>Para cualquier pregunta, comentario o solicitud de servicio, no dudes en ponerte en contacto con nosotros a través de los siguientes medios:</p>
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
    </Layout>
  )
}

export default Contacto