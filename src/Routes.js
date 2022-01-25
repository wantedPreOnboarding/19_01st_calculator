import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import ExchangeCalc2 from './Pages/ExchangeCalc2';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/calc2" component={ExchangeCalc2} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
