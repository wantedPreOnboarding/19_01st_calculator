import React from 'react';
/* == api*/
import { multiCountries } from '../../api/constants';
const MultiCalcTab = ({ sendCountry, recvCountry, tabHandler }) => {
  return (
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
  );
};

export default MultiCalcTab;
