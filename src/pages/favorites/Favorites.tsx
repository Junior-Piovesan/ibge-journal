import { useSelector } from 'react-redux';
import { ReduxState } from '../../types';
import NewsCard from '../../components/newsCard/NewsCard';

import styles from './favorites.module.css';
import Back from '../../components/back/Back';

export default function Favorites() {
  const { favorites, user } = useSelector((state:ReduxState) => state.userReducer);
  return (
    <section className={ styles.container }>
      <Back route="/" />
      {favorites.length > 0 ? (
        <>
          <h1
            className={ styles.title }
          >
            {`Olá ${user}, Você tem ${favorites.length} notícias favoritas.`}

          </h1>
          <div className={ styles.cardsContainer }>
            {favorites.map((news) => (
              <NewsCard key={ news.id } newInfo={ news } />
            ))}
          </div>
        </>
      ) : (
        <h1
          className={ styles.title }
        >
          {`Olá ${user}, Você Não tem notícias favoritadas.`}
        </h1>
      )}

    </section>
  );
}
