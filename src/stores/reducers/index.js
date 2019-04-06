import { combineReducers } from 'redux';
import error from './errorReducers';
import menu from './menuReducers';
import user from './userReducers';

export default combineReducers({
  error,
  menu,
  user
});
