import React from 'react';
import './ExchangeCalc2.scss';

const ExchangeCalc2 = () => {
  return (
    <div className="ex-calc2">
      <form className="ex-calc2-head__form">
        <input type="text" className="ex-calc2-head__input" />
        <select name="currencys" className="ex-calc2-head__select">
          <option value="USD">USD</option>
        </select>
      </form>
      <div className="ex-calc2-body__box">
        <ul className="ex-calc2-body__tab">
          <li className="ex-calc2-body__tab--menu active">
            <button>CAD</button>
          </li>
          <li className="ex-calc2-body__tab--menu">
            <button>CAD</button>
          </li>
          <li className="ex-calc2-body__tab--menu">
            <button>CAD</button>
          </li>
          <li className="ex-calc2-body__tab--menu">
            <button>CAD</button>
          </li>
          <li className="ex-calc2-body__tab--menu">
            <button>CAD</button>
          </li>
        </ul>
        <div className="ex-calc2-body__result">
          <span className="ex-calc2-body__result--main-text"> CAD 2,000.00</span>
          <span className="ex-calc2-body__result--sub-text">
            기준일: <br />
            2022-Jan-01
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCalc2;
