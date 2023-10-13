import { Link } from 'react-router-dom';
import styles from './filter.module.css';

export default function Filters() {
  return (
    <nav className={ styles.nav }>

      <label htmlFor="recentes">
        Mais recentes
        <input
          onChange={ () => console.log('oi') }
          name="filter"
          id="recentes"
          type="radio"
        />
      </label>

      <label htmlFor="release">
        Realease
        <input
          name="filter"
          id="release"
          type="radio"
        />
      </label>

      <label htmlFor="noticia">
        Notícia
        <input
          name="filter"
          id="noticia"
          type="radio"
        />
      </label>

      <Link to="/favorites">Favoritos</Link>
    </nav>
  );
}
