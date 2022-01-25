import React from 'react';
import './USD_Calculator.scss';
const USD_Calculator = () => {
  return (
    <section className='calculator__wrapper'>
      <h1 className='calculator__wrapper--title'>환율 계산</h1>
      <form className='calculator__form'>
        <div>
          <span>송금국가 : 미국(USD)</span>
        </div>
        <div>
          <span>수취국가:</span>
          <select>
            <option value="KRW">한국(KRW)</option>
            <option value="JPY">일본(JPY)</option>
            <option value="PHP">필리핀(PHP)</option>
          </select>
        </div>
        <div>
          <span>환율 : KRW/USD</span>
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