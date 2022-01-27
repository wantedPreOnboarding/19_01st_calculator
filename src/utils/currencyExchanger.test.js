import currencyExchanger from './currencyExchanger';

describe('currencyExchanger', () => {
  const usdCurrencies = {
    USDUSD: 1,
    USDJPY: 110.5,
    USDKRW: 1084.5,
    USDVND: 23000,
    USDBYR: 15000,
    USDCAD: 1.234,
  };

  test('currencyExchanger(USD, CAD, 1000, usdCurrencies) => 1234', () => {
    expect(currencyExchanger('USD', 'CAD', 1000, usdCurrencies)).toBe('1234.00');
  });

  test('currencyExchanger(KRW, CAD, 1000, usdCurrencies) => 0.09', () => {
    expect(currencyExchanger('KRW', 'USD', 100, usdCurrencies)).toBe('0.09');
  });
});
