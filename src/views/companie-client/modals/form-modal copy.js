import React, { useState, useEffect } from 'react';
import '../css/form-modal.css'
import priceEvaluation from '../../../controller/price-control';

export const StartModal = (props) => {
  // console.log(props.infoService)
  const [showBilling, setShowBilling] = useState(false);
  const titulo = localStorage.getItem('titulo');
  const handleBillingClick = () => {
    setShowBilling(true);
  };

  const handleCloseBilling = () => {
    setShowBilling(false);
  };

  const handleClosePopup = () => {
    setShowBilling(false);
    // Llamar a la función de cierre del modal principal
    props.onCloseModal();
  };
  return(
  <div className="empresa2-container">
    <div className="popup-overlay-form"> 
    <div className="popup-form"> 
    {!showBilling ? (
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
            onClick={props.onCloseModal}
            
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
                value = {localStorage.getItem('titulo')}
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
                <input type="checkbox"/>
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
                  <input type="checkbox"/>
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
      ) : (
            <Billing onClosePayProcess={handleCloseBilling} onClosePopup={handleClosePopup}  />
          )}
    </div>
    </div>
    </div>
)};


export const Billing = (props) => {
  const [showPayProcess, setShowPayProcess] = useState(false);
  const handleFacturacionClick = () => {
    setShowPayProcess(true);
  };

  const handleClosePayProcess = () => {
    setShowPayProcess(false);
  };
  return(
      <div>
      {!showPayProcess ? (
      <div
        id="contenedor_post2"
        className="contenedores-de-modales-empresa-container23"
      >
        <div
          id="contenedor_titulo"
          className="contenedores-de-modales-empresa-container24"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="contenedores-de-modales-empresa-icon06"
            onClick={() => {
              props.onClosePayProcess();
            }}
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
            onClick={() => {
              props.onClosePayProcess();
              props.onClosePopup(); 
            }}
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
                <span>Factura #0000</span>
                <br></br>
              </span>
            </div>
            <div className="contenedores-de-modales-empresa-container29">
              <span
                id="texto_posttrabajo"
                className="contenedores-de-modales-empresa-text46"
              >
                <span>Postulación: {document.getElementById('input_servicio').value}</span>
                <br></br>
              </span>
              <span
                id="texto_posttrabajo"
                className="contenedores-de-modales-empresa-text49"
              >
                <span>{priceEvaluation()}</span>
                <br></br>
              </span>
            </div>
            <div className="contenedores-de-modales-empresa-container30">
              <span
                id="texto_posttrabajo"
                className="contenedores-de-modales-empresa-text52"
              >
                <span>Total</span>
                <br></br>
              </span>
              <span
                id="texto_posttrabajo"
                className="contenedores-de-modales-empresa-text55"
              >
                <span>50.000 COP</span>
                <br></br>
              </span>
            </div>
            <button
              id="boton_metdepago"
              type="button"
              className="contenedores-de-modales-empresa-button1 button"
              onClick={handleFacturacionClick}
            >
              Método de pago
            </button>
          </div>
        </div>
      </div>
      ) : (
        <PayProcess onClosePayProcess={handleClosePayProcess} onClosePopup={props.onClosePopup}/>
      )}
      </div>
    )
};


export const PayProcess = (props) => {
  const [paymentMade, setPaymentMade] = useState(false); 

  const handleCloseModal = () => {
    props.onClosePopup();
  };
  const handlePay = () => {
    setPaymentMade(true); // Actualiza el estado paymentMade a true cuando se hace clic en pagar
  };
  
  
  return(
    <div>
      {!paymentMade && (
    
    <div
    id="contenedor_post3"
    className="contenedores-de-modales-empresa-container31"
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
          <div className="contenedores-de-modales-empresa-container35">
            <input type="radio" name="radio_debito" />
            <span className="contenedores-de-modales-empresa-text61">
              <span>Tarjeta débito terminada en ****9808</span>
              <br></br>
            </span>
          </div>
          <div className="contenedores-de-modales-empresa-container36">
            <input type="radio" name="radio_debito" />
            <span className="contenedores-de-modales-empresa-text64">
              <span>Tarjeta crédito terminada en ****2543</span>
              <br></br>
            </span>
          </div>
          <div className="contenedores-de-modales-empresa-container37">
            <input type="radio" name="radio_debito" />
            <span className="contenedores-de-modales-empresa-text67">
              <span>Tarjeta débito terminada en ****1232</span>
              <br></br>
            </span>
          </div>
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
            <input type="radio" name="radio" />
            <span className="contenedores-de-modales-empresa-text73">
              <span>Débito</span>
              <br></br>
            </span>
            <input type="radio" name="radio" />
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
              pattern="[0-9]&#123;3&#125;"
              maxlength="999"
              minlength="000"
              className="contenedores-de-modales-empresa-textinput11 input"
            />
          </div>
          <button
            id="boton_pagar"
            type="button"
            className="contenedores-de-modales-empresa-button2 button"
            onClick={handlePay}        
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
      )}
    {paymentMade ? <PurchaseMade onClosePopup={props.onClosePopup}/> : null}

    </div>
  )};

  export const PurchaseMade = (props) => {
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
                onClick={() => props.onClosePopup()}
              >
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
        </div>
  )};