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
import Empresa1 from './views/companie-client/html/empresa-home'
import Empresa2 from './views/companie-client/html/empresa-sector'
import Empleado1 from './views/employee/html/empleado-home'
import EmpresaPerfil from './views/companie-client/html/empresa-perfil'
import Admin1 from './views/admin/html/admin-home'
import Home from './views/home/html/home'
import InicioDeSesin from './views/login-process/login/html/inicio-de-sesion'
import NotFound from './views/not-found/html/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Autenticacin} exact path="/inicio-de-sesion/autenticacion" />
        <Route component={Empresa1} exact path="/empresa-home" />
        <Route component={Empresa2} exact path="/empresa-sector" />
        <Route component={Empleado1} exact path="/empleado-home" />
        <Route component={EmpresaPerfil} exact path="/empresa-perfil" />
        <Route component={Admin1} exact path="/admin-home" />
        <Route component={Home} exact path="/" />
        <Route component={InicioDeSesin} exact path="/inicio-de-sesion" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
