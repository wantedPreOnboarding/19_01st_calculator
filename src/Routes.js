import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import ExchangeCalc from './Pages/ExchangeCalc/ExchangeCalc';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={ExchangeCalc} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
