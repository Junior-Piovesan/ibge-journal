import { NewsType } from '../../types';

export const UPDATE_USER = 'UPDATE_USER';

export const ADD_FAVORITES = 'ADD_FAVORITES';

export const REMOVE_FAVORITES = 'ADD_FAVORITES';

export const userUpdateAction = (profile:{ user:string, email:string }) => {
  return {
    type: UPDATE_USER,
    payload: profile,
  };
};

export const addFavoritesAction = (news:NewsType) => {
  return {
    type: ADD_FAVORITES,
    payload: news,
  };
};

export const removeFavoritesAction = (news:NewsType) => {
  return {
    type: REMOVE_FAVORITES,
    payload: news,
  };
};
