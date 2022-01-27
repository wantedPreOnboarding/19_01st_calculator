import React from 'react';

/* == styles*/
import './MultiExchangeCalcForm.scss';
/* == Custom - utils*/
import commaNumber from '../../utils/commaNumber';
/* == constants*/
import { multiCountries } from '../../constants/countries';

export default function MultiExchangeCalcForm({
  valueInput,
  handleSubmit,
  handleChangeInput,
  handleClickSendCountry,
}) {
  return (
    <form
      className="ex-calc2__form"
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        className="ex-calc2__input"
        value={commaNumber(valueInput)}
        onChange={event => handleChangeInput(event.target.value)}
      />
      <select
        name="currencies"
        className="ex-calc2__select"
        onChange={event => handleClickSendCountry(event.target.value)}
      >
        {multiCountries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </form>
  );
}
