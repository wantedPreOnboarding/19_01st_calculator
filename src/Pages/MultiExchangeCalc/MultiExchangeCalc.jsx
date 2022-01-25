import React from 'react';

const MultiExchangeCalc = () => {
  return (
    <div className="exchange-calc2">
      <form className="exchange-calc2__box--head">
        <input type="text" className="exchange-calc2__input--head" />
        <select name="currencys" className="exchange-calc2__select--head">
          <option value="USD">USD</option>
        </select>
      </form>
      <div className="exchage-calc2__box--body">
        <ul className="exchange-calc2__box--tab">
          <li>
            <button className="exchange-calc2__btn--tab"></button>
          </li>
          <li>
            <button className="exchange-calc2__btn--tab"></button>
          </li>
          <li>
            <button className="exchange-calc2__btn--tab"></button>
          </li>
          <li>
            <button className="exchange-calc2__btn--tab"></button>
          </li>
          <li>
            <button className="exchange-calc2__btn--tab"></button>
          </li>
          <li>
            <button className="exchange-calc2__btn--tab"></button>
          </li>
        </ul>
        <div className="exchage-calc2__box--result">
          <span className="exchage-calc2__span--result"></span>
        </div>
      </div>
    </div>
  );
};

export default MultiExchangeCalc;
