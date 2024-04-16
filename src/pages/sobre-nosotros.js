import React from "react"
import Layout from "../components/layout"
import "../styles.css"
const SobreNosotros = () => {
  return (
    <Layout>
      <section style={sectionStyles}>
    <div style={ContainerStyles}>
      <h1 style={titleStyles}>Sobre Nosotros</h1>
      <p style={paragraphStyles}>Somos Innovation Co, una empresa dedicada a impulsar la innovación y el progreso en el mundo digital.</p>
      <p style={paragraphStyles}>Nuestra misión es ayudar a nuestros clientes a alcanzar sus objetivos digitales mediante soluciones creativas y eficaces.</p>
      <p style={paragraphStyles}>Con un equipo apasionado por la tecnología y el diseño, nos esforzamos por ofrecer resultados excepcionales y superar las expectativas en cada proyecto.</p>
      <p style={paragraphStyles}>Desde el diseño de sitios web hasta el desarrollo de aplicaciones y más allá, estamos aquí para convertir tus ideas en realidad y hacer que tu presencia en línea brille.</p>
      <p style={paragraphStyles}>¡Gracias por confiar en Innovation Co para tu próximo proyecto digital!</p>
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

export default SobreNosotros
