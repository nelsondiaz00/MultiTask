import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import '../css/comp-postulado.css'

const CompPostulado = (props) => {
  return (
    <div className="comp-postulado-container">
      <Link to="/postulado-perfil-ajeno" className="comp-postulado-navlink">
        <span>Crispetas Hernández</span>
        <br></br>
      </Link>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="comp-postulado-image"
      />
    </div>
  )
}

CompPostulado.defaultProps = {
  imageSrc: '/external/persona.png',
  imageAlt: 'image',
}

CompPostulado.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default CompPostulado
