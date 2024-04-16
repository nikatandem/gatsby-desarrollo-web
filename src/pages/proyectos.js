import React from "react"
import Layout from "../components/layout"
import "../styles.css"
const Proyectos = () => {
  return (
    <Layout>
    <div style={{ textAlign: "center" }}>
      <h1>Nuestros Proyectos</h1>
      <div style={{ marginBottom: "40px" }}>
        <h2>Proyecto 1: Sitio Web de Comercio Electrónico</h2>
        <p>Desarrollo de un sitio web de comercio electrónico para una marca de ropa de moda. El proyecto incluyó un diseño atractivo y responsive, integración con pasarelas de pago, gestión de inventario y funcionalidades avanzadas de búsqueda y filtrado de productos.</p>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <h2>Proyecto 2: Aplicación Móvil de Gestión de Tareas</h2>
        <p>Creación de una aplicación móvil de gestión de tareas para ayudar a los usuarios a organizar su vida diaria. La aplicación incluyó características como listas de tareas personalizadas, recordatorios, seguimiento de objetivos y sincronización en la nube para acceso multiplataforma.</p>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <h2>Proyecto 3: Plataforma de Aprendizaje en Línea</h2>
        <p>Desarrollo de una plataforma de aprendizaje en línea para una institución educativa. La plataforma permitió a los estudiantes acceder a cursos en línea, participar en actividades interactivas, realizar exámenes y recibir retroalimentación en tiempo real de los instructores.</p>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <h2>Proyecto 4: Sitio Web Corporativo</h2>
        <p>Diseño y desarrollo de un sitio web corporativo para una empresa de tecnología. El sitio web presentaba información sobre la empresa, sus servicios, estudios de caso y testimonios de clientes. También incluyó un blog integrado para compartir noticias y artículos relacionados con la industria.</p>
      </div>
    </div>
    </Layout>
  )
}

export default Proyectos
