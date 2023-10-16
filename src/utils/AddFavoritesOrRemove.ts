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
  } else if (isFavorite(favorites, news)) {
    const newArray = favorites.filter((e) => e.id !== news.id);
    addLocalStorage('favorites', newArray);
    store.dispatch(removeFavoritesAction(news));
  }
};
