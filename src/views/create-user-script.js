import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './admin-3.css'
import { registerUser } from '../controller/create-user-control'

const Admin3 = (props) => {
    return (
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
              <option value="Option 2">Femenino</option>
              <option value="Option 3">Prefiero no decir</option>
            </select>
          </div>
          <div id="contenedor_tipocuenta" className="admin3-container21">
            <span className="admin3-text30">
              <span>Tipo de cuenta</span>
              <br></br>
            </span>
            <select id="input_tipocuenta" className="admin3-select2">
              <option value="admin">Administrador</option>
              <option value="empleado">Empleado</option>
            </select>
          </div>
          <button
            id="boton_guardar"
            type="button"
            className="admin3-button button"
            onClick={registerUser}
          >
            Crear usuario
          </button>
        </div>
      </div>
    );
  };
  
  export default Admin3;
