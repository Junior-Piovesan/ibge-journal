import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ReduxState } from '../types.ts';
import newsReducer from '../redux/reducers/newsReducer.ts';
import moreNewsReducer from '../redux/reducers/moreNewsReducer.ts';
import userReducer from '../redux/reducers/userReducer.ts';
import { filterReducer } from '../redux/reducers/filterReducer.ts';

function renderWithRouterAndRedux(
  component: JSX.Element,
  route: string = '/',
  state: ReduxState | any = undefined,
  store = createStore(
    combineReducers({
      newsReducer,
      moreNewsReducer,
      userReducer,
      filterReducer,
    }),
    state,
    applyMiddleware(thunk),
  ),
) {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(
      <BrowserRouter>
        <Provider store={ store }>{component}</Provider>
      </BrowserRouter>,
    ),
    user: userEvent.setup(),
    store,
  };
}

export default renderWithRouterAndRedux;
