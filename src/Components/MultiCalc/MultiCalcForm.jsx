import React from 'react';
/* == Custom - utils */
import commaNumber from '../../utils/commaNumber';
/* == api*/
import { multiCountries } from '../../api/constants';

const MultiCalcForm = ({ valueInput, submitHandler, inputHandler, sendCountryHandler }) => {
  return (
    <form
      className="ex-calc2-head__form"
      onSubmit={e => {
        submitHandler(e);
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
  );
};

export default MultiCalcForm;
