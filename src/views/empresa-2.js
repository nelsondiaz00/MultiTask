import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet'

import './empresa-2.css'
import { getServices } from '../controller/load-data-control'

const Empresa2 = (props) => {
  const [validationResult, setValidationResult] = useState(null);

  useEffect(() => {
    const fetchLoadData = async () => {
      try {
        const data = await getServices('Metales');
        setValidationResult(data);
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };
  
    fetchLoadData();
  }, []);
  return (
    <div className="empresa2-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Empresa-2 - MultiTask" />
      </Helmet>
      <div id="banner" className="empresa2-container01">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="empresa2-image"
        />
        <div id="barra" className="empresa2-container02">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="empresa2-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="empresa2-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
          <button
            id="botonNotificaciones"
            type="button"
            className="empresa2-button button"
          >
            <svg viewBox="0 0 1024 1024" className="empresa2-icon03">
              <path d="M712.832 315.904c-8.064-8.021-19.115-12.075-30.165-12.075s-22.101 4.053-30.165 12.075l-97.835 97.835v-285.739c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v285.739l-97.835-97.835c-8.064-8.021-18.773-12.501-30.165-12.501s-22.101 4.48-30.165 12.501c-16.64 16.64-16.64 43.691 0 60.331l200.832 199.765 200.917-199.851c16.555-16.512 16.555-43.605-0.085-60.245z"></path>
              <path d="M895.445 682.667c0-4.48-0.171-9.003-1.664-13.483l-85.333-256c-5.803-17.451-22.059-29.184-40.448-29.184h-9.344c-4.011 8.021-8.96 15.701-15.659 22.4l-63.232 62.933h57.515l71.125 213.333h-592.768l71.125-213.333h57.515l-63.275-62.933c-6.699-6.699-11.691-14.379-15.659-22.4h-9.344c-18.389 0-34.645 11.733-40.448 29.184l-85.333 256c-1.493 4.48-1.664 9.003-1.664 13.483-0.555 0-0.555 213.333-0.555 213.333 0 23.595 19.072 42.667 42.667 42.667h682.667c23.595 0 42.667-19.072 42.667-42.667 0 0 0-213.333-0.555-213.333z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="empresa2-container03">
        <Link to="/empresa-1" className="empresa2-navlink1">
          <svg viewBox="0 0 1024 1024" className="empresa2-icon06">
            <path d="M725.333 469.333h-323.669l97.835-97.835c16.683-16.683 16.683-43.648 0-60.331s-43.648-16.683-60.331 0l-200.832 200.832 200.832 200.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501c16.683-16.683 16.683-43.648 0-60.331l-97.835-97.835h323.669c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
        <span className="empresa2-text">Sector</span>
        <span className="empresa2-text01">Metales</span>
      </div>
      <div id="contenedor_main" className="empresa2-container04">
        <div className="empresa2-container05">
          <input
            type="text"
            placeholder="¡Busca lo que necesitas!"
            className="empresa2-textinput input"
          />
          <svg viewBox="0 0 1024 1024" className="empresa2-icon08">
            <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
          </svg>
        </div>
        <div className="empresa2-container06">
          <div className="empresa2-container07">
          {validationResult && validationResult.map((service, index) => (
              <div key={index} className="empresa2-container08">
                <span className="empresa2-text02">{service.titulo}</span>
                <span>{service.descripcion}</span>
                <svg viewBox="0 0 1024 1024" className="empresa2-icon10">
                  <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="empresa2-icon12">
                  <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                </svg>
              </div>
            ))}
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Empresa2
