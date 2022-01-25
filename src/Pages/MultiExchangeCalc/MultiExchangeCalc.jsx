import React, { useState } from 'react';
import './MultiExchangeCalc.scss';
import { multiCountries } from '../../api/constants';
import commaNumber from '../../utils/commaNumber';

const MultiExchangeCalc = () => {
  const [sendCountry, setSendCountry] = useState('USD');
  const [recvCountry, setRecvCountry] = useState('CAD');
  const [valueInput, setValueInput] = useState('');

  const valueInputHandler = e => {
    e.preventDefault();
  };

  const inputHandler = value => {
    const filteredValue = value.replaceAll(',', '').trim('');
    if (isNaN(+filteredValue)) return;

    if (filteredValue <= 0) {
      setValueInput('');
    } else {
      setValueInput(filteredValue > 1000 ? 1000 : filteredValue);
    }
  };

  const sendCountryHandler = selectedCountry => {
    if (selectedCountry === recvCountry) {
      setRecvCountry(multiCountries.filter(country => country !== selectedCountry)[0]);
    }
    setSendCountry(selectedCountry);
  };

  return (
    <div className="ex-calc2">
      <form
        className="ex-calc2-head__form"
        onSubmit={e => {
          valueInputHandler(e);
        }}
      >
        <input
          type="text"
          className="ex-calc2-head__input"
          value={commaNumber(valueInput)}
          onChange={e => inputHandler(e.target.value)}
        />
        <select
          name="currencies"
          className="ex-calc2-head__select"
          onChange={e => sendCountryHandler(e.target.value)}
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
            .filter(country => country !== sendCountry)
            .map(country => {
              return (
                <li
                  className={`ex-calc2-body__tab--menu ${country === recvCountry && 'active'}`}
                  key={country}
                >
                  <button value={country} onClick={() => setRecvCountry(country)}>
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
