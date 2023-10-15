import { useDispatch, useSelector } from 'react-redux';
import useImages from '../../Hooks/useImages';

import { NewsType, ReduxState } from '../../types';

import styles from './newsCard.module.css';

import favoriteIcon from '../../assets/favorite.svg';
import isfavoriteIcon from '../../assets/isFavorite.svg';

type Propstype = {
  newInfo:NewsType
};

export default function NewsCard({ newInfo }:Propstype) {
  const { imagesObj } = useImages(newInfo.imagens);
  const { favorites } = useSelector((state:ReduxState) => state.userReducer);
  const dispatch = useDispatch();

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
        <span>{`Publicação: ${newInfo.data_publicacao}`}</span>
        <span>{newInfo.editorias}</span>

        <button
          onClick={ () => {} }
          className={ styles.buttonfavorite }
        >
          <img
            className={ styles.imageFavorite }
            src={ favoriteIcon }
            alt="icone favoritar"
          />
        </button>

      </section>

    </section>
  );
}
