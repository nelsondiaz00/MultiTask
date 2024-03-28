import React, { useEffect, useState } from 'react';
// import React from 'react'
import { Link } from 'react-router-dom'
import { finalValidation } from '../../controller/code-email-process'
import { sendEmail } from '../../controller/code-email-process'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';

import '../login-process/autenticacion/css/autenticacin.css'

const Authentication = (props) => {
    const history = useHistory();
    
    const [validationResult, setValidationResult] = useState(null);

    useEffect(() => {
    const fetchValidationResult = async () => {
        try {
        const result = await sendEmail();
        setValidationResult(result);
        } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        }
    };

    fetchValidationResult();
    }, []);

    return (
    <div className="inicio-de-sesin-container2">
        <Link to="/" className="inicio-de-sesin-navlink1">
        <img
            alt="image"
            src="/external/multitask%20-%20logo.svg"
            className="inicio-de-sesin-image"
        />
        </Link>
        <span id="texto" className="autenticacin-text">
        <span className="autenticacin-text1">Te enviamos un código a</span>
        <span className="autenticacin-text2">
            {' '}
            {`${localStorage.getItem('correo')}`}
        </span>
        <br></br>
        <br></br>
        <span className="autenticacin-text5">
            Ingrésalo abajo para saber que eres tú.
        </span>
        <br></br>
        </span>
        <input
        type="text"
        id="input_codigo"
        required="true"
        className="autenticacin-textinput input"
        />
        <span id="link_nosotros" className="autenticacin-text7">
        Confiamos en tí, solo es para confirmar :)
        </span>
        <Link
        id="boton_inicioses"
        className="autenticacin-navlink2 button"
        onClick={(event) => finalValidation(event, history, validationResult)}
        >
        Inicia Sesión
        </Link>
    </div>
  )
}

export default Authentication
