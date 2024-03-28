import React from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Helmet } from 'react-helmet'

import '../css/empresa-perfil.css'

const EmpresaPerfil = (props) => {
  return (
    <div className="empresa-perfil-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Empresa-perfil - MultiTask" />
      </Helmet>
      <div id="banner" className="empresa-perfil-container01">
      <Link to="/empresa-inicio" className="empresa-perfil-navlink">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="empresa-perfil-image"
        />
        </Link>
        <div id="barra" className="empresa-perfil-container02">
          <Link
            to="/"
            id="botonCerrarSesion"
            className="empresa-perfil-navlink2 button"
          > Cerrar Sesión
            <svg viewBox="0 0 1024 1024" className="empresa-perfil-icon">
              <path d="M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div id="contenedor_main" className="empresa-perfil-container03">
        <div className="empresa-perfil-container04"></div>
        <div id="contendor_main" className="empresa-perfil-container05">
          <div className="empresa-perfil-container06">
            <img
              src="https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg?t=st=1711561028~exp=1711564628~hmac=1213e672f8401f98f88b8f25657cc65115a334930ab23bd444e7efe1bc2f184b&amp;w=740"
              alt="image"
              loading="eager"
              className="empresa-perfil-image1"
            />
            <div className="empresa-perfil-container07">
              <div className="empresa-perfil-container08">
                <span className="empresa-perfil-text">SuperGatos Inc.</span>
                <span className="empresa-perfil-text1">Premium</span>
                <span className="empresa-perfil-text2">
                  Calle de los gatos #33 - 29
                </span>
                <span className="empresa-perfil-text3">
                  supergatosinc@meowmail.com
                </span>
                <span className="empresa-perfil-text4">6321925</span>
              </div>
            </div>
          </div>
          <div className="empresa-perfil-container09">
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
              <Tabs className='tabs'>
                <Tab label="Editar perfil" className='tab' />
                <Tab label="Postulaciones" className='tab' />
                <Tab label="Notificaciones" className='tab' />
              </Tabs>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpresaPerfil

