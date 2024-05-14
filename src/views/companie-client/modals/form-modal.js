import React, { useState, useEffect } from 'react';
import '../css/form-modal.css'
import priceEvaluation from '../../../controller/price-control';
import { getPreBill, payMethod, registerPostulation } from '../../../controller/billing-process';
import { getCompanie, getPayMethods } from '../../../controller/load-data-control';

export const StartModal = (props) => {
  console.log(props.infoService)
  const [showModal, setShowModal] = useState(true);
  const [showRequest, setShowRequest] = useState(true);
  const [showBilling, setShowBilling] = useState(false);
  const [showPayProcess, setShowPayProcess] = useState(false);
  const [showFinalCheck, setShowFinalCheck] = useState(false);
  const [dataBilling, setDataBilling] = useState(null);
  const [dataPay, setDataPay] = useState(false);

  const handlePayProcessClick = (value) => {
    setShowPayProcess(value);
    setShowBilling(!value);
  };
  
  const handleBillingClick = (value) => {
    const isValid = Object.values(value).every(val => val !== null && val !== "" && val !== undefined);
    console.log(value, " JASJKSAJSA?")
    if (isValid) {
      setShowRequest(false);
      setShowBilling(true);
      setDataBilling(value);
    }
  };
  
  const handleFinalCheck = (value) => {   
    const isValid = Object.values(value).every(val => val !== null && val !== "" && val !== undefined);
    console.log(value, " VALOR")
    if (isValid) {
      setShowFinalCheck(true);
      setShowPayProcess(false);
      // setDataPay(value);
      registerPostulation(dataBilling)
      payMethod(value)
    } 
    
  };

  const handleCloseModal = (value) => {
    setShowModal(value);
    props.onCloseModal();
  };

  useEffect(() => {
    // Al montar el componente, agregamos el estilo para desactivar el desplazamiento
    document.body.style.overflow = 'hidden';
    return () => {
      // Al desmontar el componente, restauramos el desplazamiento
      document.body.style.overflow = 'auto';
    };
  }, []);



  return showModal ? (
    <div className="empresa2-container">
      <div className="popup-overlay-form"> 
        <div className="popup-form"> 
            {showRequest && <RequestInfo onIconClick={handleCloseModal} onClick={handleBillingClick} infoService={props.infoService}/>}
            {showBilling && <Billing onIconClick={handleCloseModal} onClick={handlePayProcessClick} infoService={dataBilling}/>}
            {showPayProcess && <PayProcess onIconClick={handleCloseModal} onClick={handleFinalCheck} infoService={props.infoService}/>}
            {showFinalCheck && <PurchaseMade onIconClick={handleCloseModal} infoService={props.infoService} />}
        </div>
      </div>
    </div>
  ) : null;
};

export const RequestInfo = (props) => {
  const infoServiceSelected = props.infoService;
  const handleBillingClick = async () => {
    const info = {
      servicio_nombre : document.getElementById('input_servicio').value,
      descripcion_Empleo: document.getElementById('input_descrip').value,
      especificacion_Empleo: document.getElementById('input_espec').value,
      horario: document.getElementById('input_horario').value,
      fecha_Inicio: document.getElementById('input_fechainicio').value,
      fecha_Final: document.getElementById('input_fechafin').value,
      posibilidad_Viaje: isCheckedViaje,
      disponibilidad_oferta: isDisponibilidadPost,
      salario_Oferta: document.getElementById('input_salario').value,
      tipo_Contrato: isTiempoCompleto,
      cantidadRequerida: document.getElementById('input_cantidad').value,
      EMPRESAS_idEmpresa: localStorage.getItem('idEmpresa'),
      PROFESIONES_idProfesion: infoServiceSelected.idProfesion, 
      nivelEducacion: infoServiceSelected.nivelEducacion,
      servicio: infoServiceSelected.titulo
    };
    console.log(info, " INFORMACION COMPLETATIDADADA");
    props.onClick(info);
  };

  const handleCloseModal = () => {
    props.onIconClick(false);
  };

  const [isCheckedViaje, setIsCheckedViaje] = useState(false);
  const [isDisponibilidadPost, setIsDisponibilidadPost] = useState(false);
  const [isTiempoCompleto, setIsTiempoCompleto] = useState(false);

  const handleCheckedViaje = () => {
    setIsCheckedViaje(!isCheckedViaje);
  };

  const handleDisponibilityPost = () => {
    setIsDisponibilidadPost(!isDisponibilidadPost);
  };

  const handleTiempoCompletoPost = () => {
    setIsTiempoCompleto(!isTiempoCompleto);
  };

  return(
    <div
        id="contenedor_post1"
        className="contenedores-de-modales-empresa-container08"
      >
        <div
          id="contenedor_titulo"
          className="contenedores-de-modales-empresa-container09"
        >
          <span className="contenedores-de-modales-empresa-text07">
            <span>Postulación Sector Metales</span>
            <br></br>
          </span>
          <svg
            viewBox="0 0 1024 1024"
            className="contenedores-de-modales-empresa-icon04"
            onClick={handleCloseModal}
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
        <div
          id="cont_main"
          className="contenedores-de-modales-empresa-container10"
        >
          <div
            id="cont_1"
            className="contenedores-de-modales-empresa-container11"
          >
            <div className="contenedores-de-modales-empresa-container12">
              <span className="contenedores-de-modales-empresa-text10">
                <span>Servicio</span>
                <br></br>
              </span>
              <input
                type="text"
                id="input_servicio"
                className="contenedores-de-modales-empresa-textinput input"
                defaultValue = {infoServiceSelected.titulo}
              />
            </div>
            <div className="contenedores-de-modales-empresa-container13">
              <span className="contenedores-de-modales-empresa-text13">
                <span>Salario</span>
                <br></br>
              </span>
              <input
                type="text"
                id="input_salario"
                className="contenedores-de-modales-empresa-textinput01 input"
              />
            </div>
            <div className="contenedores-de-modales-empresa-container14">
              <span className="contenedores-de-modales-empresa-text16">
                <span>Horario</span>
                <br></br>
              </span>
              <input
                type="text"
                id="input_horario"
                className="contenedores-de-modales-empresa-textinput02 input"
              />
            </div>
            <div className="contenedores-de-modales-empresa-container15">
              <span className="contenedores-de-modales-empresa-text19">
                <span>Descripción</span>
                <br></br>
              </span>
              <textarea
                type="text"
                id="input_descrip"
                className="contenedores-de-modales-empresa-textinput03 input"
                defaultValue={infoServiceSelected.descripcion}
              />
            </div>
            <div className="contenedores-de-modales-empresa-container16">
              <span className="contenedores-de-modales-empresa-text22">
                <span>Específicaciones</span>
                <br></br>
              </span>
              <textarea
                type="text"
                id="input_espec"
                className="contenedores-de-modales-empresa-textinput04 input"
              />
            </div>
          </div>
          <div
            id="cont_2"
            className="contenedores-de-modales-empresa-container17"
          >
            <div className="contenedores-de-modales-empresa-container18">
                <span className="contenedores-de-modales-empresa-text25">
                  <span>Posibilidad de viaje</span>
                  <br></br>
                </span>
              <div className="contenedores-opcion-multiple">
                <label class="switch">
                <input
                  type="checkbox"
                  onChange={handleCheckedViaje}
                />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div className="contenedores-de-modales-empresa-container19">
              <span className="contenedores-de-modales-empresa-text28">
                <span>Disponibilidad de la postulación</span>
                <br></br>
              </span>
              <div className="contenedores-opcion-multiple">
                <label class="switch">
                  <input
                    type="checkbox"
                    onChange={handleDisponibilityPost}
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div className="contenedores-de-modales-empresa-container19">
              <span className="contenedores-de-modales-empresa-text28">
                <span>Contrato tiempo completo</span>
                <br></br>
              </span>
              <div className="contenedores-opcion-multiple">
                <label class="switch">
                  <input
                    type="checkbox"
                    onChange={handleTiempoCompletoPost}
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div className="contenedores-de-modales-empresa-container20">
              <span className="contenedores-de-modales-empresa-text31">
                <span>Desde</span>
                <br></br>
              </span>
              <input
                type="date"
                id="input_fechainicio"
                className="contenedores-de-modales-empresa-textinput05 input"
              />
            </div>
            <div className="contenedores-de-modales-empresa-container21">
              <span className="contenedores-de-modales-empresa-text34">
                <span>Hasta</span>
                <br></br>
              </span>
              <input
                type="date"
                id="input_fechafin"
                className="contenedores-de-modales-empresa-textinput06 input"
              />
            </div>
            <button
              id="boton_facturacion"
              type="button"
              className="contenedores-de-modales-empresa-button button"
              onClick={handleBillingClick}
            >
              Facturación
            </button>
            <div className="contenedores-de-modales-empresa-container22">
              <span className="contenedores-de-modales-empresa-text37">
                <span>Cantidad</span>
                <br></br>
              </span>
              <input
                type="number"
                id="input_cantidad"
                className="contenedores-de-modales-empresa-textinput07 input"
              />
            </div>
          </div>
        </div>
      </div>
)};

