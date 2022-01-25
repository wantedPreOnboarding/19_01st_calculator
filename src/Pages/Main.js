import React, { useEffect, useState } from 'react';
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
    <main>
    </main>
  );
};

export default Main;
