import React, { useEffect, useState } from 'react';
import { getCurrencies } from '../../api/core';
import './ExchangeCalc.scss';

const ExchangeCalc = () => {
  const [country, setCountry] = useState('KRW');
  const [money, setMoney] = useState(0);
  const [remittance, setRemittance] = useState(0);
  const [resultActive, setResultActive] = useState(false);
  
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
  
const handleFormSubmit=(event)=>{
  event.preventDefault(); 
  
  const remittance = event.target.remittance.value;
  if (remittance <= 0 || remittance > 10000) {
    setResultActive(true);
    setRemittance(0);
    
  } else {
    setResultActive(true);
    const total = remittance * money;
    setRemittance(total.toFixed(2));
  }
}

  return (
    <section className='calculator__wrapper'>
      <h1 className='calculator__wrapper--title'>환율 계산</h1>
      <form className='calculator__form' onSubmit={handleFormSubmit} >
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
          <input type="number" min={0} max={10000} name="remittance" aria-label='remittance'/>
          <span>USD</span>
        </div>
        <button>Submit</button>
      </form>
      {resultActive && <div>{remittance === 0 ? '송금액이 바르지 않습니다' : `수취금액은 ${remittance} ${country} 입니다.`}</div>}
      
    </section>
  )
}
export default ExchangeCalc;