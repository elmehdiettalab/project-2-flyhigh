import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App';
import Login from './components/Login'
import Register from './components/Register'
import Test from './components/Test'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/fb" component={Test} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


