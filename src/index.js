import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Admin3 from './views/admin-3'
import Admin2 from './views/admin-2'
import Admin1 from './views/admin-1'
import Home from './views/home'
import InicioDeSesin from './views/inicio-de-sesin'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Admin3} exact path="/admin-3" />
        <Route component={Admin2} exact path="/admin-2" />
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
