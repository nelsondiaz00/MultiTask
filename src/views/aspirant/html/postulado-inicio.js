import React, { useState, useEffect , useRef} from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import '../css/postulado-inicio.css'
import { getServices } from '../../../controller/load-data-control';

const Postulado = (props) => {

  // Estado para almacenar los resultados de la búsqueda
  const [validationResult, setValidationResult] = useState([]);
  const originalDataRef = useRef(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchLoadData = async () => {
      try {
        const data = await getServices('all');
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
        setSearching(true);
      }
    } catch (error) {
      console.error('Error al realizar la búsqueda', error);
    }
  };

  if (!validationResult) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  const handleInputChange = (event) => {
    const valorInput = event.target.value;

    if (valorInput.trim() === '') {
      // Si el valor del input está vacío, restaura los datos originales
      setValidationResult(originalDataRef.current);
      setSearching(false); // Indicar que no se está realizando una búsqueda

    } else {
      // Si hay un valor en el input, realiza la búsqueda normalmente
      buscar(valorInput);
    }
  };



  return (
    <div className="postulado1-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Postulado-1 - MultiTask" />
      </Helmet>
      <div id="banner" className="postulado1-container1">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="postulado1-image"
        />
        <div id="barra" className="postulado1-container2">
          <Link
            to="/"
            id="botonCerrarSesion"
            className="postulado1-navlink button"
          >Perfil
            <svg viewBox="0 0 1024 1024" className="postulado1-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
          <button
            id="botonNotificaciones"
            type="button"
            className="postulado1-button button"
          >Notificaciones
            <svg viewBox="0 0 1024 1024" className="postulado1-icon3">
              <path d="M618 418v-76h-212v76h118l-118 146v76h212v-76h-118zM768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="contenedor_inicio" className="postulado1-container3">
        <div className="postulado1-container4">
          <h1 className="postulado1-text">¿En qué quieres trabajar hoy?</h1>
        </div>
        <div className="postulado1-container5">
          <div>
            <input
              type="text"
              placeholder="Encuentra tu siguiente oportunidad laboral."
              className="postulado1-textinput input"
              onChange={handleInputChange}
            />
            <svg viewBox="0 0 1024 1024" className="postulado1-icon5">
              <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
            </svg>
          </div>
          <div id="resultados" className="resultados-container">
          {searching && (
            validationResult.map(resultado => (
              <div key={resultado.idProfesion}>
                {console.log(resultado.idProfesion)}
                <Link
                  to={{ pathname: "/postulado-resultados", state: { resultadoProps: resultado } }}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none' // para quitar subrayado
                  }}
                >
                    {resultado.titulo}
                </Link>
              </div>
            ))
            
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Postulado
