import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reduxPromises from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [reduxPromises, reduxThunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
