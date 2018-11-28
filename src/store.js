import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import auth from './reducers/auth.reducer';
import message from './reducers/message.reducer';
import accounts from './reducers/accounts.reducer';
import dashboard from './reducers/dashboard.reducer';
import login from './reducers/login.reducer';

const loggerMiddleware = createLogger();

let Store = createStore(
  combineReducers({
    auth,
    message,
    dashboard,
    accounts,
    login,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware  //must be last
  )
);

export default Store;
