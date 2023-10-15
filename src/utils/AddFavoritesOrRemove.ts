import { addFavoritesAction, removeFavoritesAction } from '../redux/actions/userAction';
import { NewsType } from '../types';
import { isFavorite } from './isFavorite';
import store from '../redux';
import { addLocalStorage } from './localStorage';

export const addFavoritesOrRemove = (
  favorites:NewsType[],
  news:NewsType,
) => {
  if (!isFavorite(favorites, news)) {
    store.dispatch(addFavoritesAction(news));
    addLocalStorage('favorites', [...favorites, news]);
  } if (isFavorite(favorites, news)) {
    addLocalStorage('favorites', favorites.filter((e) => e !== news));
    store.dispatch(removeFavoritesAction(news));
  }
};
