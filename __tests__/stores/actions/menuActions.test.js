import { TOGGLE_MENU } from '../../../src/stores/actions/types';
import { toggleMenu } from '../../../src/stores/actions';

test('should setup toggle menu action object', () => {
  const action = toggleMenu();
  expect(action).toEqual({
    type: TOGGLE_MENU
  });
});
