import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet'

import './admin-2.css'
import { getEmployees } from '../controller/load-data-control'

const Admin2 = (props) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener los empleados:', error);
      }
    };

    fetchEmployees();
  }, []);
  return (
    <div className="admin2-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Admin-2 - MultiTask" />
      </Helmet>
      <div id="banner" className="admin2-container1">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="admin2-image"
        />
        <div id="barra" className="admin2-container2">
          <Link
            to="/inicio-de-sesin"
            id="botonCerrarSesion"
            className="admin2-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="admin2-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div id="contenedor_main" className="admin2-container3">
        <div id="contendor_main2" className="admin2-container4">
          <span id="correo_usuario" className="admin2-text">
          {`${localStorage.getItem('correo')}`}          </span>
          <span id="tipo_usuario" className="admin2-text1">
            Administrador
          </span>
          <div className="admin2-container5">
            <div className="admin2-container6">
              <Link to="/admin-1" className="admin2-navlink1">
                Modificar información
              </Link>
              <span className="admin2-text2">Usuario - Empleado</span>
              <Link to="/admin-3" className="admin2-navlink2">
                Crear usuario
              </Link>
              <Link to="/admin-4" className="admin2-navlink3">
                Informes
              </Link>
            </div>
            <div id="contenedor_principal" className="admin2-container7">
              <span className="admin2-text3">
                <span className="admin2-text4">Usuario - Empleado</span>
                <br></br>
              </span>
              <div className="admin2-container8">

              <table>
              <colgroup>
                <col span="1" style={{ width: '20%' }} />
                <col span="1" style={{ width: '20%' }} />
                <col span="1" style={{ width: '20%' }} />
                <col span="1" style={{ width: '40%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Documento</th>
                  <th>Dirección</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map(usuarios => (
                  <tr key={usuarios.id}>
                    <td>{usuarios.id}</td>
                    <td>{usuarios.nombres}</td>
                    <td>{usuarios.apellidos}</td>
                    <td>{usuarios.documento}</td>
                    <td>{usuarios.direccion}</td>
                  </tr>
                ))}
              </tbody>
            </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin2
