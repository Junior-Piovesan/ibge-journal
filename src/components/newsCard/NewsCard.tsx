import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useImages from '../../Hooks/useImages';

import { NewsType, ReduxState } from '../../types';

import styles from './newsCard.module.css';

import favoriteIcon from '../../assets/favorite.svg';
import isFavoriteIcon from '../../assets/isFavorite.svg';

import { isFavorite } from '../../utils/isFavorite';
import { addFavoritesOrRemove } from '../../utils/AddFavoritesOrRemove';
import { calculateDate } from '../../utils/calculateDate';

type Propstype = {
  newInfo:NewsType
};

export default function NewsCard({ newInfo }:Propstype) {
  const { imagesObj } = useImages(newInfo.imagens);
  const { user, favorites } = useSelector((state:ReduxState) => state.userReducer);
  const [favoriteList, setfavorites] = useState<NewsType[]>([]);

  useEffect(() => {
    setfavorites(favorites);
  }, [favorites]);

  return (
    <section className={ styles.card }>

      <article className={ styles.article }>
        <h1 className={ styles.title }>{newInfo.titulo}</h1>
        <p className={ styles.introdution }>{newInfo.introducao}</p>
      </article>

      <div className={ styles.imageContainer }>
        <img
          className={ styles.image }
          src={ imagesObj.image_intro }
          alt="Imagem da notícia"
        />

      </div>

      <section className={ styles.newInfoContainer }>
        <span>{calculateDate(newInfo.data_publicacao)}</span>

        <a
          className={ styles.link }
          target="blank"
          href={ newInfo.link }
        >
          Ler notícia aqui
        </a>

        <span>{newInfo.editorias}</span>

        {user === '' ? (
          <p>Faça login para favoritar a notícia.</p>
        ) : (

          <button
            onClick={ () => addFavoritesOrRemove(favorites, newInfo) }
            className={ styles.buttonfavorite }
          >
            <img
              className={ styles.imageFavorite }
              src={ isFavorite(favoriteList, newInfo) ? isFavoriteIcon : favoriteIcon }
              alt="icone favoritar"
            />
          </button>
        )}

      </section>
    </section>
  );
}
