import * as React from "react"
import Layout from "../components/layout"
import "../styles.css"

const Servicios = () => {
  return (
    <Layout>
    <section style={sectionStyles}>
      <h1 style={titleStyles}>Nuestros Servicios</h1>
      <p style={paragraphStyles}>En Innovation Co, nos apasiona transformar ideas en experiencias digitales cautivadoras. Ofrecemos una gama completa de servicios de desarrollo web, diseñados para llevar tus proyectos al siguiente nivel y hacer brillar tu presencia en línea.</p>
      
      <div style={ContainerStyles}>
        <h3 style={subtitleStyles}>Desarrollo Web Moderno</h3>
        <p style={paragraphStyles}>Sumérgete en el mundo del desarrollo web moderno con nosotros. Utilizamos las últimas tecnologías y las mejores prácticas para crear sitios web y aplicaciones web que no solo impresionan visualmente, sino que también funcionan a la perfección en todos los dispositivos.</p>
      </div>

      <div style={ContainerStyles}>
        <h3 style={subtitleStyles}>Experiencia en React.js</h3>
        <p style={paragraphStyles}>¿Buscas una experiencia interactiva y dinámica para tus usuarios? ¡Estás en el lugar correcto! Nuestro equipo está especializado en el desarrollo con React.js, la biblioteca de JavaScript líder para la creación de interfaces de usuario eficientes y receptivas.</p>
      </div>

      <div style={ContainerStyles}>
        <h3 style={subtitleStyles}>Expertos en JavaScript y HTML</h3>
        <p style={paragraphStyles}>JavaScript y HTML son el corazón de la web moderna, y nuestros expertos lo saben. Desde la lógica del cliente hasta la estructura del sitio, nos aseguramos de que cada línea de código esté optimizada para ofrecer un rendimiento excepcional y una experiencia de usuario inigualable.</p>
      </div>

      <div style={ContainerStyles}>
        <h3 style={subtitleStyles}>Desarrollo Web a Medida</h3>
        <p style={paragraphStyles}>Entendemos que cada proyecto es único, por lo que ofrecemos soluciones personalizadas que se adaptan a tus necesidades específicas. Ya sea que necesites un sitio web corporativo elegante, una aplicación web robusta o una plataforma de comercio electrónico potente, estamos aquí para convertir tu visión en realidad.</p>
      </div>

      <div style={ContainerStyles}>
        <h3 style={subtitleStyles}>Compromiso con la Excelencia</h3>
        <p style={paragraphStyles}>En Innovation Co, no solo nos esforzamos por cumplir con tus expectativas, sino que las superamos. Nuestro equipo está comprometido con la excelencia en cada proyecto, desde la planificación inicial hasta el lanzamiento final y más allá. Tu éxito es nuestro éxito.</p>
      </div>

      <div style={ContainerStyles}>
        <h3 style={subtitleStyles}>¿Listo para Empezar?</h3>
        <p style={paragraphStyles}>Déjanos ayudarte a llevar tu presencia en línea al siguiente nivel. Contáctanos hoy mismo para discutir tus necesidades y descubrir cómo podemos trabajar juntos para hacer realidad tus sueños digitales.</p>
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

export default Servicios
