import { GET_BOOKS_PENDING, GET_BOOKS_FULFILLED } from '../actions/types';

const initialState = {
  book: {},
  books: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_PENDING:
      return {
        ...initialState,
        isLoading: true
      };

    case GET_BOOKS_FULFILLED:
      return {
        ...initialState,
        books: payload,
        isLoading: false
      };

    case 'UPDATE_BOOKS':
      return {
        ...initialState,
        books: payload,
        isLoading: false
      };

    default:
      return state;
  }
};
