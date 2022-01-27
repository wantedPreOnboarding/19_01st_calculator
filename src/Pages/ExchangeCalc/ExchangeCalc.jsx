import React, { useEffect, useState } from 'react';
import { getCurrencies } from '../../api/core';
import commaNumber from '../../utils/commaNumber';
import './ExchangeCalc.scss';

const ExchangeCalc = () => {
  const [country, setCountry] = useState('KRW');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [receiptAmount, setReceiptAmount] = useState(0);
  const [resultValue, setResultValue] = useState(false);

  useEffect(() => {
    (async () => {
      const { currencies } = await getCurrencies();
      const countryValue = currencies[`USD${country}`];
      setExchangeRate((countryValue).toFixed(2));
    })();
  }, [exchangeRate, country]);

  const handleSelectChange = event => {
    setCountry(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setResultValue(true);
    setReceiptAmount(event.target['receiptAmount'].value * exchangeRate);
  };

  return (
    <section className="exchange__wrapper">
      <h1 className="exchange__wrapper--title">환율 계산</h1>
      <form className="exchange__form" onSubmit={handleFormSubmit}>
        <div className='exchange__form--box'>
          <span>송금국가 : 미국(USD)</span>
        </div>
        <div className='exchange__form--box'>
          <span>수취국가 : </span>
          <select onChange={handleSelectChange}>
            <option value="KRW">한국(KRW)</option>
            <option value="JPY">일본(JPY)</option>
            <option value="PHP">필리핀(PHP)</option>
          </select>
        </div>
        <div className='exchange__form--box'>
          <span>
            환율 : {exchangeRate && commaNumber(exchangeRate)} {country}/ USD
          </span>
        </div>
        <div className='exchange__form--box'>
          <span>송금액 : </span>
          <input type="number" name="receiptAmount" aria-label="receiptAmount" min={0} max={10000} autoFocus />
          <span>USD</span>
        </div>
        <button>Submit</button>
      </form>
      {resultValue && (
        <div className={`exchange__result${receiptAmount === 0 ? '__error' : '__success'} `}>
          {receiptAmount === 0
            ? '송금액이 바르지 않습니다'
            : `수취금액은 ${commaNumber(receiptAmount.toFixed(2))} ${country} 입니다.`}
        </div>
      )}
    </section>
  );
};
export default ExchangeCalc;
