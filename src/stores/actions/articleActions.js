import axios from 'axios';
import {
  GET_ERRORS,
  GET_ARTICLES_PENDING,
  GET_ARTICLES_FULFILLED,
  SEARCH_ARTICLES_PENDING,
  SEARCH_ARTICLES_FULFILLED
} from './types';
import { API_HOST, API_KEY } from '../../config';

export const getArticles = () => dispatch => {
  dispatch({ type: GET_ARTICLES_PENDING });

  axios
    .get(`${API_HOST}/topstories/v2/home.json?api-key=${API_KEY}`)
    .then(res => {
      dispatch({
        type: GET_ARTICLES_FULFILLED,
        payload: res.data.results
      });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

export const searchArticles = (query, sort = 'newest') => dispatch => {
  dispatch({ type: SEARCH_ARTICLES_PENDING });

  axios
    .get(
      `${API_HOST}/search/v2/articlesearch.json?q=${query}&sort=${sort}&api-key=${API_KEY}`
    )
    .then(res => {
      dispatch({
        type: SEARCH_ARTICLES_FULFILLED,
        payload: res.data.response.docs
      });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};
