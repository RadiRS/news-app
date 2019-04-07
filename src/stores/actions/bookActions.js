import axios from 'axios';
import {
  GET_ERRORS,
  GET_BOOKS_PENDING,
  GET_BOOKS_FULFILLED
  // SEARCH_BOOKS_PENDING,
  // SEARCH_BOOKS_FULFILLED
} from './types';
import { API_HOST, API_KEY } from '../../config';

export const getBooks = () => dispatch => {
  dispatch({ type: GET_BOOKS_PENDING });
  axios
    .get(
      `${API_HOST}/books/v3/lists.json?list=e-book-fiction&api-key=${API_KEY}`
    )
    .then(res => {
      dispatch({
        type: GET_BOOKS_FULFILLED,
        payload: res.data.results
      });
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err });
    });
};

export const updateBooks = data => dispatch => {
  dispatch({ type: 'UPDATE_BOOKS', payload: data });
};

// export const searchBooks = query => dispatch => {
//   dispatch({ type: SEARCH_BOOKS_PENDING });

//   axios
//     .get(
//       `${API_HOST}/search/v2/articlesearch.json?q=${query}&sort=${sort}&api-key=${API_KEY}`
//     )
//     .then(res => {
//       dispatch({
//         type: SEARCH_BOOKS_FULFILLED,
//         payload: res.data.response.docs
//       });
//     })
//     .catch(err => {
//       dispatch({ type: GET_ERRORS, payload: err });
//     });
// };
