import {
  SEARCH_ARTICLES_PENDING,
  SEARCH_ARTICLES_FULFILLED
} from '../actions/types';

const initialState = {
  searchResults: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_ARTICLES_PENDING:
      return {
        ...initialState,
        isLoading: true
      };

    case SEARCH_ARTICLES_FULFILLED:
      return {
        ...initialState,
        searchResults: payload,
        isLoading: false
      };

    default:
      return state;
  }
};
