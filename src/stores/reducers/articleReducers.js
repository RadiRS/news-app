import {
  GET_ARTICLES_PENDING,
  GET_ARTICLES_FULFILLED,
  GET_ARTICLES_NEWS_PENDING,
  GET_ARTICLES_NEWS_FULFILLED
} from '../actions/types';

const initialState = {
  article: {},
  articles: [],
  articlesNews: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLES_PENDING:
      return {
        ...initialState,
        isLoading: true
      };

    case GET_ARTICLES_FULFILLED:
      return {
        ...initialState,
        articles: payload,
        isLoading: false
      };

    case GET_ARTICLES_NEWS_PENDING:
      return {
        ...initialState,
        isLoading: true
      };

    case GET_ARTICLES_NEWS_FULFILLED:
      return {
        ...initialState,
        articlesNews: payload,
        isLoading: false
      };

    default:
      return state;
  }
};
