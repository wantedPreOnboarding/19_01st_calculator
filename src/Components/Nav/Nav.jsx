import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/exchangeCalc">계산기 1</Link></li>
        <li>계산기 2</li>
      </ul>
    </nav>
  );
};

export default Nav;
