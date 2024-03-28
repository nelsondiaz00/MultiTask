import { Link } from 'react-router-dom'
import { finalValidation } from '../../../../controller/autentication-control.js';
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


import '../css/inicio-de-sesion.css'
import Authentication from '../../../scripts/authentication-view-script.js';

const InicioDeSesin = (props) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const [mostrarContenedor2, setMostrarContenedor2] = useState(true); 

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
    setMostrarContenedor2(false)
  };
  const handleAuthClick = async (event) => {
    event.preventDefault(); // Evita la acción predeterminada del enlace

    const validationSuccess = await finalValidation(event, history);

    if (validationSuccess) {
      handleItemClick('authentication');
    }
  };

  const history = useHistory();
  return (
    <div className="inicio-de-sesin-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Inicio-de-sesin - MultiTask" />
      </Helmet>
      <div id="contenedor_inicio" className="inicio-de-sesin-container1">
        <Link to="/" className="inicio-de-sesin-navlink">
          <svg viewBox="0 0 1024 1024" className="inicio-de-sesin-icon">
            <path d="M725.333 469.333h-323.669l97.835-97.835c16.683-16.683 16.683-43.648 0-60.331s-43.648-16.683-60.331 0l-200.832 200.832 200.832 200.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501c16.683-16.683 16.683-43.648 0-60.331l-97.835-97.835h323.669c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
        {mostrarContenedor2 &&(
          <div className="inicio-de-sesin-container2">
            <Link to="/" className="inicio-de-sesin-navlink1">
              <img
                alt="image"
                src="/external/multitask%20-%20logo.svg"
                className="inicio-de-sesin-image"
              />
            </Link>
            <span id="link_nosotros" className="inicio-de-sesin-text">
              Correo Electrónico
            </span>
            <input
              type="email"
              id="input_correo"
              required="true"
              className="inicio-de-sesin-textinput input"
            />
            <span id="link_nosotros" className="inicio-de-sesin-text1">
              Contraseña
            </span>
            <input
              type="password"
              id="input_contrasena"
              required="true"
              className="inicio-de-sesin-textinput1 input"
            />
            <Link
              id="boton_inicioses"
              className="inicio-de-sesin-navlink2 button"
              onClick={handleAuthClick}
              >
              Autentica
            </Link>
          </div>
        )}
        {activeItemId === 'authentication' && <Authentication />}

      </div>
      <script src="/src/controller/autenticacion.js"></script>
    </div>
  )
}

export default InicioDeSesin
