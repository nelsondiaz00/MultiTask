import React, { useEffect, useState } from 'react';
import { putInfo } from '../controller/load-data-control'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './empleado-1.css'
import { updateProfile } from '../controller/update-profile-control';

const Empleado1 = (props) => {
  const [validationResult, setValidationResult] = useState(null);

  useEffect(() => {
    const fetchLoadData = async () => {
      try {
        const result = await putInfo();
        setValidationResult(result);
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };
  
    fetchLoadData();
  }, []);
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
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="empleado1-navlink button"
          >
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
              <span className="empleado1-text02">Modificar información</span>
              <Link to="/empleado-2" className="empleado1-navlink1">
                Cliente- Empresa
              </Link>
              <Link to="/empleado-3" className="empleado1-navlink2">
                Cliente - Postulado
              </Link>
              <span className="empleado1-text03">Citas</span>
            </div>
            <div id="contenedor_principal" className="empleado1-container07">
              <span className="empleado1-text04">
                <span className="empleado1-text05">
                  Modificar información personal
                </span>
                <br></br>
              </span>
              <div className="empleado1-container08">
                <div id="contenedor_nombres" className="empleado1-container09">
                  <span className="empleado1-text07">Nombres</span>
                  <input
                    type="text"
                    id="input_nombres"
                    className="empleado1-textinput input"
                  />
                </div>
                <div
                  id="contenedor_apellidos"
                  className="empleado1-container10"
                >
                  <span className="empleado1-text08">
                    <span>Apellidos</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_apellidos"
                    className="empleado1-textinput1 input"
                  />
                </div>
                <div id="contenedor_tipdoc" className="empleado1-container11">
                  <span className="empleado1-text11">
                    <span>Tipo de documento</span>
                    <br></br>
                  </span>
                  <select
                    id="input_tipdoc"
                    disabled="true"
                    required="true"
                    className="empleado1-select"
                  >
                    <option value="Option 1">C.C</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">C.E</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div id="contenedor_numdoc" className="empleado1-container12">
                  <span className="empleado1-text14">
                    <span>Número de documento</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_numdoc"
                    value="1076684566"
                    disabled="true"
                    className="empleado1-textinput2 input"
                  />
                </div>
              </div>
              <div className="empleado1-container13">
                <div
                  id="contenedor_direccion"
                  className="empleado1-container14"
                >
                  <span className="empleado1-text17">Dirección</span>
                  <input
                    type="text"
                    id="input_direccion"
                    className="empleado1-textinput3 input"
                  />
                </div>
                <div id="contenedor_username" className="empleado1-container15">
                  <span className="empleado1-text18">
                    <span>Nombre de usuario</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_username"
                    className="empleado1-textinput4 input"
                  />
                </div>
                <div id="contenedor_correo" className="empleado1-container16">
                  <span className="empleado1-text21">
                    <span>Correo electrónico</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_correo"
                    className="empleado1-textinput5 input"
                  />
                </div>
              </div>
              <div className="empleado1-container17">
                <div id="contenedor_numero" className="empleado1-container18">
                  <span className="empleado1-text24">Número celular</span>
                  <input
                    type="text"
                    id="input_numero"
                    className="empleado1-textinput6 input"
                  />
                </div>
                <div id="contenedor_cumple" className="empleado1-container19">
                  <span className="empleado1-text25">
                    <span>Fecha de nacimiento</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_cumple"
                    value="01/01/05"
                    disabled="true"
                    className="empleado1-textinput7 input"
                  />
                </div>
                <div id="contenedor_genero" className="empleado1-container20">
                  <span className="empleado1-text28">
                    <span>Género</span>
                    <br></br>
                  </span>
                  <select
                    id="input_genero"
                    disabled="true"
                    required="true"
                    className="empleado1-select1"
                  >
                    <option value="Option 1">Masculino</option>
                    <option value="Option 1">Femenino</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Prefiero no decir</option>
                    <option value="Option 2">No binario</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <button
                  id="boton_guardar"
                  type="button"
                  className="empleado1-button button"
                  onClick={() => updateProfile()}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Empleado1
