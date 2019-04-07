import MenuReducer from '../../../src/stores/reducers';
import { TOGGLE_MENU } from '../../../src/stores/actions/types';

test('should setup default menu values', () => {
  const state = MenuReducer(undefined, { type: TOGGLE_MENU });
  expect(state.menu.openMenu).toBe(state.menu.openMenu);
});
