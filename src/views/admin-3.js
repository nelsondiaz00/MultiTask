import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './admin-3.css'

const Admin3 = (props) => {
  return (
    <div className="admin3-container">
      <Helmet>
        <title>Admin-3 - MultiTask</title>
        <meta property="og:title" content="Admin-3 - MultiTask" />
      </Helmet>
      <div id="banner" className="admin3-container01">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="admin3-image"
        />
        <div id="barra" className="admin3-container02">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="admin3-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="admin3-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div id="contenedor_main" className="admin3-container03">
        <div id="contendor_main2" className="admin3-container04">
          <span id="correo_usuario" className="admin3-text">
            annasofiasarmiento@gmail.com
          </span>
          <span id="tipo_usuario" className="admin3-text01">
            Administrador
          </span>
          <div className="admin3-container05">
            <div className="admin3-container06">
              <Link to="/admin-1" className="admin3-navlink1">
                Modificar información
              </Link>
              <Link to="/admin-2" className="admin3-navlink2">
                Usuario - Empleado
              </Link>
              <span className="admin3-text02">Crear usuario</span>
              <Link to="/admin-4" className="admin3-navlink3">
                Informes
              </Link>
            </div>
            <div id="contenedor_principal" className="admin3-container07">
              <span className="admin3-text03">
                <span className="admin3-text04">Crear usuario</span>
                <br></br>
              </span>
              <div className="admin3-container08">
                <div id="contenedor_nombres" className="admin3-container09">
                  <span className="admin3-text06">Nombres</span>
                  <input
                    type="text"
                    id="input_nombres"
                    className="admin3-textinput input"
                  />
                </div>
                <div id="contenedor_apellidos" className="admin3-container10">
                  <span className="admin3-text07">
                    <span>Apellidos</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_apellidos"
                    className="admin3-textinput1 input"
                  />
                </div>
                <div id="contenedor_tipdoc" className="admin3-container11">
                  <span className="admin3-text10">
                    <span>Tipo de documento</span>
                    <br></br>
                  </span>
                  <select
                    id="input_tipdoc"
                    required="true"
                    className="admin3-select"
                  >
                    <option value="Option 1">C.C</option>
                    <option value="Option 2">C.E</option>
                    <option value="Option 2">Pasaporte</option>
                  </select>
                </div>
                <div id="contenedor_numdoc" className="admin3-container12">
                  <span className="admin3-text13">
                    <span>Número de documento</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_numdoc"
                    className="admin3-textinput2 input"
                  />
                </div>
              </div>
              <div className="admin3-container13">
                <div id="contenedor_direccion" className="admin3-container14">
                  <span className="admin3-text16">Dirección</span>
                  <input
                    type="text"
                    id="input_direccion"
                    className="admin3-textinput3 input"
                  />
                </div>
                <div id="contenedor_username" className="admin3-container15">
                  <span className="admin3-text17">
                    <span>Nombre de usuario</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_username"
                    className="admin3-textinput4 input"
                  />
                </div>
                <div id="contenedor_correo" className="admin3-container16">
                  <span className="admin3-text20">
                    <span>Correo electrónico</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_correo"
                    className="admin3-textinput5 input"
                  />
                </div>
              </div>
              <div className="admin3-container17">
                <div id="contenedor_numero" className="admin3-container18">
                  <span className="admin3-text23">Número celular</span>
                  <input
                    type="text"
                    id="input_numero"
                    className="admin3-textinput6 input"
                  />
                </div>
                <div id="contenedor_cumple" className="admin3-container19">
                  <span className="admin3-text24">
                    <span>Fecha de nacimiento</span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    id="input_cumple"
                    className="admin3-textinput7 input"
                  />
                </div>
                <div id="contenedor_genero" className="admin3-container20">
                  <span className="admin3-text27">
                    <span>Género</span>
                    <br></br>
                  </span>
                  <select
                    id="input_genero"
                    required="true"
                    className="admin3-select1"
                  >
                    <option value="Option 1">Masculino</option>
                    <option value="Option 1">Femenino</option>
                    <option value="Option 1">Homosexual</option>
                    <option value="Option 2">Prefiero no decir</option>
                    <option value="Option 2">No binario</option>
                    <option value="Option 2">Lesbiana</option>
                  </select>
                </div>
                <div id="contenedor_tipocuenta" className="admin3-container21">
                  <span className="admin3-text30">
                    <span>Tipo de cuenta</span>
                    <br></br>
                  </span>
                  <select id="input_tipocuenta" className="admin3-select2">
                    <option value="Option 2">Administrador</option>
                    <option value="Option 3">Empleado</option>
                  </select>
                </div>
                <button
                  id="boton_guardar"
                  type="button"
                  className="admin3-button button"
                >
                  Crear usuario
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin3