export const Billing = (props) => {

  const [infoBill, setInfoBill] = useState(null);

  const handlePayProcessClick = () => {
    props.onClick(true)
  };

  const handleCloseModal = () => {
    props.onIconClick(false);
  };

  useEffect(() => {
    const fetchLoadData = async () => {
      try {
        const infoBill = await getPreBill(props.infoService);
        setInfoBill(infoBill);

      } catch (error) {
        console.error('Error al cargar datos', error);
      }
    };
    fetchLoadData();
  }, []);

  if (!infoBill) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return(
      <div
        id="contenedor_post1"
        className="contenedores-de-modales-empresa-container08"
      >
        <div
          id="contenedor_titulo"
          className="contenedores-de-modales-empresa-container24"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="contenedores-de-modales-empresa-icon06"
            onClick={handleCloseModal}
          >
            <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>

          </svg>
          <span className="contenedores-de-modales-empresa-text40">
            <span>Facturación</span>
            <br></br>
          </span>
          <svg
            viewBox="0 0 1024 1024"
            className="contenedores-de-modales-empresa-icon08"
            onClick={handleCloseModal}
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
        <div
          id="cont_main"
          className="contenedores-de-modales-empresa-container25"
        >
          <div
            id="cont_1"
            className="contenedores-de-modales-empresa-container26"
          >
            <img
              alt="image"
              src="./1-400w.jpg"
              className="contenedores-de-modales-empresa-image"
            />
          </div>
          <div
            id="cont_2"
            className="contenedores-de-modales-empresa-container27"
          >
            <div className="contenedores-de-modales-empresa-container28">
              <span
                id="texto_factnum"
                className="contenedores-de-modales-empresa-text43"
              >
                <span>{"Factura #" + infoBill.numeroFactura}</span>
                <br></br>
              </span>
            </div>
            <div className="contenedores-de-modales-empresa-container29">
              <span
                id="texto_posttrabajo"
                className="contenedores-de-modales-empresa-text46"
              >
                <span>{props.infoService.servicio + " ( " + infoBill.cantidad + " )"}</span>
                <br></br>
              </span>
              <span
                id="texto_posttrabajo"
                className="contenedores-de-modales-empresa-text49"
              >
                <span>{infoBill.individual.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</span>
                <br></br>
              </span>
            </div>
            <div className="prices">
              <div className='price-container subtotal-container'>
                <span
                  id="texto_posttrabajo"
                >
                  <span>Impuesto ( IVA )  </span>
                  <br></br>
                </span>
                <span>{infoBill.subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</span>
              </div>
              <div className='price-container'>
                <span
                  id="texto_posttrabajo"
                >
                  <span>Total</span>
                  <br></br>
                </span>
                <span
                  id="texto_posttrabajo"
                >
                  <span>{infoBill.total.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</span>
                  <br></br>
                </span>
              </div>
            </div>
            <button
              id="boton_metdepago"
              type="button"
              className="contenedores-de-modales-empresa-button1 button"
              onClick={handlePayProcessClick}
            >
              Método de pago
            </button>
          </div>
        </div>
      </div>
    )
};

export const PayProcess = (props) => {
  const [cardType, setCardType] = useState(null);
  
  const [listaMetodosPago, setListaMetodosPago] = useState(null);

  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);

  const handleMetodoSeleccionado = (metodo) => {
    setMetodoSeleccionado(metodo);
    console.log(metodoSeleccionado)
  };
  const handleFinishClick = () => {
    if(metodoSeleccionado === null){
      const info = {
        numero_tarjeta: document.getElementById('input_numtarjeta').value,
        nombre_tarjeta: document.getElementById('input_nombtarjeta').value,
        fecha_vencimiento: document.getElementById('input_fechavenc').value,
        codigo_seguridad: document.getElementById('input_codigoseg').value,
        tipo : cardType,
        USUARIOS_idUsuario : localStorage.getItem('idUser')
      };
      props.onClick(info)
    }else{
      props.onClick(metodoSeleccionado)
    }
  };

  const handleCardType = (input) => {
    if(input){
      setCardType('Debito');

    }
    else{
      setCardType('Credito');

    }
    console.log(cardType);
  };

  const handlePurchaseMadeClick = () => {
    props.onClick(true)
  };

  const handleCloseModal = () => {
    props.onIconClick(false);
  };
  function formatoNumeroTarjeta(evento) {
    const input = evento.target;
    const valor = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres que no sean números
    const valorFormateado = valor.replace(/(\d{4})(?=\d)/g, '$1 '); // Insertar un espacio cada 4 caracteres
  
    input.value = valorFormateado;
  }

  
  function validarNombre(evento) {
    const input = evento.target;
    let valor = input.value.replace(/[^a-zA-Z\s]/g, ''); // Eliminar todos los caracteres que no sean letras o espacios
    valor = valor.toUpperCase(); // Convertir todas las letras a mayúsculas
    input.value = valor;
  }

  function validarCodigoSeguridad(evento) {
    const input = evento.target;
    const valor = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres que no sean números
    input.value = valor;
  }
  
  useEffect(() => {
    const fetchPayMethods = async () => {
      try {
        const methods = await getPayMethods();
        setListaMetodosPago(methods)
      } catch (error) {
        console.error('Error al obtener métodos de pago:', error);
      }
    };

    fetchPayMethods();
  }, []);
  
  if (!listaMetodosPago) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }
  return(
    <div
    id="contenedor_post1"
    className="contenedores-de-modales-empresa-container08"
    >
      <div
        id="contenedor_titulo"
        className="contenedores-de-modales-empresa-container32"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="contenedores-de-modales-empresa-icon10"
          onClick={() => {
            props.onClosePayProcess();
          }}
        >
          <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
        </svg>
        <span className="contenedores-de-modales-empresa-text58">
          <span>Método de pago</span>
          <br></br>
        </span>
        <svg
          viewBox="0 0 1024 1024"
          className="contenedores-de-modales-empresa-icon12"
          onClick={handleCloseModal}
        >
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
      </div>
      <div
        id="cont_main"
        className="contenedores-de-modales-empresa-container33"
      >
        <div
          id="cont_1"
          className="contenedores-de-modales-empresa-container34"
        >
          {listaMetodosPago.map((metodo, index) => (
            <div key={index} className="contenedores-de-modales-empresa-container35">
              <input type="radio" 
                name="radio_debito" 
                onChange={() => handleMetodoSeleccionado(metodo)}
              />
              <span className="contenedores-de-modales-empresa-text61">
                <span>{`Tarjeta ${metodo.tipo} terminada en ****${metodo.numero_tarjeta.slice(-4)}`}</span>
                <br></br>
              </span>
            </div>
          ))}
        </div>
        <div
          id="cont_2"
          className="contenedores-de-modales-empresa-container38"
        >
          <div className="contenedores-de-modales-empresa-container39">
            <span className="contenedores-de-modales-empresa-text70">
              <span>Agregar método de pago</span>
              <br></br>
            </span>
          </div>
          <div className="contenedores-de-modales-empresa-container40">
            <input type="radio" name="radio" onChange={() => handleCardType(false)}/>
            <span className="contenedores-de-modales-empresa-text73">
              <span>Débito</span>
              <br></br>
            </span>
            <input type="radio" name="radio"  onChange={() => handleCardType(true)}/>
            <span className="contenedores-de-modales-empresa-text76">
              <span>Crédito</span>
              <br></br>
            </span>
          </div>

          <div className="contenedores-de-modales-empresa-container41">
            <span className="contenedores-de-modales-empresa-text79">
              <span>Número de la tarjeta</span>
              <br></br>
            </span>
            <input
              type="text"
              id="input_numtarjeta"
              className="contenedores-de-modales-empresa-textinput08 input"
              maxLength="19" 
              onInput={formatoNumeroTarjeta}
            />
          </div>
          <div className="contenedores-de-modales-empresa-container42">
            <span className="contenedores-de-modales-empresa-text82">
              <span>Nombre en la tarjeta</span>
              <br></br>
            </span>
            <input
              type="text"
              id="input_nombtarjeta"
              className="contenedores-de-modales-empresa-textinput09 input"
              onInput={validarNombre}
            />
          </div>
          <div className="contenedores-de-modales-empresa-container43">
            <span className="contenedores-de-modales-empresa-text85">
              <span>Fecha de vencimiento</span>
              <br></br>
            </span>
            <input
              type="month"
              id="input_fechavenc"
              className="contenedores-de-modales-empresa-textinput10 input"
            />
          </div>
          <div className="contenedores-de-modales-empresa-container44">
            <span className="contenedores-de-modales-empresa-text88">
              <span>Código de seguridad</span>
              <br></br>
            </span>
            <input
              type="tel"
              id="input_codigoseg"
              pattern="[0-9]{3}"
              maxlength="3"
              className="contenedores-de-modales-empresa-textinput11 input"
              onInput={validarCodigoSeguridad}
            />
          </div>
          <button
            id="boton_pagar"
            type="button"
            className="contenedores-de-modales-empresa-button2 button"
            onClick={handleFinishClick}        
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
)};

export const PurchaseMade = (props) => {
  const handleCloseModal = () => {
    props.onIconClick(false);
  };

  return(
        <div
            id="contenedor_editaremp"
            className="contenedores-de-modales-empresa-container45"
          >
            <span className="contenedores-de-modales-empresa-text91">
              Postulación realizada con éxito
            </span>
            <svg
              viewBox="0 0 1024 1024"
              className="contenedores-de-modales-empresa-icon14"
            >
              <path d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="contenedores-de-modales-empresa-icon16"
              onClick={handleCloseModal}
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
      </div>
)};