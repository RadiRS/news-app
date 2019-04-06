import axios from 'axios';
import { GET_USER } from './types';

export const getUser = () => {
  const data = axios.get('https://uinames.com/api/?ext');

  return {
    type: GET_USER,
    payload: data
  };
};
