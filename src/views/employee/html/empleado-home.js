import React, { useEffect, useState } from 'react';
import { putInfo } from '../../../controller/load-data-control'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import '../css/empleado-home.css'
import { updateProfile } from '../../../controller/update-profile-control';
import ModificarInfoPersona from '../../scripts/modify-user-script';
import Empleado2 from '../../scripts/client-view-script';
import Empleado3 from '../../scripts/client-person-view-script';

const Empleado1 = (props) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const handleItemClick = (itemId) => {
    setAllNavLinksToAdmin1()
    setActiveItemId(itemId);
  };
  function setAllNavLinksToAdmin1() {
    const container = document.querySelector('.admin1-container06');
    if (container) {
        const spans = container.querySelectorAll('span');
        spans.forEach(span => {
            span.classList.add('admin1-navlink1');
            span.classList.remove('admin1-text02');
            span.classList.remove('admin1-text2');
          
        });
    }
  }
  
  return (
    <div className="empleado1-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Empleado-1 - MultiTask" />
      </Helmet>
      <div id="banner" className="empleado1-container01">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="empleado1-image"
        />
        <div id="barra" className="empleado1-container02">
          <Link
            to="/"
            id="botonCerrarSesion"
            className="empleado1-navlink button"
          >Cerrar Sesión
            <svg viewBox="0 0 1024 1024" className="empleado1-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div id="contenedor_main" className="empleado1-container03">
        <div id="contendor_main2" className="empleado1-container04">
          <span id="correo_usuario" className="empleado1-text">
            {`${localStorage.getItem('correo')}`}
          </span>
          <span id="tipo_usuario" className="empleado1-text01">
            Empleado
          </span>
          <div className="empleado1-container05">
            <div className="empleado1-container06">
              <span id="modify" className={`admin1-navlink1 ${activeItemId === 'modify' ? 'admin1-text2' : ''}`} onClick={() => handleItemClick('modify')}>
                  Modificar información
              </span> 
              <span id="getEmpresa" className={`admin1-navlink1 ${activeItemId === 'getCompanie' ? 'admin1-text2' : ''}`} onClick={() => handleItemClick('getCompanie')}>
                Cliente- Empresa
              </span>
              <span id="getCandidate" className={`admin1-navlink2 ${activeItemId === 'getCandidate' ? 'admin1-text2' : ''}`} onClick={() => handleItemClick('getCandidate')}>
                Cliente - Postulado
              </span>
              <span className="empleado1-text03">Citas</span>
            </div>
            {activeItemId === 'modify' && <ModificarInfoPersona />}
            {activeItemId === 'getCompanie' && <Empleado2 />}
            {activeItemId === 'getCandidate' && <Empleado3 />}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Empleado1
