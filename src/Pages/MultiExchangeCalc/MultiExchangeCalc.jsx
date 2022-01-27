import React, { useState, useEffect } from 'react';
/* == components*/
import TabList from '../../Components/TabList/TabList';
/* == styles*/
import './MultiExchangeCalc.scss';
/* == api*/
import { getCurrencies } from '../../api/core';
/* == Custom - utils*/
import currencyExchanger from '../../utils/currencyExchanger';
import formattedDate from '../../utils/formattedDate';
import MultiExchangeCalcForm from '../../Components/MultiExchangeCalcForm/MultiExchangeCalcForm';
/* == constants*/
import { multiCountries } from '../../constants/countries';

const MultiExchangeCalc = () => {
  const [sendCountry, setSendCountry] = useState('USD');
  const [recvCountry, setRecvCountry] = useState('CAD');
  const [valueInput, setValueInput] = useState('');
  const [{ currencies, timestamp }, setCurrencies] = useState({
    currencies: null,
    timestamp: null,
  });
  const [result, setResult] = useState(0);

  //currencyExchanger에서 받은 결과를 상태로 연동
  const changeResult = (sendCountry, recvCountry) => {
    const newResult = currencyExchanger(sendCountry, recvCountry, valueInput, currencies);
    setResult(newResult);
  };

  //사용자가 input을 입력 후 전송하면 결과창을 변경하는 함수
  const handleSubmit = event => {
    event.preventDefault();
    changeResult(sendCountry, recvCountry);
  };

  //tab 메뉴 클릭시 결과창을 변경하는 함수
  const handleClickTab = country => {
    changeResult(sendCountry, country);
    setRecvCountry(country);
  };

  //select에서 보낸국가 변경시 결과창을 변경하는 함수
  const handleClickSendCountry = selectedCountry => {
    if (selectedCountry === recvCountry) {
      const resetResvCoun = multiCountries.filter(country => country !== selectedCountry)[0];
      setRecvCountry(resetResvCoun);
      changeResult(selectedCountry, resetResvCoun);
    } else {
      changeResult(selectedCountry, recvCountry);
    }
    setSendCountry(selectedCountry);
  };

  //input value comma함수 적용후 valueInput 상태변경
  const handleChangeInput = value => {
    const filteredValue = value.replaceAll(',', '').trim('');
    if (isNaN(+filteredValue)) return;
    setValueInput(filteredValue <= 0 ? '' : filteredValue > 1000 ? 1000 : filteredValue);
  };

  useEffect(() => {
    (async () => {
      const currencies = await getCurrencies();
      setCurrencies(currencies);
    })();
  }, []);

  return (
    <section className="ex-calc2">
      <h2 className="a11y-hidden">Multi Exchange Calculator</h2>
      <MultiExchangeCalcForm
        valueInput={valueInput}
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        handleClickSendCountry={handleClickSendCountry}
      />
      <TabList
        tabList={multiCountries.filter(country => country !== sendCountry)}
        selectedTab={recvCountry}
        setSelectedTab={handleClickTab}
      />
      <div className="ex-calc2__result">
        <span className="ex-calc2__result--main">
          {recvCountry} : <output>{result}</output>
        </span>
        <span className="ex-calc2__result--sub">
          기준일: <br />
          {timestamp && formattedDate(timestamp)}
        </span>
      </div>
    </section>
  );
};

export default MultiExchangeCalc;
