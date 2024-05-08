import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'

import '../css/empresa-home.css'
import { getCompanie } from '../../../controller/load-data-control';

const Empresa1 = (props) => {

  const handleClick = (className) => {
    let url;
    let sector;
    switch (className) {
      case 'empresa1-text01':
        sector = 'Metales';
        url = getComputedStyle(document.querySelector('.empresa1-container08')).getPropertyValue('background-image')
        break;
      case 'empresa1-text03':
        sector = 'Maderas';
        url = getComputedStyle(document.querySelector('.empresa1-container09')).getPropertyValue('background-image')
        break;
      case 'empresa1-text05':
        sector = 'Materiales';
        url = getComputedStyle(document.querySelector('.empresa1-container12')).getPropertyValue('background-image')
        break;
      case 'empresa1-text09':
        sector = 'Transporte';
        url = getComputedStyle(document.querySelector('.empresa1-container13')).getPropertyValue('background-image')
        break;
      case 'empresa1-text13':
        sector = 'Ferretería y eléctrica';
        url = getComputedStyle(document.querySelector('.empresa1-container14')).getPropertyValue('background-image')
        break;
      case 'empresa1-text15':
        sector = 'Otros';
        url = getComputedStyle(document.querySelector('.empresa1-container16')).getPropertyValue('background-image')
        break;
      default:
        alert('Elección incorrecta');
    }
    localStorage.setItem('selectedSector', sector);
    localStorage.setItem('url', url);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompanie();
      localStorage.setItem('idEmpresa', data.idEmpresa);
      console.log(data);
    };
    fetchData();
  }, []);

  
  return (
    <div className="empresa1-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Empresa-1 - MultiTask" />
      </Helmet>
      <div id="banner" className="empresa1-container01">
      <Link to="/" className="home-navlink">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="empresa1-image"
        />
        </Link>
        <div id="barra" className="empresa1-container02">
          <Link
            to="/empresa-perfil"
            id="botonPerfil"
            className="empresa1-navlink button"
          > Perfil
            <svg viewBox="0 0 1024 1024" className="empresa1-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
          <button
            id="botonNotificaciones"
            type="button"
            className="empresa1-button button"
          >Notificaciones
            <svg viewBox="0 0 1024 1024" className="empresa1-icon3">
            <path d="M618 418v-76h-212v76h118l-118 146v76h212v-76h-118zM768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="contenedor_main" className="empresa1-container03">
        <div className="empresa1-container04"></div>
        <div id="contendor_main" className="empresa1-container05">
          <div className="empresa1-container06">
            <div id="contenedor_1" className="empresa1-container07">
              <Link to="/empresa-sector" className="empresa1-navlink1">
                <div className="empresa1-container08" onClick={() => handleClick('empresa1-text01')}>
                  <span className="empresa1-text">Sector</span>
                  <span className="empresa1-text01">Metales</span>
                </div>
              </Link>
              <Link to="/empresa-sector" className="empresa1-navlink1">
                <div className="empresa1-container09" onClick={() => handleClick('empresa1-text03')}>
                  <span className="empresa1-text02">Sector</span>
                  <span className="empresa1-text03">Maderas</span>
                </div>
              </Link>
            </div>
            <div id="contenedor_2" className="empresa1-container10">
              <div className="empresa1-container11">
                <Link to="/empresa-sector" className="empresa1-navlink1">
                  <div className="empresa1-container12" onClick={() => handleClick('empresa1-text05')}>
                    <span className="empresa1-text04">Sector</span>
                    <span className="empresa1-text05">
                      <span>Materiales</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
                <Link to="/empresa-sector" className="empresa1-navlink1">
                <div className="empresa1-container13" onClick={() => handleClick('empresa1-text09')}>
                  <span className="empresa1-text08">Sector</span>
                  <span className="empresa1-text09">
                    <span>Transporte</span>
                    <br></br>
                  </span>
                </div>
                </Link>

              </div>
              <Link to="/empresa-sector" className="empresa1-navlink1">
              <div className="empresa1-container14" onClick={() => handleClick('empresa1-text13')}>
                <span className="empresa1-text12">Sector</span>
                <span className="empresa1-text13">Ferretería y eléctrica</span>
              </div>
              </Link>
            </div>
            <div id="contenedor_3" className="empresa1-container15">
            <Link to="/empresa-sector" className="empresa1-navlink1">
              <div className="empresa1-container16" onClick={() => handleClick('empresa1-text15')}>
                <span className="empresa1-text14">Sector</span>
                <span className="empresa1-text15">
                  <span>Otros</span>
                  <br></br>
                </span>
              </div>
            </Link>
            </div>
          </div>
          <div id="contenedor_4" className="empresa1-container17">
            <svg viewBox="0 0 1024 1024" className="empresa1-icon06">
              <path d="M384 597.333c58.923 0 112.256-23.893 150.869-62.507 38.571-38.571 62.464-91.904 62.464-150.827s-23.893-112.256-62.464-150.827c-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507z"></path>
              <path d="M384 896c150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667 0 42.667 96 85.333 256 85.333z"></path>
              <path d="M896 512h-85.333v-85.333c0-23.595-19.072-42.667-42.667-42.667s-42.667 19.072-42.667 42.667v85.333h-85.333c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h85.333v85.333c0 23.595 19.072 42.667 42.667 42.667s42.667-19.072 42.667-42.667v-85.333h85.333c23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667z"></path>
            </svg>
            <div className="empresa1-container18">
              <h1 className="empresa1-text18">Postulación especial</h1>
              <span className="empresa1-text19">
                ¿No encuentras lo que buscas? Realiza tu postulación
                personalizada.
              </span>
            </div>
            <button
              id="boton_postular"
              type="button"
              className="empresa1-button1 button"
            >
              Postular
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Empresa1
