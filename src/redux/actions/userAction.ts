import { NewsType } from '../../types';

export const UPDATE_USER = 'UPDATE_USER';

export const ADD_FAVORITES = 'ADD_FAVORITES';

export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const userUpdateAction = (profile:{ user:string, email:string }) => {
  return {
    type: UPDATE_USER,
    payload: profile,
  };
};

export const addFavoritesAction = (news:NewsType) => {
  return {
    type: ADD_FAVORITES,
    payload: {
      favorite: news,
    },
  };
};

export const removeFavoritesAction = (news:NewsType) => {
  return {
    type: REMOVE_FAVORITES,
    payload: {
      favorite: news,
    },
  };
};
