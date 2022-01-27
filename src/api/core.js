import axios from 'axios';
/* == constants*/
import { countries } from '../constants/countries';

const instance = axios.create({
  baseURL: 'http://apilayer.net/api',
});

const currencyApi = key =>
  instance.get(`/live?access_key=${key}&currencies=${countries.join(',')}&source=USD&format=1`);

export const getCurrencies = async () => {
  try {
    const {
      data: { quotes, timestamp, success, error },
    } = await currencyApi(process.env.REACT_APP_CURRENCYLAYER_API);

    if (!success) {
      throw new Error(error);
    }

    return {
      currencies: quotes,
      timestamp: timestamp * 1000, // UNIX timestamp to JS timestamp
    };
  } catch (e) {
    return {
      isError: true,
    };
  }
};
