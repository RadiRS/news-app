import { TOGGLE_MENU } from '../actions/types';

const initialState = {
  openMenu: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_MENU:
      return { openMenu: !state.openMenu };

    default:
      return state;
  }
};
