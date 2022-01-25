import React from 'react';
/* == react-router-dom */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* == Custom - Component */
import Nav from './Components/Nav/Nav';
/* == pages*/
import ExchangeCalc from './Pages/ExchangeCalc/ExchangeCalc';
import MultiExchangeCalc from './Pages/MultiExchangeCalc/MultiExchangeCalc';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={ExchangeCalc} />
        <Route exact path="/multiExchangeCalc" component={MultiExchangeCalc} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
