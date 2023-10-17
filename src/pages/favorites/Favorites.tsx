import { useSelector } from 'react-redux';
import { ReduxState } from '../../types';
import NewsCard from '../../components/newsCard/NewsCard';

import styles from './favorites.module.css';
import Back from '../../components/back/Back';

export default function Favorites() {
  const { favorites, user } = useSelector((state:ReduxState) => state.userReducer);
  return (
    <section className={ styles.container }>
      <div className={ styles.backContainer }>
        <Back route="/" />
      </div>

      {user === '' && <h1 className={ styles.title }> Faça o Login.</h1>}

      {favorites.length > 0 && (
        <>
          <h1
            className={ styles.title }
          >
            {favorites.length > 1 && (
              `Olá ${user}, Você tem ${favorites.length} notícias favoritas.`)}

            {favorites.length <= 1 && (
              `Olá ${user}, Você tem ${favorites.length} notícia favorita.`)}
          </h1>
          <div className={ styles.cardsContainer }>
            {favorites.map((news, index) => (
              <NewsCard key={ news.id } newInfo={ news } index={ index } />
            ))}
          </div>
        </>
      )}

      {(favorites.length === 0 && user.length > 0) && (
        <h1
          className={ styles.title }
        >
          {`Olá ${user}, Você Não tem notícias favoritadas.`}
        </h1>
      )}

    </section>
  );
}
