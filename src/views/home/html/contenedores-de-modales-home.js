import React from 'react'

import { Helmet } from 'react-helmet'

import '../css/contenedores-de-modales-home.css'

const ContenedorEmpresa = (props) => {
    return (
      <div
        id="contenedor_regempresa"
        className="contenedores-de-modales-home-container1"
      >
        <span className="contenedores-de-modales-home-text">
          Encuentra talento
        </span>
        <span className="contenedores-de-modales-home-text1">
          Correo Electrónico
        </span>
        <input
          type="email"
          id="input_correo_emp"
          className="contenedores-de-modales-home-textinput input"
        />
        <div className="contenedores-de-modales-home-container2">
          <span className="contenedores-de-modales-home-text2">Contraseña</span>
        </div>
        <input
          type="password"
          id="input_nit_emp"
          className="contenedores-de-modales-home-textinput1 input"
        />
        <span className="contenedores-de-modales-home-text3">
          Confirmación de contraseña
        </span>
        <input
          type="password"
          id="input_nit_confirm_emp"
          className="contenedores-de-modales-home-textinput2 input"
        />
        <button
          id="boton_guardar_emp"
          type="button"
          className="contenedores-de-modales-home-button button"
        >
          Registrarme
        </button>
      </div>
    );
  };
  


const ContenedorPostulado = (props) => {
    return (
    <div
        id="contenedor_regpostulado"
        className="contenedores-de-modales-home-container3"
      >
        <span className="contenedores-de-modales-home-text4">
          Encuentra trabajo
        </span>
        <span className="contenedores-de-modales-home-text5">
          Correo Electrónico
        </span>
        <input
          type="email"
          id="input_correo_post"
          className="contenedores-de-modales-home-textinput3 input"
        />
        <div className="contenedores-de-modales-home-container4">
          <span className="contenedores-de-modales-home-text6">Contraseña</span>
        </div>
        <input
          type="password"
          id="input_nit_post"
          className="contenedores-de-modales-home-textinput4 input"
        />
        <span className="contenedores-de-modales-home-text7">
          Confirmación de contraseña
        </span>
        <input
          type="password"
          id="input_nit_confirm_post"
          className="contenedores-de-modales-home-textinput5 input"
        />
        <button
          id="boton_guardar_post"
          type="button"
          className="contenedores-de-modales-home-button1 button"
        >
          Registrarme
        </button>
      </div>

    )
}

export { ContenedorEmpresa, ContenedorPostulado };

