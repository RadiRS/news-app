import axios from 'axios';
import { GET_ARTICLES } from './types';
import { API_HOST, API_KEY } from '../../config';

export const getArticles = () => {
  const data = axios.get(
    `${API_HOST}/topstories/v2/home.json?api-key=${API_KEY}`
  );

  return {
    type: GET_ARTICLES,
    payload: data.result
  };
};
