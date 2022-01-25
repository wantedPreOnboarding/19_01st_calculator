import React, { useEffect, useState } from 'react';
import { getCurrencies } from '../../api/core';
import './ExchangeCalc.scss';

const ExchangeCalc = () => {
  const [country, setCountry] = useState('KRW');
  const [money, setMoney] = useState(0);

  useEffect(() => {
    (async () => {
      const countryName = await getCurrencies();

      switch (country) {
        case 'KRW':
          setMoney(countryName.USDKRW);
          break;
        case 'JPY':
          setMoney(countryName.USDJPY);
          break;
        case 'PHP':
          setMoney(countryName.USDPHP);
          break;
        default:
          console.error('수취국가를 선택해 주세요.');
          break;
      }
    })();
  }, [money, country]);

  const handleSelect = (event) => {
    setCountry(event.target.value);
  };

  return (
    <section className='calculator__wrapper'>
      <h1 className='calculator__wrapper--title'>환율 계산</h1>
      <form className='calculator__form'>
        <div>
          <span>송금국가 : 미국(USD)</span>
        </div>
        <div>
          <span>수취국가:</span>
          <select onChange={handleSelect}>
            <option value="KRW">한국(KRW)</option>
            <option value="JPY">일본(JPY)</option>
            <option value="PHP">필리핀(PHP)</option>
          </select>
        </div>
        <div>
          <span>환율 : {money && money.toFixed(2)}  {country}/USD</span>
        </div>
        <div>
          <span>송금액 : </span>
          <input type="number" aria-label='remittance' />
          <span>USD</span>
        </div>
        <button>Submit</button>
      </form>
    </section>
  )
}
export default ExchangeCalc;