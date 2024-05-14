import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppComponent from './component';


import { Helmet } from 'react-helmet'

import '../css/empresa-perfil.css'
import '../css/empresa-perfil-editar.css'
import { getCompanie, getPostulaciones } from '../../../controller/load-data-control';
import { updatePostulation, updateProfileCompanie } from '../../../controller/update-profile-control';
import CompPostulado from './comp-postulado';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const EmpresaPerfil = (props) => {
    const [value, setValue] = useState(0);

    const history = useHistory();

    const [showPopup, setShowPopup] = useState(false);

    const [infoCompanie, setInfoCompanie] = useState(null);

    const [postulacionesActivas, setPostulacionesActivas] = useState(null);

    const [showRenderPost, setShowRenderPost] = useState(false);


    const handleCerrarSesion = () => {
      setShowPopup(true);
    };

    const handleConfirmar = () => {
      setShowPopup(true);
      history.push('/');
    };
    
    const handleCancelar = () => {
      setShowPopup(false);
    };

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };


    const onClickChangeButtonOffer = (index) => {
      const updatedPostulacionesActivas = [...postulacionesActivas];
      
      if (index >= 0 && index < updatedPostulacionesActivas.length) {
        updatedPostulacionesActivas[index] = {
          ...updatedPostulacionesActivas[index],
          disponibilidad_oferta: updatedPostulacionesActivas[index].disponibilidad_oferta === 0 ? 1 : 0
        };
        setPostulacionesActivas(updatedPostulacionesActivas);
        updatePostulation(updatedPostulacionesActivas[index].idOferta_Trabajo);
      
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        const data = await getCompanie();
        setInfoCompanie(data);
        const postulaciones = await getPostulaciones();
        setPostulacionesActivas(postulaciones);
      };
      fetchData();
    }, []);

    const handleCloseModal = (value) => {
      setShowRenderPost(value);
    };
    const [selectedPostulation, setSelectedPostulation] = useState(null);

    const handleIconClick = (index) => {
      setSelectedPostulation(postulacionesActivas[index]);
      setShowRenderPost(true);
    };
    
    if (!infoCompanie) {
      return (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      );
    };
  

  return (
    
    <div className="empresa-perfil-container">
      {showPopup && <div className="popup-overlay" />}
      {showPopup && (
          <div className="popup3">
            <div className="contenedores-de-modales-de-admin-container02">
              <span className="contenedores-de-modales-de-admin-text">
                ¿Seguro que desea cerrar sesión?
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className="contenedores-de-modales-de-admin-icon"
                onClick={handleCancelar}
              >
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
            <div className="contenedores-de-modales-de-admin-container03">
              <button
                id="boton_cancelar"
                type="button"
                className="contenedores-de-modales-de-admin-button button"
                onClick={handleCancelar}
              >
                Cancelar
              </button>
              <button
                id="boton_cerrarses"
                type="button"
                className="contenedores-de-modales-de-admin-button1 button"
                onClick={handleConfirmar} // Agrega la función aquí

              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        )}
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
            to="#"
            id="botonCerrarSesion"
            className="empresa-perfil-navlink2 button"
            onClick={handleCerrarSesion}
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
                <span className="empresa-perfil-text">{infoCompanie.nombre_Empresa}</span>
                <span className="empresa-perfil-text1">{infoCompanie.premium === 1 ? 'Premium' : 'Normal'}
                </span>
                <span className="empresa-perfil-text2">
                  {infoCompanie.direccion}
                </span>
                <span className="empresa-perfil-text3">
                {infoCompanie.correo}

                </span>
                <span className="empresa-perfil-text4">{infoCompanie.telefono}</span>
              </div>
            </div>
          </div>
          <div className="empresa-perfil-container09">
            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
              <Tabs
                  value={value}
                  onChange={handleChangeTab}
                  aria-label="basic tabs example"
              >
                <Tab label="Editar perfil" />
                <Tab label="Postulaciones" />
              </Tabs>
              <TabPanel value={value} index={0}>
                <div
                  id="contenedor_editarperfil"
                  className="contenedores-de-modales-empresa-perfil-container01"
                >
                  <div className="contenedores-de-modales-empresa-perfil-container02">
                    <div className="contenedores-de-modales-empresa-perfil-container03">
                      <div
                        id="contenedor_nombres"
                        className="contenedores-de-modales-empresa-perfil-container04"
                      >
                        <span className="contenedores-de-modales-empresa-perfil-text">
                          Nombre
                        </span>
                        <input
                          type="text"
                          id="input_nombres"
                          className="contenedores-de-modales-empresa-perfil-textinput input"
                          defaultValue={infoCompanie.nombre_Empresa}
                          />
                      </div>
                      <div
                        id="contenedor_apellidos"
                        className="contenedores-de-modales-empresa-perfil-container05"
                      >
                        <span className="contenedores-de-modales-empresa-perfil-text01">
                          <span>NIT</span>
                          <br></br>
                        </span>
                        <input
                          type="text"
                          id="input_nit"
                          className="contenedores-de-modales-empresa-perfil-textinput1 input"
                          value={infoCompanie.nit}
                          readOnly
                        />
                      </div>
                      <div
                        id="contenedor_tipdoc"
                        className="contenedores-de-modales-empresa-perfil-container06"
                      >
                        <span className="contenedores-de-modales-empresa-perfil-text04">
                          <span>Número de teléfono</span>
                          <br></br>
                        </span>
                        <input
                          type="text"
                          id="input_numtel"
                          className="contenedores-de-modales-empresa-perfil-textinput2 input"
                          defaultValue={infoCompanie.telefono}
                        />
                      </div>
                    </div>
                    <div
                      id="contenedor_apellidos"
                      className="contenedores-de-modales-empresa-perfil-container07"
                    >
                      <span className="contenedores-de-modales-empresa-perfil-text07">
                        <span>Correo Electrónico</span>
                        <br></br>
                      </span>
                      <input
                        type="text"
                        id="input_correo"
                        className="contenedores-de-modales-empresa-perfil-textinput3 input"
                        value={infoCompanie.correo}
                        readOnly 
                      />
                    </div>
                  </div>
                  <div className="contenedores-de-modales-empresa-perfil-container08">
                    <div
                      id="contenedor_nombres"
                      className="contenedores-de-modales-empresa-perfil-container09"
                    >
                      <span className="contenedores-de-modales-empresa-perfil-text10">
                        Dirección
                      </span>
                      <input
                        type="text"
                        id="input_direccion"
                        className="contenedores-de-modales-empresa-perfil-textinput4 input"
                        defaultValue={infoCompanie.direccion}
                      />
                    </div>
                    <div
                      id="contenedor_tipdoc"
                      className="contenedores-de-modales-empresa-perfil-container10"
                    >
                      <span className="contenedores-de-modales-empresa-perfil-text11">
                        <span>Contraseña</span>
                        <br></br>
                      </span>
                      <input
                        type="password"
                        id="input_contrasena"
                        className="contenedores-de-modales-empresa-perfil-textinput5 input"
                        defaultValue={infoCompanie.password}
                      />
                    </div>
                    <button
                      id="boton_guardar"
                      type="button"
                      className="contenedores-de-modales-empresa-perfil-button button"
                      onClick={updateProfileCompanie}
                    >
                      Guardar cambios
                    </button>
                  </div>
                  <span className="contenedores-de-modales-empresa-perfil-text04">
                    <span>Información</span>
                    <br></br>
                  </span>
                  <textarea
                    type="text"
                    id="input_info"
                    placeholder='Descripción'
                    
                    className="textarea"
                    defaultValue={infoCompanie.descripcion_publica}
                  />
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
              <div className="empresa2-container07" id="services-container">
              {postulacionesActivas && postulacionesActivas.map((service, index) => (
                    <div key={index} className="empresa2-container08">
                      <span className="empresa2-text02">{service.servicio_nombre}</span>
                      <span>{service.descripcion_Empleo}</span>
                      {/* {<svg viewBox="0 0 1024 1024" className="empresa2-icon10">
                        <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                      </svg>} */}
                      {service.disponibilidad_oferta === 0 ? (
                        <button
                          id="boton_postcomplet"
                          type="button"
                          className="contenedores-de-modales-empresa-perfil-button2 button"
                          onClick={() => onClickChangeButtonOffer(index, service)}
                          >
                          Completada
                        </button>
                      ) : (
                        <button
                          id="boton_postenproceso"
                          type="button"
                          className="contenedores-de-modales-empresa-perfil-button1 button"
                          onClick={() => onClickChangeButtonOffer(index, service)}
                          >
                          En proceso
                        </button>
                      )}
                      <svg
                        viewBox="0 0 1024 1024"
                        className="empresa2-icon12"
                        onClick={() => handleIconClick(index)}
                      >
                        <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                      </svg>
                </div>
                
              ))}
               </div>
               {showRenderPost && <RenderPost selectedPostulation={selectedPostulation}  onIconClick={handleCloseModal}/>}

              </TabPanel>
              <TabPanel value={value} index={2}>
                <div
                  id="contenedor_notificaciones"
                  className="contenedores-de-modales-empresa-perfil-container12"
                >
                  <AppComponent></AppComponent>
                  <AppComponent></AppComponent>
                  <AppComponent></AppComponent>
                  <AppComponent></AppComponent>
                  <AppComponent></AppComponent>
                </div>
              </TabPanel>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
    
  )
}

