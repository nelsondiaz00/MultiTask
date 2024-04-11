import React from 'react'

import PropTypes from 'prop-types'

import '../css/component.css'

const AppComponent = (props) => {
  return (
    <div id="cont_notif" className="app-component-container">
      <svg viewBox="0 0 365.71428571428567 1024" className="app-component-icon">
        <path d="M292.571 713.143v128c0 20-16.571 36.571-36.571 36.571h-146.286c-20 0-36.571-16.571-36.571-36.571v-128c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571zM309.714 109.714l-16 438.857c-0.571 20-17.714 36.571-37.714 36.571h-146.286c-20 0-37.143-16.571-37.714-36.571l-16-438.857c-0.571-20 15.429-36.571 35.429-36.571h182.857c20 0 36 16.571 35.429 36.571z"></path>
      </svg>
      <span className="app-component-text">{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  text: 'Texto de la notificación OWO',
}

AppComponent.propTypes = {
  text: PropTypes.string,
}

export default AppComponent
