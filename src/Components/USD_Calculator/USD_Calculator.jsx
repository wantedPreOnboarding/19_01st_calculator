import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './USD_Calculator.scss';


const USD_Calculator = () => {
  const [datas, setDatas] = useState('');
  const [money, setMoney] = useState(0);
  const [country, setCountry] = useState('KRW');
  const  CURRENCYLAYER_API_KEY = process.env.REACT_APP_CURRENCYLAYER_API;

  useEffect(async ()=>{
    await axios.get(`http://www.apilayer.net/api/live?access_key=${CURRENCYLAYER_API_KEY}`)
    .then((response) => {setDatas(response.data.quotes)})
  },[]);

  const handleSelect = (event)=>{
    setCountry(event.target.value);    
  };

  useEffect(()=>{
      switch(country){
        case 'KRW':
          setMoney(datas.USDKRW);
          break;
        case 'JPY':
          setMoney(datas.USDJPY);
          break;
          case 'PHP':
          setMoney(datas.USDPHP);
          break;
        default:
          console.error('수취국가를 선택해 주세요.');
          break;
      }
  },[datas, money, country]);

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
          <span>환율 : {money && money.toFixed(2)} {country}/USD</span>
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
export default USD_Calculator;