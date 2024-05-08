import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'
import '../admin/css/admin-3.css'
import { registerUser } from '../../controller/create-control'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Admin3 = (props) => {

  const [open, setOpen] = React.useState(false);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose} style={{ color: 'yellow' }}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        style={{ fontFamily: 'Comic Sans MS, Comic Sans, sans-serif' }}
        >
        <CloseIcon fontSize="large" />
      </IconButton>
    </React.Fragment>
  );
  
  useEffect(() => {
    const handleInput = (event) => {
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };

    const inputNumDoc = document.getElementById('input_numdoc');
    inputNumDoc.addEventListener('input', handleInput);

    const inputNumero = document.getElementById('input_numero');
    inputNumero.addEventListener('input', handleInput);

    return () => {
      inputNumDoc.removeEventListener('input', handleInput);
      inputNumero.removeEventListener('input', handleInput);
    };
  }, []);


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
            <option value="C.C">C.C</option>
            <option value="C.E">C.E</option>
            <option value="Pasaporte">Pasaporte</option>
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
            pattern="[0-9]+"
            required
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
            type="email"
            id="input_correo"
            className="admin3-textinput5 input"
            required
            placeholder='supercorreo@mail.com'
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
            className="admin3-contrasena input"
          />
        </div>
      </div>
      <div className="admin3-container17">
        <div id="contenedor_numero" className="admin3-container18">
          <span className="admin3-text23">Número celular</span>
          <input
            type="tel"
            id="input_numero"
            pattern="[0-9]{10}"
            maxLength={10}
            className="admin3-textinput6 input"
            placeholder='3XX XXXXXXX'
          />
        </div>
        <div id="contenedor_cumple" className="admin3-container19">
          <span className="admin3-text24">
            <span>Fecha de nacimiento</span>
            <br></br>
          </span>
          <input
            type="date" pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])
            "
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
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Prefiero no decir">Prefiero no decir</option>
          </select>
        </div>
        <div id="contenedor_tipocuenta" className="admin3-container21">
          <span className="admin3-text30">
            <span>Tipo de cuenta</span>
            <br></br>
          </span>
          <select id="input_tipocuenta" className="admin3-select2">
            <option value="Administrador">Administrador</option>
            <option value="Empleado">Empleado</option>
          </select>
        </div>
        <button
          id="boton_guardar"
          type="button"
          className="admin3-button button"
          onClick={async () => {
            const result = await registerUser();
            setResult(result);
            if (result) {
              handleClick();
            }
          }}
        >
          Crear usuario
        </button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={
            result === 200 ? "Usuario creado exitosamente" :
            result === 404 ? "Rellene todos los campos" :
            result === 401 ? "Email registrado, cambialo" :
            result === 400 ? "Error de red" :
            "Error de red"
          }          
          action={action}
        />
      </div>
    </div>
    );
  };
  
  export default Admin3;
