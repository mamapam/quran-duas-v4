import axios from 'axios';
import config from './config';

const instance = axios.create({
  baseURL: config.quranApi,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
