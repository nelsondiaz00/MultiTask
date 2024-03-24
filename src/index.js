import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Autenticacin from './views/autenticacin'
import Empresa1 from './views/empresa-1'
import Empresa2 from './views/empresa-2'
import Empleado1 from './views/empleado-1'
import EmpresaPerfil from './views/empresa-perfil'
import Admin1 from './views/admin-1'
import Home from './views/home'
import InicioDeSesin from './views/inicio-de-sesin'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Autenticacin} exact path="/autenticacin" />
        <Route component={Empresa1} exact path="/empresa-1" />
        <Route component={Empresa2} exact path="/empresa-2" />
        <Route component={Empleado1} exact path="/empleado-1" />
        <Route component={EmpresaPerfil} exact path="/empresa-perfil" />
        <Route component={Admin1} exact path="/admin-1" />
        <Route component={Home} exact path="/" />
        <Route component={InicioDeSesin} exact path="/inicio-de-sesin" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
