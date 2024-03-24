import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { putInfo } from '../controller/load-data-control'
import { Helmet } from 'react-helmet'
import './admin-1.css'
import { updateProfile } from '../controller/update-profile-control';

const Admin1 = (props) => {
  const [validationResult, setValidationResult] = useState(null);

  useEffect(() => {
    const fetchLoadData = async () => {
      try {
        const data = await putInfo();
        setValidationResult(data);
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };
  
    fetchLoadData();
  }, []);
  return (
    <div className="admin1-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Admin-1 - MultiTask" />
      </Helmet>
      <div id="banner" className="admin1-container01">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="admin1-image"
        />
        <div id="barra" className="admin1-container02">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="admin1-navlink button"
            
          > Cerrar Sesión
            
            <svg viewBox="0 0 1024 1024" className="admin1-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div id="contenedor_main" className="admin1-container03">
        <div id="contendor_main2" className="admin1-container04">
          <span id="correo_usuario" className="admin1-text">
          {`${localStorage.getItem('correo')}`}
                    </span>
          <span id="tipo_usuario" className="admin1-text01">
            Administrador
          </span>
          <div className="admin1-container05">
            <div className="admin1-container06">
              <span className="admin1-text02">Modificar información</span>
              <Link to="/admin-2" className="admin1-navlink1">
                Usuario - Empleado
              </Link>
              <Link to="/admin-3" className="admin1-navlink2">
                Crear usuario
              </Link>
              <Link to="/admin-4" className="admin1-navlink3">
                Informes
              </Link>
            </div>
            <div id="contenedor_principal" className="admin1-container07">
              <span className="admin1-text03">
                <span className="admin1-text04">
                  Modificar información personal
                </span>
                <br></br>
              </span>
              <div className="admin1-container08">
                <div id="contenedor_nombres" className="admin1-container09">
                  <span className="admin1-text06">Nombres</span>
                  <input
                    type="text"
                    id="input_nombres"
                    className="admin1-textinput input"
                  />
                </div>
                <div id="contenedor_apellidos" className="admin1-container10">
                  <span className="admin1-text07">
                    <span>Apellidos</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_apellidos"
                    className="admin1-textinput1 input"
                  />
                </div>
                <div id="contenedor_tipdoc" className="admin1-container11">
                  <span className="admin1-text10">
                    <span>Tipo de documento</span>
                    <br></br>
                  </span>
                  <select
                    id="input_tipdoc"
                    disabled="true"
                    required="true"
                    className="admin1-select"
                  >
                    <option value="Option 1">C.C</option>
                    <option value="Option 2">C.E</option>
                  </select>
                </div>
                <div id="contenedor_numdoc" className="admin1-container12">
                  <span className="admin1-text13">
                    <span>Número de documento</span>
                    <br></br>
                  </span>
                  <input
                    type="tel"
                    id="input_numdoc"
                    value="1076684566"
                    disabled="true"
                    className="admin1-textinput2 input"
                  />
                </div>
              </div>
              <div className="admin1-container13">
                <div id="contenedor_direccion" className="admin1-container14">
                  <span className="admin1-text16">Dirección</span>
                  <input
                    type="text"
                    id="input_direccion"
                    className="admin1-textinput3 input"
                  />
                </div>
                <div id="contenedor_username" className="admin1-container15">
                  <span className="admin1-text17">
                    <span>Nombre de usuario</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    disabled="true"
                    id="input_username"
                    className="admin1-textinput4 input"
                  />
                </div>
                <div id="contenedor_correo" className="admin1-container16">
                  <span className="admin1-text20">
                    <span>Correo electrónico</span>
                    <br></br>
                  </span>
                  <input
                    type="email"
                    id="input_correo"
                    className="admin1-textinput5 input"
                  />
                </div>
                <div id="contenedor_contrasena" className="admin1-container16">
                  <span className="admin1-text20">
                    <span>Contraseña</span>
                    <br></br>
                  </span>
                  <input
                    type="password"
                    id="input_contraseña"
                    className="admin1-contrasena input"
                  />
                </div>
              </div>
              <div className="admin1-container17">
                <div id="contenedor_numero" className="admin1-container18">
                  <span className="admin1-text23">Número celular</span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder='3XX XXXXXXX'
                    id="input_numero"
                    className="admin1-textinput6 input"
                  />
                </div>
                <div id="contenedor_cumple" className="admin1-container19">
                  <span className="admin1-text24">
                    <span>Fecha de nacimiento</span>
                    <br></br>
                  </span>
                  <input
                    type="date"
                    id="input_cumple"
                    value="01/01/05"
                    disabled="true"
                    className="admin1-textinput7 input"
                  />
                </div>
                <div id="contenedor_genero" className="admin1-container20">
                  <span className="admin1-text27">
                    <span>Género</span>
                    <br></br>
                  </span>
                  <select
                    id="input_genero"
                    disabled="true"
                    required="true"
                    className="admin1-select1"
                  >
                    <option value="Option 1">Masculino</option>
                    <option value="Option 1">Femenino</option>
                    <option value="Option 2">Prefiero no decir</option>
                    <option value="Option 2">No binario</option>
                  </select>
                </div>
                <button
                  id="boton_guardar"
                  type="button"
                  className="admin1-button button"
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

export default Admin1
