import React from 'react';
/* == router*/
import ReactDOM from 'react-dom';
import Routes from './Routes';
/* == styles*/
import './Styles/common.scss';
import './Styles/reset.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
