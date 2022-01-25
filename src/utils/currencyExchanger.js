function currencyExchanger(sendCon, recvCon, value, usdCurrencies) {
  const result = (
    (sendCon === 'USD' ? 1 : 1 / usdCurrencies[`USD${sendCon}`]) *
    usdCurrencies[`USD${recvCon}`] *
    value
  ).toFixed(2);

  return result;
}

export default currencyExchanger;
