import axios from 'axios';
import { countries } from './constants';

const instance = axios.create({
  baseURL: 'http://apilayer.net/api',
});

const currencyApi = key =>
  instance.get(`/live?access_key=${key}&currencies=${countries.join(',')}&source=USD&format=1`);

export const getCurrencies = async () => {
  try {
    const { data } = await currencyApi(process.env.REACT_APP_CURRENCYLAYER_API);
    return data.quotes;
  } catch (e) {
    throw new Error(e);
  }
};
