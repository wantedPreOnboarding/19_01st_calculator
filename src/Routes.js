import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import ExchangeCalc from './Pages/ExchangeCalc/ExchangeCalc';
import Main from './Pages/Main';
import ExchangeCalc2 from './Pages/ExchangeCalc2';

const Routes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/exchangeCalc" component={ExchangeCalc} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
