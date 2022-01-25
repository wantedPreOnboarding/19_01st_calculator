import React, { useEffect, useState } from 'react';
import USD_Calculator from './../Components/USD_Calculator/USD_Calculator';
import { getCurrencies } from '../api/core';

const Main = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    (async () => {
      const currencies = await getCurrencies();
      setCurrencies(currencies);
    })();
  }, []);

  return (
    <h1>
      <USD_Calculator />
    </h1>
  );
};

export default Main;
