import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import rootReducer from '../reducers/index';

const middleware = applyMiddleware(thunk, promise);

const store = createStore(rootReducer, middleware);

export default store;
