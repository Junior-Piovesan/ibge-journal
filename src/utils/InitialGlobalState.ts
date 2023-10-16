import store from '../redux';
import { initialFavoritesAction, userUpdateAction } from '../redux/actions/userAction';
import { getLocalStorage } from './localStorage';

export const initialGlobalState = () => {
  const profile = getLocalStorage('profile') || { user: '', email: '' };
  const favorites = getLocalStorage('favorites') || [];
  store.dispatch(userUpdateAction(profile));
  store.dispatch(initialFavoritesAction(favorites));
};