function RenderPost(props) {
  const [infoPostulation, setInfoPostulation] = useState(null);

  useEffect(() => {
    setInfoPostulation(props.selectedPostulation)
    console.log(props.selectedPostulation, " PROPOPSPOPROPS")
    // Guarda el valor actual de la posición de desplazamiento
    const scrollY = window.scrollY;

    // Bloquea el desplazamiento del cuerpo
    document.body.style.overflow = 'hidden';

    // Restaura la posición de desplazamiento cuando el componente se desmonta
    return () => {
      document.body.style.overflow = ''; // Restaura el comportamiento predeterminado
      window.scrollTo(0, scrollY); // Restaura la posición de desplazamiento
    };
  }, []);
  const handleCloseModal = () => {
    props.onIconClick(false);
  };

  if (!infoPostulation) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="popup-overlay-form"> 
        <div className="popup-formCenter"> 
          <div id="contenedor_infopost" className="contenedores-de-modales-empresa-perfil-container13">
            <div id="contenedor_infopost_lista" className="contenedores-de-modales-empresa-perfil-container14">
              <span className="contenedores-de-modales-empresa-perfil-text16">
                Postulados
              </span>
              <div className="contenedores-de-modales-empresa-perfil-container15">
                <CompPostulado>


                  
                </CompPostulado>
                <CompPostulado></CompPostulado>
                <CompPostulado></CompPostulado>
              </div>
              <button
                id="boton_seleccionar"
                type="button"
                className="contenedores-de-modales-empresa-perfil-button3 button"
              >
                Seleccionar
              </button>
            </div>
            <div id="contenedor_infopost_text" className="contenedores-de-modales-empresa-perfil-container16">
              <div className="contenedores-de-modales-empresa-perfil-container17">
              <span className="contenedores-de-modales-empresa-perfil-text17">
                {infoPostulation && infoPostulation.servicio_nombre ? infoPostulation.servicio_nombre : 'null'}
              </span>

              </div>
              <span className="contenedores-de-modales-empresa-perfil-text18">
                <span>Descripción</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="contenedores-de-modales-empresa-perfil-icon2" onClick={handleCloseModal}>
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
              <span className="contenedores-de-modales-empresa-perfil-text21">
                {infoPostulation && infoPostulation.descripcion_Empleo ? infoPostulation.descripcion_Empleo : 'null'}
              </span>
              <span className="contenedores-de-modales-empresa-perfil-text22">
                <span>Especificaciones</span>
                <br></br>
              </span>
              <span className="contenedores-de-modales-empresa-perfil-text25">
                {infoPostulation && infoPostulation.especificacion_Empleo ? infoPostulation.especificacion_Empleo : 'null'}
              </span>

              <div className="contenedores-de-modales-empresa-perfil-container18"></div>
              <div className="contenedores-de-modales-empresa-perfil-container19">
                <span className="contenedores-de-modales-empresa-perfil-text26">
                  <span>Salario</span>
                  <br></br>
                </span>
                <span className="contenedores-de-modales-empresa-perfil-text29">
                <span>
                  {infoPostulation && infoPostulation.salario_Oferta ? infoPostulation.salario_Oferta.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }) : 'null'}
                </span>                  
                <br></br>
                </span>
              </div>
              <div className="contenedores-de-modales-empresa-perfil-container20">
                <span className="contenedores-de-modales-empresa-perfil-text32">
                  <span>Horario</span>
                  <br></br>
                </span>
                <span className="contenedores-de-modales-empresa-perfil-text35">
                <span>
                  {infoPostulation && infoPostulation.horario ? infoPostulation.horario : 'null'}
                </span>
                  <br></br>
                </span>
              </div>
              <div id="cont_2" className="contenedores-de-modales-empresa-perfil-container21">
                <div className="contenedores-de-modales-empresa-perfil-container22">
                  <span className="contenedores-de-modales-empresa-perfil-text38">
                    <span>Posibilidad de viaje</span>
                    <br></br>
                  </span>
                  <span className="contenedores-de-modales-empresa-perfil-text41">
                    {infoPostulation && infoPostulation.posibilidad_Viaje === 1 ? 'Sí' : 'No'}
                    <br></br>
                  </span>
                </div>
                <div className="contenedores-de-modales-empresa-perfil-container23">
                  <span className="contenedores-de-modales-empresa-perfil-text44">
                    <span>Cantidad</span>
                    <br></br>
                  </span>
                  <span className="contenedores-de-modales-empresa-perfil-text47">
                    <span>{infoPostulation && infoPostulation.cantidadRequerida ? infoPostulation.cantidadRequerida : 'null'}</span>
                    <br></br>
                  </span>
                </div>
                <div className="contenedores-de-modales-empresa-perfil-container24">
                  <span className="contenedores-de-modales-empresa-perfil-text50">
                  <span>
                    Disponibilidad de la postulación ({infoPostulation && infoPostulation.disponibilidad_oferta === 1 ? 'sí' : 'no'})
                  </span>
                    <br></br>
                  </span>
                </div>
                <div className="contenedores-de-modales-empresa-perfil-container25">
                  <span className="contenedores-de-modales-empresa-perfil-text53">
                    <span>Desde</span>
                    <br></br>
                  </span>
                  <span className="contenedores-de-modales-empresa-perfil-text56">
                  <span>{infoPostulation && infoPostulation.fecha_Inicio ? infoPostulation.fecha_Inicio : 'null'}</span>
                    <br></br>
                  </span>
                </div>
                <div className="contenedores-de-modales-empresa-perfil-container26">
                  <span className="contenedores-de-modales-empresa-perfil-text59">
                    <span>Hasta</span>
                    <br></br>
                  </span>
                  <span className="contenedores-de-modales-empresa-perfil-text62">
                  <span>{infoPostulation && infoPostulation.fecha_Final ? infoPostulation.fecha_Final : 'null'}</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default EmpresaPerfil

