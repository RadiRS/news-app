import { combineReducers } from 'redux';
import error from './errorReducers';
import menu from './menuReducers';
import user from './userReducers';
import article from './articleReducers';
import book from './bookReducers';
import articleSearch from './articleSearchReducers';

export default combineReducers({
  error,
  menu,
  user,
  article,
  book,
  articleSearch
});
