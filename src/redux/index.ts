import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers/newsReducer';
import moreNewsReducer from './reducers/moreNewsReducer';
import userReducer from './reducers/userReducer';
import { filterReducer } from './reducers/filterReducer';

const reducer = combineReducers({
  newsReducer,
  moreNewsReducer,
  userReducer,
  filterReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
