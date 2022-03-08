import React from 'react';
import './App.css';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { browserHistory } from './browserHistory';
import Favorites from './pages/Favorites';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/" component={Home} />
        <Redirect from='*' to={'/'} />
      </Switch>
    </Router>
  )
}