import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './empleado-2.css'

const Empleado2 = (props) => {
  return (
    <div className="empleado2-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Empleado-2 - MultiTask" />
      </Helmet>
      <div id="banner" className="empleado2-container1">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="empleado2-image"
        />
        <div id="barra" className="empleado2-container2">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="empleado2-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="empleado2-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div id="contenedor_main" className="empleado2-container3">
        <div id="contendor_main2" className="empleado2-container4">
          <span id="correo_usuario" className="empleado2-text">
            nelsonyair@gmail.com
          </span>
          <span id="tipo_usuario" className="empleado2-text1">
            Empleado
          </span>
          <div className="empleado2-container5">
            <div className="empleado2-container6">
              <Link to="/empleado-1" className="empleado2-navlink1">
                Modificar información
              </Link>
              <span className="empleado2-text2">Cliente- Empresa</span>
              <Link to="/empleado-3" className="empleado2-navlink2">
                Cliente - Postulado
              </Link>
              <span className="empleado2-text3">Citas</span>
            </div>
            <div id="contenedor_principal" className="empleado2-container7">
              <span className="empleado2-text4">
                <span className="empleado2-text5">Cliente - Empresa</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Empleado2
