import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './inicio-de-sesin.css'

const InicioDeSesin = (props) => {
  return (
    <div className="inicio-de-sesin-container">
      <Helmet>
        <title>Inicio-de-sesin - MultiTask</title>
        <meta property="og:title" content="Inicio-de-sesin - MultiTask" />
      </Helmet>
      <div id="contenedor_inicio" className="inicio-de-sesin-container1">
        <Link to="/" className="inicio-de-sesin-navlink">
          <svg viewBox="0 0 1024 1024" className="inicio-de-sesin-icon">
            <path d="M725.333 469.333h-323.669l97.835-97.835c16.683-16.683 16.683-43.648 0-60.331s-43.648-16.683-60.331 0l-200.832 200.832 200.832 200.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501c16.683-16.683 16.683-43.648 0-60.331l-97.835-97.835h323.669c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
        <div className="inicio-de-sesin-container2">
          <Link to="/" className="inicio-de-sesin-navlink1">
            <img
              alt="image"
              src="/external/multitask%20-%20logo.svg"
              className="inicio-de-sesin-image"
            />
          </Link>
          <a
            href="#contenedor_nosotros"
            id="link_nosotros"
            className="inicio-de-sesin-link"
          >
            Correo Electrónico
          </a>
          <input type="text" className="inicio-de-sesin-textinput input" />
          <a
            href="#contenedor_nosotros"
            id="link_nosotros"
            className="inicio-de-sesin-link1"
          >
            Contraseña
          </a>
          <input type="text" className="inicio-de-sesin-textinput1 input" />
          <button
            id="botonRegEmp"
            type="button"
            className="inicio-de-sesin-button button"
          >
            <span>
              <span className="inicio-de-sesin-text1">Inicia Sesión</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default InicioDeSesin
