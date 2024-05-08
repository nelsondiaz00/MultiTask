import { Link } from 'react-router-dom'
import React, { useEffect, useState, useRef } from 'react';

import { Helmet } from 'react-helmet'

import '../css/empresa-sector.css'
import '../css/form-modal.css'
import { getServices } from '../../../controller/load-data-control'
import {StartModal, PayProcess} from '../modals/form-modal';


const Empresa2 = (props) => {
  const [selectedSector, setSelectedSector] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [infoSelected, setInfoSelected] = useState('');

  useEffect(() => {
    const storedSector = localStorage.getItem('selectedSector');
    setSelectedSector(storedSector);
    
    const storedBackgroundImage = localStorage.getItem('url');
    const container = document.querySelector('.empresa2-container03');
    container.style.backgroundImage = storedBackgroundImage;

  }, []);
  
  const [validationResult, setValidationResult] = useState(null);
  const originalDataRef = useRef(null);

  useEffect(() => {
    const fetchLoadData = async () => {
      try {
        const storedSector = localStorage.getItem('selectedSector');
        const data = await getServices(storedSector.toString());
        setValidationResult(data);
        originalDataRef.current = data;
        
        // Almacena los datos originales
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };

    fetchLoadData();
  }, []);

  const buscar = (terminoBusqueda) => {
    try {
      if (originalDataRef.current !== null) {
        const resultadosFiltrados = originalDataRef.current.filter(service => {
          return service.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase());
        });
        setValidationResult([...resultadosFiltrados]); // Hacer una copia de los resultados filtrados
      }
    } catch (error) {
      console.error('Error al realizar la búsqueda', error);
    }
  };

  const handleInputChange = (event) => {
    const valorInput = event.target.value;

    if (valorInput.trim() === '') {
      // Si el valor del input está vacío, restaura los datos originales
      setValidationResult(originalDataRef.current);
    } else {
      // Si hay un valor en el input, realiza la búsqueda normalmente
      buscar(valorInput);
    }
  };

  const openModal = (servicio) => {
    setInfoSelected(servicio)
    localStorage.setItem('titulo', servicio);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="empresa2-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Empresa-2 - MultiTask" />
      </Helmet>
      <div id="banner" className="empresa2-container01">
      <Link to="/empresa-inicio" className="home-navlink">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="empresa2-image"
        />
        </Link>
        <div id="barra" className="empresa2-container02">
          <Link
            to="/empresa-perfil"
            id="botonCerrarSesion"
            className="empresa2-navlink button"
          >Perfil
            <svg viewBox="0 0 1024 1024" className="empresa2-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
          <button
            id="botonNotificaciones"
            type="button"
            className="empresa2-button button"
          >Notificaciones
            <svg viewBox="0 0 1024 1024" className="empresa2-icon03">
              <path d="M618 418v-76h-212v76h118l-118 146v76h212v-76h-118zM768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="empresa2-container03">
        <Link to="/empresa-inicio" className="empresa2-navlink1">
          <svg viewBox="0 0 1024 1024" className="empresa2-icon06">
            <path d="M725.333 469.333h-323.669l97.835-97.835c16.683-16.683 16.683-43.648 0-60.331s-43.648-16.683-60.331 0l-200.832 200.832 200.832 200.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501c16.683-16.683 16.683-43.648 0-60.331l-97.835-97.835h323.669c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
        <span className="empresa2-text">Sector</span>
        <span className="empresa2-text01">{selectedSector}</span>
      </div>
      <div id="contenedor_main" className="empresa2-container04">
        <div className="empresa2-container05">
          <input
            type="text"
            id="input_BarraBusqueda"
            placeholder="¡Busca lo que necesitas!"
            className="empresa2-textinput input"
            onChange={handleInputChange}
          />
          <svg viewBox="0 0 1024 1024" className="empresa2-icon08">
            <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
          </svg>
        </div>
        <div className="empresa2-container06">
          <div className="empresa2-container07" id="services-container">
             {validationResult && validationResult.map((service, index) => (
              <div key={index} className="empresa2-container08">
                <span className="empresa2-text02">{service.titulo}</span>
                <span>{service.descripcion}</span>
                <svg viewBox="0 0 1024 1024" className="empresa2-icon10">
                  <path d="M470 384v-86h84v86h-84zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM470 726v-256h84v256h-84z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="empresa2-icon12" onClick={() => openModal(service)}>
                  
                  <path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                </svg>
              </div>
            ))}
            </div>
            {modalVisible && <StartModal onCloseModal={closeModal} infoService={infoSelected}/>}
        </div>

      </div>
    </div>
  )
}

export default Empresa2
