import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reduxPromises from 'redux-promise-middleware';
import reducers from './reducers';

const middleware = [reduxPromises];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
