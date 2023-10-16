import { NewsType } from '../types';

export const isFavorite = (favorites:NewsType[], news:NewsType) => {
  return favorites.some((elemento) => elemento.id === news.id);
};
