import { addFavoritesAction, removeFavoritesAction } from '../redux/actions/userAction';
import { NewsType } from '../types';
import { isFavorite } from './isFavorite';
import store from '../redux';

export const addFavoritesOrRemove = (
  favorites:NewsType[],
  news:NewsType,
) => {
  if (!isFavorite(favorites, news)) {
    store.dispatch(addFavoritesAction(news));
  } if (isFavorite(favorites, news)) {
    store.dispatch(removeFavoritesAction(news));
  }
};
