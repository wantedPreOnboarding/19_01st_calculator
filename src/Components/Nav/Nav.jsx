import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
  return (
    <nav className="navbar">
      <ul className="navbar--ul">
        <li>
          <Link to="/">계산기 1</Link>
        </li>
        <li>
          <Link to="/multiExchangeCalc">계산기 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
