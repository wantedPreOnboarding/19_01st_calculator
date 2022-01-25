import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main';

import MultiExchangeCalc from './Pages/MultiExchangeCalc/MultiExchangeCalc';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/multiExchangeCalc" component={MultiExchangeCalc} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
