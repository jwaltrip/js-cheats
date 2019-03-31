// this creates the initial redux store that is passed to the Provider component in React
// this is setup to connect to the Redux Chrome Dev tools extension
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// initial state object that reducer states are added to
const initialState = {};

// add any additional middleware to this array
const middlewareArr = [thunk];

// apply the middleware
const middleware = applyMiddleware(...middlewareArr);

// this is to fix redux dev tools not being installed
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(middleware)
);

export default store;