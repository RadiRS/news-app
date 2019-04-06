import {
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED
} from '../actions/types';

const initialState = {
  user: {},
  users: [],
  isLoading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PENDING:
      return {
        ...initialState,
        isLoading: true
      };

    case GET_USER_FULFILLED:
      return {
        ...initialState,
        user: payload.data,
        isLoading: false
      };

    case GET_USER_REJECTED:
      return {
        ...initialState,
        isLoading: false
      };

    default:
      return state;
  }
};
