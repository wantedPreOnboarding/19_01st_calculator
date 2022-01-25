import React, { useState, useEffect } from 'react';
/* == styles*/
import './MultiExchangeCalc.scss';
/* == api*/
import { multiCountries } from '../../api/constants';
import { getCurrencies } from '../../api/core';
/* == Custom - utils */
import commaNumber from '../../utils/commaNumber';
import currencyExchanger from '../../utils/currencyExchanger';
import formattedDate from '../../utils/formattedDate';

const MultiExchangeCalc = () => {
  const [sendCountry, setSendCountry] = useState('USD');
  const [recvCountry, setRecvCountry] = useState('CAD');
  const [valueInput, setValueInput] = useState('');
  const [{ currencies, timestamp }, setCurrencies] = useState({});
  const [resultValue, setResultValue] = useState(0);

  const changeResult = (sendCountry, recvCountry) => {
    const result = currencyExchanger(sendCountry, recvCountry, valueInput, currencies);
    setResultValue(result);
  };

  const valueInputHandler = e => {
    e.preventDefault();
    changeResult(sendCountry, recvCountry);
  };

  const tabHandler = country => {
    setRecvCountry(country);
    changeResult(sendCountry, country);
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
    changeResult(selectedCountry, recvCountry);
    setSendCountry(selectedCountry);
  };

  useEffect(() => {
    (async () => {
      const currencies = await getCurrencies();
      setCurrencies(currencies);
    })();
  }, []);

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
                  <button value={country} onClick={() => tabHandler(country)}>
                    {country}
                  </button>
                </li>
              );
            })}
        </ul>
        <div className="ex-calc2-body__result">
          <span className="ex-calc2-body__result--main-text">
            {recvCountry} : {resultValue}
          </span>
          <span className="ex-calc2-body__result--sub-text">
            기준일: <br />
            {timestamp && formattedDate(timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MultiExchangeCalc;
