import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers/newsReducer';
import moreNewsReducer from './reducers/moreNewsReducer';

const reducer = combineReducers({
  newsReducer,
  moreNewsReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
