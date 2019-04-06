import axios from 'axios';
import {
  GET_ARTICLES_PENDING,
  GET_ARTICLES_FULFILLED,
  GET_ERRORS
} from './types';
import { API_HOST, API_KEY } from '../../config';

export const getArticles = section => dispatch => {
  dispatch({ type: GET_ARTICLES_PENDING });

  axios
    .get(`${API_HOST}/topstories/v2/${section}.json?api-key=${API_KEY}`)
    .then(res => {
      dispatch({ type: GET_ARTICLES_FULFILLED, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
