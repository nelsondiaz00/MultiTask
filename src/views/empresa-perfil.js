import React from 'react'

import { Helmet } from 'react-helmet'

import './empresa-perfil.css'

const EmpresaPerfil = (props) => {
  return (
    <div className="empresa-perfil-container">
      <Helmet>
        <title>MultiTask</title>
        <meta property="og:title" content="Empresa-Perfil - MultiTask" />
      </Helmet>
    </div>
  )
}

export default EmpresaPerfil
