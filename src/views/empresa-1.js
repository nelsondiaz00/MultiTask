import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './empresa-1.css'

const Empresa1 = (props) => {
  return (
    <div className="empresa1-container">
      <Helmet>
        <title>Empresa-1 - MultiTask</title>
        <meta property="og:title" content="Empresa-1 - MultiTask" />
      </Helmet>
      <div id="banner" className="empresa1-container01">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="empresa1-image"
        />
        <div id="barra" className="empresa1-container02">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="empresa1-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="empresa1-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
          <button
            id="botonNotificaciones"
            type="button"
            className="empresa1-button button"
          >
            <svg viewBox="0 0 1024 1024" className="empresa1-icon03">
              <path d="M712.832 315.904c-8.064-8.021-19.115-12.075-30.165-12.075s-22.101 4.053-30.165 12.075l-97.835 97.835v-285.739c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v285.739l-97.835-97.835c-8.064-8.021-18.773-12.501-30.165-12.501s-22.101 4.48-30.165 12.501c-16.64 16.64-16.64 43.691 0 60.331l200.832 199.765 200.917-199.851c16.555-16.512 16.555-43.605-0.085-60.245z"></path>
              <path d="M895.445 682.667c0-4.48-0.171-9.003-1.664-13.483l-85.333-256c-5.803-17.451-22.059-29.184-40.448-29.184h-9.344c-4.011 8.021-8.96 15.701-15.659 22.4l-63.232 62.933h57.515l71.125 213.333h-592.768l71.125-213.333h57.515l-63.275-62.933c-6.699-6.699-11.691-14.379-15.659-22.4h-9.344c-18.389 0-34.645 11.733-40.448 29.184l-85.333 256c-1.493 4.48-1.664 9.003-1.664 13.483-0.555 0-0.555 213.333-0.555 213.333 0 23.595 19.072 42.667 42.667 42.667h682.667c23.595 0 42.667-19.072 42.667-42.667 0 0 0-213.333-0.555-213.333z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="contenedor_main" className="empresa1-container03">
        <div className="empresa1-container04"></div>
        <div id="contendor_main" className="empresa1-container05">
          <div className="empresa1-container06">
            <div id="contenedor_1" className="empresa1-container07">
              <Link to="/empresa-2" className="empresa1-navlink1">
                <div className="empresa1-container08">
                  <span className="empresa1-text">Sector</span>
                  <span className="empresa1-text01">Metales</span>
                </div>
              </Link>
              <div className="empresa1-container09">
                <span className="empresa1-text02">Sector</span>
                <span className="empresa1-text03">Maderas</span>
              </div>
            </div>
            <div id="contenedor_2" className="empresa1-container10">
              <div className="empresa1-container11">
                <div className="empresa1-container12">
                  <span className="empresa1-text04">Sector</span>
                  <span className="empresa1-text05">
                    <span>Materiales</span>
                    <br></br>
                  </span>
                </div>
                <div className="empresa1-container13">
                  <span className="empresa1-text08">Sector</span>
                  <span className="empresa1-text09">
                    <span>Transporte</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="empresa1-container14">
                <span className="empresa1-text12">Sector</span>
                <span className="empresa1-text13">Ferretería y eléctrica</span>
              </div>
            </div>
            <div id="contenedor_3" className="empresa1-container15">
              <div className="empresa1-container16">
                <span className="empresa1-text14">Sector</span>
                <span className="empresa1-text15">
                  <span>Otros</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <div id="contenedor_4" className="empresa1-container17">
            <svg viewBox="0 0 1024 1024" className="empresa1-icon06">
              <path d="M384 597.333c58.923 0 112.256-23.893 150.869-62.507 38.571-38.571 62.464-91.904 62.464-150.827s-23.893-112.256-62.464-150.827c-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507z"></path>
              <path d="M384 896c150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667 0 42.667 96 85.333 256 85.333z"></path>
              <path d="M896 512h-85.333v-85.333c0-23.595-19.072-42.667-42.667-42.667s-42.667 19.072-42.667 42.667v85.333h-85.333c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h85.333v85.333c0 23.595 19.072 42.667 42.667 42.667s42.667-19.072 42.667-42.667v-85.333h85.333c23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667z"></path>
            </svg>
            <div className="empresa1-container18">
              <h1 className="empresa1-text18">Postulación especial</h1>
              <span className="empresa1-text19">
                ¿No encuentras lo que buscas? Realiza tu postulación
                personalizada.
              </span>
            </div>
            <button
              id="boton_postular"
              type="button"
              className="empresa1-button1 button"
            >
              Postular
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Empresa1
