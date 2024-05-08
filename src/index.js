import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Autenticacin from './views/login-process/autenticacion/html/autenticacin'
import Empresa1 from './views/companie-client/html/empresa-inicio'
import Empresa2 from './views/companie-client/html/empresa-sector'
import Empleado1 from './views/employee/html/empleado-home'
import EmpresaPerfil from './views/companie-client/html/empresa-perfil'
import Admin1 from './views/admin/html/admin-home'
import Home from './views/home/html/home'
import InicioDeSesin from './views/login-process/login/html/inicio-de-sesion'
import NotFound from './views/not-found/html/not-found'
import Postulado from './views/aspirant/html/postulado-inicio'
import PostuladoResultados from './views/aspirant/html/postulado-resultados'
import Postulado3 from './views/aspirant/html/postulado-postulacion'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Autenticacin} exact path="/inicio-de-sesion/autenticacion" />
        <Route component={Empresa1} exact path="/empresa-inicio" />
        <Route component={Empresa2} exact path="/empresa-sector" />
        <Route component={Empleado1} exact path="/empleado-inicio" />
        <Route component={EmpresaPerfil} exact path="/empresa-perfil" />
        <Route component={Admin1} exact path="/administrador-inicio" />
        <Route component={Home} exact path="/" />
        <Route component={InicioDeSesin} exact path="/inicio-de-sesion" />
        <Route component={Postulado} exact path="/postulado-inicio" />
        <Route component={PostuladoResultados} exact path="/postulado-resultados" />
        <Route component={Postulado3} exact path="/postulado-postulacion" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
