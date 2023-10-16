import { NewsType } from '../../types';

export const UPDATE_USER = 'UPDATE_USER';

export const INITIAL_FAVORITES = 'INITIAL_FAVORITES';

export const ADD_FAVORITES = 'ADD_FAVORITES';

export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const userUpdateAction = (profile:{ user:string, email:string }) => {
  return {
    type: UPDATE_USER,
    payload: profile,
  };
};

export const initialFavoritesAction = (news:NewsType[]) => {
  return {
    type: INITIAL_FAVORITES,
    payload: {
      favorite: news,
    },
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
