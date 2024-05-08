import React, { useState, useEffect , useRef} from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet'

import Component2 from './component2.js'
import '../css/postulado-resultados.css'
import { getPostulationByProfession } from '../../../controller/load-data-control.js';

const PostuladoResultados = (props) => {
  const [infoSelected, setInfoSelected] = useState(null);
  const [postulations, setPostulations] = useState(null);
  // console.log(props.location.state.resultadoProps, "props mm");

  useEffect(() => {
    if (props.location.state && props.location.state.resultadoProps) {
      setInfoSelected(props.location.state.resultadoProps);
    }
  }, [props.location.state]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (infoSelected && infoSelected.idProfesion) {
          // console.log(infoSelected.idProfesion, " ididi");
          const infoRecollected = await getPostulationByProfession(infoSelected.idProfesion);
          console.log(infoRecollected, " inonfofofo")
          setPostulations(infoRecollected);
        }
      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };
    fetchData();
  }, [infoSelected]);

  if (!infoSelected) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  
  console.log(postulations, " popop")

  return (
    <div className="postulado2-container">
      <Helmet>
        <title>Postulado-2 - MultiTask</title>
        <meta property="og:title" content="Postulado-2 - MultiTask" />
      </Helmet>
      <div id="banner" className="postulado2-container1">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="postulado2-image"
        />
        <div id="barra" className="postulado2-container2">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="postulado2-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="postulado2-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
          <button
            id="botonNotificaciones"
            type="button"
            className="postulado2-button button"
          >
            <svg viewBox="0 0 1024 1024" className="postulado2-icon3">
              <path d="M618 418v-76h-212v76h118l-118 146v76h212v-76h-118zM768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="contenedor_main" className="postulado2-container3">
        <div className="postulado2-container4"></div>
        <span className="postulado2-text">
          <span>
            {postulations ? Object.keys(postulations).length : 0} resultados encontrados para
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="postulado2-text2">{infoSelected.titulo}</span>
          <span>
            {' '}
            en
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="postulado2-text4">Bucaramanga</span>
        </span>
        <div className="empresa2-container06">
        <div className="empresa2-container07" id="services-container">
  {postulations && postulations.map((item, index) => (
    <Link
      key={index}
      to={{
        pathname: "/postulado-postulacion",
        state: { resultadoProps: item }
      }}
      onClick={(event) => {
        // Puedes realizar aquí alguna acción adicional si es necesario
        console.log(item, "wtf bro =????");
      }}
    >
      <Component2 postulation={item} />
    </Link>
  ))}
</div>
        </div>
        <Link to="/postulado-inicio" className="postulado2-navlink1">
          <svg viewBox="0 0 1024 1024" className="postulado2-icon5">
            <path d="M725.333 469.333h-323.669l97.835-97.835c16.683-16.683 16.683-43.648 0-60.331s-43.648-16.683-60.331 0l-200.832 200.832 200.832 200.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501c16.683-16.683 16.683-43.648 0-60.331l-97.835-97.835h323.669c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default PostuladoResultados