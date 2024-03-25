import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { putInfo } from '../../controller/load-data-control'
import { Helmet } from 'react-helmet'
import '../admin/css/admin-home.css'
import { updateProfile } from '../../controller/update-profile-control';

const ModificarInfoPersona = () => {

  useEffect(() => {
    const fetchLoadData = async () => {
      try {
        await putInfo();

      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };
  
    fetchLoadData();
  }, []);

  return (
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
  );
};

export default ModificarInfoPersona;
