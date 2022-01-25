function currencyExchanger(sendCountry, recvCountry, value, usdCurrencies) {
  const result = (
    (sendCountry === 'USD' ? 1 : 1 / usdCurrencies[`USD${sendCountry}`]) *
    usdCurrencies[`USD${recvCountry}`] *
    value
  ).toFixed(2);

  return result;
}

export default currencyExchanger;
