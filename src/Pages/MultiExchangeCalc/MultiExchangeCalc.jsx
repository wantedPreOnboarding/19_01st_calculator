import React, { useState } from 'react';
import './MultiExchangeCalc.scss';
import { multiCountries } from '../../api/constants';

const MultiExchangeCalc = () => {
  const [selectedCountry, setSelectedCountry] = useState('USD');
  const [selectedMenuNum, setSeltectedMenuNum] = useState(0);

  return (
    <div className="ex-calc2">
      <form className="ex-calc2-head__form">
        <input type="text" className="ex-calc2-head__input" />
        <select
          name="currencies"
          className="ex-calc2-head__select"
          onChange={e => setSelectedCountry(e.target.value)}
        >
          {multiCountries.map(country => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </form>
      <div className="ex-calc2-body__box">
        <ul className="ex-calc2-body__tab">
          {multiCountries
            .filter(country => country !== selectedCountry)
            .map((country, index) => {
              return (
                <li
                  className={`ex-calc2-body__tab--menu ${index === selectedMenuNum && 'active'}`}
                  key={country}
                >
                  <button value={country} onClick={() => setSeltectedMenuNum(index)}>
                    {country}
                  </button>
                </li>
              );
            })}
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

export default MultiExchangeCalc;
