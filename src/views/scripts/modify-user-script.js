import { Link } from 'react-router-dom'
import { putInfo } from '../../controller/load-data-control'
import { Helmet } from 'react-helmet'
import '../admin/css/admin-home.css'
import { updateProfile } from '../../controller/update-profile-control';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ModificarInfoPersona = () => {
  const [result, setResult] = useState(null);
  const [open, setOpen] = React.useState(false);

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
    const fetchLoadData = async () => {
      try {
        await putInfo();

      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };
  
    fetchLoadData();
  }, []);

  useEffect(() => {
    const handleInput = (event) => {
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    };
    const inputNumero = document.getElementById('input_numero');
    inputNumero.addEventListener('input', handleInput);

    return () => {
      inputNumero.removeEventListener('input', handleInput);
    };
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
            <option value="C.C">C.C</option>
            <option value="C.E">C.E</option>
            <option value="Pasaporte">Pasaporte</option>

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
            id="input_username"
            className="admin1-textinput5 input"
          />
        </div>
        <div id="contenedor_correo" className="admin1-container16">
          <span className="admin1-text20">
            <span>Correo electrónico</span>
            <br></br>
          </span>
          <input
            type="email"
            disabled="true"
            id="input_correo"
            className="admin1-textinput4 input"
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
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Prefiero no decir">Prefiero no decir</option>
            <option value="Option 2">No binario</option>
          </select>
        </div>
        <button
          id="boton_guardar"
          type="button"
          className="admin1-button button"
          onClick={async () => {
            const result = await updateProfile();
            setResult(result);
            if (result) {
              handleClick();
            }
          }}
          >
          Guardar cambios
        </button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={
            result === 200 ? "Actualizado correctamente" :
            result === 404 ? "Rellene todos los campos" :
            result === 400 ? "Error de red" :
            "Error de red"
          }          
          action={action}
        />
      </div>
      </div>
  );
};

export default ModificarInfoPersona;
