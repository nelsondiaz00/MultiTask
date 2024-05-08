import React, { useState, useEffect , useRef} from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import { Helmet } from 'react-helmet'

import '../css/postulado-postulacion.css'
import { getConfirm, getInfoAspirant } from '../../../controller/load-data-control';
import { postPostulation } from '../../../controller/create-control';

const Postulado3 = (props) => {
  const [infoSelected, setInfoSelected] = useState(null);
  const [infoAspirant, setInfoAspirant] = useState(null);
  const [confirmPostulation, setConfirmPostulation] = useState(null);

  useEffect(() => {
    if (props.location.state && props.location.state.resultadoProps) {
      setInfoSelected(props.location.state.resultadoProps);
    }
  }, [props.location.state]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getInfoAspirant(localStorage.getItem("correo"));
      setInfoAspirant(data);
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    if (infoAspirant && infoSelected) {
      const fetchData = async () => {
        const confirm = await getConfirm(infoAspirant.idPostulado, infoSelected.idOferta_Trabajo);
        setConfirmPostulation(confirm);
      };
      fetchData();
    }
  }, [infoAspirant, infoSelected]);
  
  const postPost = async () => {
    try {
      await postPostulation(infoSelected, infoAspirant);
      alert('¡Inscrito!');
    } catch (error) {
      console.error('Error al realizar postulacion', error);
    }
  };
  
  if (!infoSelected || !infoAspirant || !confirmPostulation) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  console.log(confirmPostulation, " ACTCONFIRM????")

  return (
    <div className="postulado3-container">
      <Helmet>
        <title>Postulado-Postulación - MultiTask</title>
        <meta property="og:title" content="Postulado-3 - MultiTask" />
      </Helmet>
      <div id="banner" className="postulado3-container01">
        <img
          alt="image"
          src="/external/multitask%20-%20logo.svg"
          className="postulado3-image"
        />
        <div id="barra" className="postulado3-container02">
          <Link
            to="/"
            id="botonCerrarSesion"
            className="postulado3-navlink button"
          >
            <svg viewBox="0 0 1024 1024" className="postulado3-icon">
              <path d="M725.333 384c0-58.923-23.893-112.256-62.464-150.827-38.613-38.613-91.947-62.507-150.869-62.507s-112.256 23.893-150.869 62.507c-38.571 38.571-62.464 91.904-62.464 150.827s23.893 112.256 62.464 150.827c38.613 38.613 91.947 62.507 150.869 62.507s112.256-23.893 150.869-62.507c38.571-38.571 62.464-91.904 62.464-150.827z"></path>
              <path d="M256 810.667c0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333 0-85.333-100.437-170.667-256-170.667-160 0-256 85.333-256 170.667z"></path>
            </svg>
          </Link>
          <button
            id="botonNotificaciones"
            type="button"
            className="postulado3-button button"
          >
            <svg viewBox="0 0 1024 1024" className="postulado3-icon03">
              <path d="M618 418v-76h-212v76h118l-118 146v76h212v-76h-118zM768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="contenedor_main" className="postulado3-container03">
        <div className="postulado3-container04"></div>
        <div className="postulado3-container05">
          <div className="postulado3-container06">
            <div className="postulado3-container07">
              <h1 id="texto_titulotrabajo" className="postulado3-text">
                {infoSelected.servicio_nombre}
              </h1>
              <div className="postulado3-container08">
                <svg viewBox="0 0 1024 1024" className="postulado3-icon05">
                  <path d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"></path>
                </svg>
                <label className="postulado3-text01">{infoSelected.salario_Oferta.toLocaleString('es-CO')} COP</label>
              </div>
              <span className="postulado3-text02">
                {infoSelected.descripcion_Empleo}
              </span>
              <span className="postulado3-text03">
                {infoSelected.especificacion_Empleo}
              </span>
              <svg viewBox="0 0 822.272 1024" className="postulado3-icon07">
                <path d="M786.286 91.429c36.571 36.571 0 128-54.857 182.857l-92 92 91.429 397.714c1.714 6.857-1.143 14.286-6.857 18.857l-73.143 54.857c-2.857 2.286-6.857 3.429-10.857 3.429-1.143 0-2.286 0-4-0.571-5.143-1.143-9.714-4-12-9.143l-159.429-290.286-148 148 30.286 110.857c1.714 6.286 0 12.571-4.571 17.714l-54.857 54.857c-3.429 3.429-8.571 5.143-13.143 5.143h-1.143c-5.714-0.571-10.286-2.857-13.714-7.429l-108-144-144-108c-4.571-2.857-6.857-8-7.429-13.143s1.714-10.286 5.143-14.286l54.857-55.429c3.429-3.429 8.571-5.143 13.143-5.143 1.714 0 3.429 0 4.571 0.571l110.857 30.286 148-148-290.286-159.429c-5.143-2.857-8.571-8-9.714-13.714-0.571-5.143 1.143-11.429 5.143-15.429l73.143-73.143c4.571-4 11.429-6.286 17.143-4.571l380 90.857 91.429-91.429c54.857-54.857 146.286-91.429 182.857-54.857z"></path>
              </svg>
              <div className="postulado3-container09">
                <label className="postulado3-text04">Zona horaria:</label>
                <label className="postulado3-text05">
                  Zona horaria asignada
                </label>
              </div>
              <div className="postulado3-container10">
                <svg viewBox="0 0 1024 1024" className="postulado3-icon09">
                  <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
                </svg>
                <label className="postulado3-text06">
                  {infoSelected.tipo_Contrato === 1 ? "Tiempo completo" : "Horario flexible"}
                </label>
              </div>
            </div>
          </div>
          <div className="postulado3-container11">
            <div className="postulado3-container12">
              <h1 className="postulado3-text07">¿Te llama la atención?</h1>
              <label className="postulado3-text08">Solo oprime el botón.</label>
              <button
                id="boton_inscribirme"
                type="button"
                className={`postulado3-button1 button ${confirmPostulation.postulaciones >= 1 ? 'postulado3-button1-inscrito button' : ''}`}
                onClick={confirmPostulation.postulaciones >= 1 ? null : postPost}
                >
                {confirmPostulation.postulaciones >= 1 ? "Inscrito" : "Inscribirme"}

              </button>
              <label className="postulado3-text09">
                ¡Estás muy cerca de tu trabajo ideal!
              </label>
              <label className="postulado3-text10">
                Barra de progreso aqui
              </label>
              <div className="progress-bar">
              <div className="progress progress1" style={confirmPostulation.fasePostulacion >= 1 ? { backgroundColor: '#cb2bc5' } : null}></div>
              <div className="progress progress2" style={confirmPostulation.fasePostulacion >= 2 ? { backgroundColor: '#ab18a6' } : null}></div>
              <div className="progress progress3" style={confirmPostulation.fasePostulacion >= 3 ? { backgroundColor: '#771573' } : null}></div>

              </div>
              <label className="postulado3-text11">
                <span>
                  Nosotros nos encargamos de todo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Déjalo en nuestras manos.</span>
              </label>
            </div>
          </div>
        </div>
        <Link 
          to={{ pathname: "/postulado-resultados", state: { resultadoProps: infoSelected } }}
          className="postulado3-navlink1">
          <svg viewBox="0 0 1024 1024" className="postulado3-icon11">
            <path d="M725.333 469.333h-323.669l97.835-97.835c16.683-16.683 16.683-43.648 0-60.331s-43.648-16.683-60.331 0l-200.832 200.832 200.832 200.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501c16.683-16.683 16.683-43.648 0-60.331l-97.835-97.835h323.669c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Postulado3
