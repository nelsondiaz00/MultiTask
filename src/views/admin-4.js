import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './admin-4.css'

const Admin4 = (props) => {
  return (
    <div className="admin4-container">
      <Helmet>
        <title>Admin-4 - MultiTask</title>
        <meta property="og:title" content="Admin-4 - MultiTask" />
      </Helmet>
      <div id="banner" className="admin4-container01">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="admin4-image"
        />
        <div id="barra" className="admin4-container02">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="admin4-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="admin4-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div id="contenedor_main" className="admin4-container03">
        <div id="contendor_main2" className="admin4-container04">
          <span id="correo_usuario" className="admin4-text">
            annasofiasarmiento@gmail.com
          </span>
          <span id="tipo_usuario" className="admin4-text1">
            Administrador
          </span>
          <div className="admin4-container05">
            <div className="admin4-container06">
              <Link to="/admin-1" className="admin4-navlink1">
                Modificar información
              </Link>
              <Link to="/admin-2" className="admin4-navlink2">
                Usuario - Empleado
              </Link>
              <Link to="/admin-3" className="admin4-navlink3">
                Crear usuario
              </Link>
              <span className="admin4-text2">Informes</span>
            </div>
            <div id="contenedor_principal" className="admin4-container07">
              <span className="admin4-text3">
                <span className="admin4-text4">Informes</span>
                <br></br>
              </span>
              <div className="admin4-container08">
                <div className="admin4-container09">
                  <div className="admin4-container10">
                    <button
                      id="boton_informeingeg"
                      type="button"
                      className="admin4-button button"
                    >
                      Crear informe Ingresos - Egresos
                    </button>
                  </div>
                  <div className="admin4-container11">
                    <button
                      id="boton_informeingeg"
                      type="button"
                      className="admin4-button1 button"
                    >
                      Crear informe Empresas - Postulados
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin4
