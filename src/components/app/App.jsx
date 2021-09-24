/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AnimalCrossingContainer from '../../containers/AnimalCrossingContainer';
import AnimalCrossingDetails from '../containers/AnimalCrossingDetails';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Town Plaza </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/:id">
          <AnimalCrossingDetails />;
        </Route>
        <Route path="/">
          <AnimalCrossingContainer />;
        </Route>
      </Switch>
    </Router>
  );
}
