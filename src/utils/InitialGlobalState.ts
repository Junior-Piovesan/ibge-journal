import store from '../redux';
import { initialFavoritesAction, userUpdateAction } from '../redux/actions/userAction';
import { getLocalStorage } from './localStorage';
import { NewsType } from '../types';

type UserActionType = {
  type:string,
  payload: {
    user:string,
    email:string,
    favorite:NewsType
  }
};

export const initialGlobalState = () => {
  const profile = getLocalStorage('profile') || { user: '', email: '' };
  const favorites = getLocalStorage('favorites') || [];
  store.dispatch(userUpdateAction(profile) as UserActionType) as UserActionType;
  store.dispatch(
    initialFavoritesAction(
      favorites,
    ) as unknown as UserActionType,
  ) as UserActionType;
};
