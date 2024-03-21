import React, { useEffect, useState } from 'react';
// import React from 'react'
import { Link } from 'react-router-dom'
import { finalValidation } from '../controller/code-email-process'
import { sendEmail } from '../controller/code-email-process'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';

import './autenticacin.css'

const Autenticacin = (props) => {
  const history = useHistory();
  
  const [validationResult, setValidationResult] = useState(null);

useEffect(() => {
  const fetchValidationResult = async () => {
    try {
      const result = await sendEmail();
      setValidationResult(result);
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      // Puedes manejar el error aquí si es necesario
    }
  };

  fetchValidationResult();
}, []);


  return (
    <div className="autenticacin-container">
      <Helmet>
        <title>Autenticacin - MultiTask</title>
        <meta property="og:title" content="Autenticacin - MultiTask" />
      </Helmet>
      <div id="contenedor_inicio" className="autenticacin-container1">
        <Link to="/" className="autenticacin-navlink">
          <svg viewBox="0 0 1024 1024" className="autenticacin-icon">
            <path d="M725.333 469.333h-323.669l97.835-97.835c16.683-16.683 16.683-43.648 0-60.331s-43.648-16.683-60.331 0l-200.832 200.832 200.832 200.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501c16.683-16.683 16.683-43.648 0-60.331l-97.835-97.835h323.669c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
        <div className="autenticacin-container2">
          <Link to="/" className="autenticacin-navlink1">
            <img
              alt="image"
              src="/external/multitask%20-%20logo.svg"
              loading="eager"
              className="autenticacin-image"
            />
          </Link>
          <span id="texto" className="autenticacin-text">
            <span className="autenticacin-text1">Te enviamos un código a</span>
            <span className="autenticacin-text2">
              {' '}
              correoicreíbledelusuario@gmail.com
            </span>
            <br></br>
            <br></br>
            <span className="autenticacin-text5">
              Ingrésalo abajo para saber que eres tú.
            </span>
            <br></br>
          </span>
          <input
            type="text"
            id="input_codigo"
            required="true"
            className="autenticacin-textinput input"
          />
          <span id="link_nosotros" className="autenticacin-text7">
            Confiamos en tí, solo es para confirmar :)
          </span>
          <Link
            to="/admin-1"
            id="boton_inicioses"
            className="autenticacin-navlink2 button"
            onClick={(event) => finalValidation(event, history, validationResult)}

          >
            Inicia Sesión
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Autenticacin
